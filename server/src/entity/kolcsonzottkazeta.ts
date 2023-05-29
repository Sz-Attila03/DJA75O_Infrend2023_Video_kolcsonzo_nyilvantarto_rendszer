import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { KolcsonzottkazetaDTO } from "../../../models";

@Entity()
export class Kolcsonzottkazeta implements KolcsonzottkazetaDTO
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer'})
    kazetaid: number;

    @Column({ type: 'integer'})
    userid: number;
}