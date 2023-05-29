import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserDTO } from "../../../models"

@Entity()
export class User implements UserDTO 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    firstName: string;

    @Column({ type: 'text' })
    lastName: string;

    @Column({ type: 'text' })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    passwd: string;

    @Column({ type: 'text' })
    telszam: string;

    @Column({ type: 'text' })
    szemszam: string;

    @Column({ type: 'text' })
    lakcim: string;

    @Column({ type: 'text' })
    role: string;

    @Column({ type: 'integer' })
    status: number;
}
