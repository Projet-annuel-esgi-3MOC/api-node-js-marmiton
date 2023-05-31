import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Ingredients } from '../models';
import { IngredientsRepository } from '../repositories';
export declare class IngredientsController {
    ingredientsRepository: IngredientsRepository;
    constructor(ingredientsRepository: IngredientsRepository);
    create(ingredients: Omit<Ingredients, 'id'>): Promise<Ingredients>;
    count(where?: Where<Ingredients>): Promise<Count>;
    find(filter?: Filter<Ingredients>): Promise<Ingredients[]>;
    updateAll(ingredients: Ingredients, where?: Where<Ingredients>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Ingredients>): Promise<Ingredients>;
    updateById(id: number, ingredients: Ingredients): Promise<void>;
    replaceById(id: number, ingredients: Ingredients): Promise<void>;
    deleteById(id: number): Promise<void>;
}
