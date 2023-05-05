import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("Ingrédients")
export class Ingredient {
    @PrimaryGeneratedColumn()
    id_ingredient: number;
    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column()
    picture: string;
}
