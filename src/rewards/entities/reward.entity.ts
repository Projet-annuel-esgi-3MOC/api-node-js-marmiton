import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Reward {
    @PrimaryGeneratedColumn()
    id_reward: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    picture: string;
}

