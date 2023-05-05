import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Competition")
export class Competition {
    @PrimaryGeneratedColumn()
    id_competition: number

    @Column()
    id_ligue: number 

    @Column()
    date_start: Date

    @Column()
    date_end: Date 

    @Column()
    status: string

    @Column()
    id_winner : number
}
