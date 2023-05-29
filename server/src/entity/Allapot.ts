import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AllapotDTO } from "../../../models";

@Entity()
export class Allapot implements AllapotDTO
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    status: string;
}