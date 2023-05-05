import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("League")
export class League {

    @PrimaryGeneratedColumn()
    id_league: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    criteria:  string

    @Column()
    id_performance: string
}
