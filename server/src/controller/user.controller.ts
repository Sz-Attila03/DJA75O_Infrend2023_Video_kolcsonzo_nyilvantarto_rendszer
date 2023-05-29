import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class UserController extends Controller
{
    repository = AppDataSource.getRepository(User);

    create = async (req, res) => {
        try
        {
            const entity = this.repository.create(req.body as object);
            entity.id = null;

            entity.passwd = await bcrypt.hash(entity.passwd, 12);

            const result = await this.repository.save(entity);
            delete result.passwd;

            res.json(result);
        }
        catch (err)
        {
            this.handleError(res, err)
        }
    }

    login = async (req, res) => {
        try
        {
            const user = await this.repository.findOne({
                where: { email: req.body.email },
                select: [ 'id', 'passwd', 'status', 'role' ]
            });

            if(user.status === 0)
            {
                return this.handleError(res, null, 401, 'Ez a felhsználó törölvevan vagy le lett tiltva!');
            }

            if (!user)
            {
                return this.handleError(res, null, 401, 'Helytelen email cím vagy jelszó!');
            }

            const passwdMatches = await bcrypt.compare(req.body.passwd, user.passwd);

            if (!passwdMatches)
            {
                return this.handleError(res, null, 401, 'Helytelen email cim vagy jelszó!');
            }

            const token = jwt.sign({ id: user.id }, 'mySecret', { expiresIn: '2w' });
            res.json({ accessToken: token, user: user });
            
        }
        catch (err)
        {
            this.handleError(res, err);
        }
    };

    keresUsername = async (req, res) => {
        try
        {
            const user = await this.repository.findOneBy({ username: req.params.username });

            if(!user)
            {
                return this.handleError(res, null, 401, 'Nincs ilyen felhasználó!');
            }

            res.json(user);
        }
        catch (err)
        {
            this.handleError(res, err);
        }
    }

    keresSzemSzam = async (req, res) => {
        try
        {
            const user = await this.repository.findOneBy({ szemszam: req.params.szemszam });

            if(!user)
            {
                return this.handleError(res, null, 401, 'Nincs ilyen felhasználó!');
            }

            res.json(user);
        }
        catch (err)
        {
            this.handleError(res, err);
        }
    }

    keresId = async (req, res) => {
        try
        {
            console.log(req.params);

            const entity = await this.repository.findOneBy({ id : req.params.id });

            if(!entity)
            {
                return this.handleError(res, null, 404, 'Nem tatálható ez az azonosító!');
            }

            res.json(entity);
        }
        catch(err)
        {
            this.handleError(res, err);
        }
    }

}