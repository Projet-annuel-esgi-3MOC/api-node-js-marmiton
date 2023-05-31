import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Recipe } from '../models';
import { RecipeRepository } from '../repositories';
export declare class RecipeController {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository);
    create(recipe: Omit<Recipe, 'id'>): Promise<Recipe>;
    count(where?: Where<Recipe>): Promise<Count>;
    find(filter?: Filter<Recipe>): Promise<Recipe[]>;
    updateAll(recipe: Recipe, where?: Where<Recipe>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Recipe>): Promise<Recipe>;
    updateById(id: number, recipe: Recipe): Promise<void>;
    replaceById(id: number, recipe: Recipe): Promise<void>;
    deleteById(id: number): Promise<void>;
}
