import { Repository } from "typeorm";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Allapot } from "../entity/Allapot";

export class AllaporController extends Controller
{
    repository = AppDataSource.getRepository(Allapot);
}