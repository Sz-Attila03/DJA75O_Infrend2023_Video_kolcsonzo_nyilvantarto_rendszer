import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { AllapotDTO, DvdDTO } from "../../../models";
import { Allapot } from "./Allapot";

@Entity()
export class Dvd implements DvdDTO
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text' })
    date: string;

    @Column({ type: 'text' })
    status: string;

    @Column()
    imgUrl: string;
}