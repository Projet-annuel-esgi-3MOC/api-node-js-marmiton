import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Recipe, RecipeRelations } from '../models';
export declare class RecipeRepository extends DefaultCrudRepository<Recipe, typeof Recipe.prototype.id, RecipeRelations> {
    constructor(dataSource: MysqlDataSource);
}
