import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Kolcsonzottdvd } from "../entity/KolcsonzottDvd";

export class KolcsonzottDvdController extends Controller
{
    repository = AppDataSource.getRepository(Kolcsonzottdvd);

    deletbyuiddid = async (req, res) => {
        try
        {
            const entity = await this.repository.findOneBy( { dvdid: req.params.dvdid } );

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