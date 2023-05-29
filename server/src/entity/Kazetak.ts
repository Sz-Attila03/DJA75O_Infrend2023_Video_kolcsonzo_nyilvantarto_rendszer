import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { AllapotDTO, KazetakDTO } from "../../../models";
import { Allapot } from "./Allapot";

@Entity()
export class Kazetak implements KazetakDTO
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