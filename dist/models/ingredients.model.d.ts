import { Entity } from '@loopback/repository';
export declare class Ingredients extends Entity {
    id?: number;
    name: string;
    description?: string;
    image?: string;
    recipeId?: number;
    constructor(data?: Partial<Ingredients>);
}
export interface IngredientsRelations {
}
export type IngredientsWithRelations = Ingredients & IngredientsRelations;
