import { AppDataSource } from "../data-source";
import { Kazetak } from "../entity/Kazetak";
import { Controller } from "./base.controller";

export class KazetakController extends Controller
{
    repository = AppDataSource.getRepository(Kazetak);
}