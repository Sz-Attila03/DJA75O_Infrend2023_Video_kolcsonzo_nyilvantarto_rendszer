import { Repository } from "typeorm";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Kolcsonzottkazeta } from "../entity/kolcsonzottkazeta";

export class KolcsonzottkazetaController extends Controller
{
    repository = AppDataSource.getRepository(Kolcsonzottkazeta);

    deletbyuiddid = async (req, res) => {
        try
        {
            const entity = await this.repository.findOneBy( { kazetaid: req.params.kazetaid } );

            if(!entity)
            {
                return this.handleError(res, null, 404, 'Nem tatálható ez az azonosító!');
            }

            await this.repository.delete(entity);
            res.status(200).send();
        }
        catch (e)
        {
            this.handleError(res, e);
        }
    }
}