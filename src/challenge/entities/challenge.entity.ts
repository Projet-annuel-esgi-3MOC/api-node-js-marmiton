import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Challenge")
export class Challenge {
    @PrimaryGeneratedColumn()
    id_challenge: number

    @Column()
    name: string
    
    @Column()
    description: string

    @Column()
    time: number

    @Column()
    picture: string
}
