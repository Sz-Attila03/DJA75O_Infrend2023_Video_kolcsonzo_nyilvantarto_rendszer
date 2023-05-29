import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { KolcdonzottDvdDTO } from "../../../models";

@Entity()
export class Kolcsonzottdvd implements KolcdonzottDvdDTO
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer'})
    dvdid: number;

    @Column({ type: 'integer'})
    userid: number;
}