import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id_message: number;

    @Column()
    id_sender: number

    @Column()
    id_receiver: number
    
    @Column()
    message: string

    @Column()
    date: Date
}
