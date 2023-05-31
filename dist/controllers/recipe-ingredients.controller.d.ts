import { Count, Filter, Where } from '@loopback/repository';
import { Recipe, Ingredients } from '../models';
import { RecipeRepository } from '../repositories';
export declare class RecipeIngredientsController {
    protected recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository);
    find(id: number, filter?: Filter<Ingredients>): Promise<Ingredients[]>;
    create(id: typeof Recipe.prototype.id, ingredients: Omit<Ingredients, 'id'>): Promise<Ingredients>;
    patch(id: number, ingredients: Partial<Ingredients>, where?: Where<Ingredients>): Promise<Count>;
    delete(id: number, where?: Where<Ingredients>): Promise<Count>;
}
