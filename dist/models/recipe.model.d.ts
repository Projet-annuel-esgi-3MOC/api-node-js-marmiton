import { Entity } from '@loopback/repository';
import { Ingredients } from './ingredients.model';
export declare class Recipe extends Entity {
    id?: number;
    name: string;
    description?: string;
    photo?: string;
    level?: string;
    timetoprepare?: string;
    timetocook?: string;
    ingredientsId?: number;
    ingredients: Ingredients[];
    constructor(data?: Partial<Recipe>);
}
export interface RecipeRelations {
}
export type RecipeWithRelations = Recipe & RecipeRelations;
