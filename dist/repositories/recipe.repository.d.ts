import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Recipe, RecipeRelations, Ingredients } from '../models';
import { IngredientsRepository } from './ingredients.repository';
export declare class RecipeRepository extends DefaultCrudRepository<Recipe, typeof Recipe.prototype.id, RecipeRelations> {
    protected ingredientsRepositoryGetter: Getter<IngredientsRepository>;
    readonly ingredients: HasManyRepositoryFactory<Ingredients, typeof Recipe.prototype.id>;
    constructor(dataSource: MysqlDataSource, ingredientsRepositoryGetter: Getter<IngredientsRepository>);
}
