import { AppDataSource } from "../data-source";
import { Dvd } from "../entity/Dvd"
import { Controller } from "./base.controller";

export class DvdController extends Controller
{
    repository = AppDataSource.getRepository(Dvd);
}