import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Recipe")
export class Recipe {
    @PrimaryGeneratedColumn()
    id_recipe: number

    @Column()
    name: string
    
    @Column()
    description: string

    @Column()
    picture: string

    @Column()
    level: number

    @Column()
    time_to_prepare: string

    @Column()
    time_to_cook: string

    @Column()
    ingredients: string
}
