import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Ingredients, IngredientsRelations } from '../models';
export declare class IngredientsRepository extends DefaultCrudRepository<Ingredients, typeof Ingredients.prototype.id, IngredientsRelations> {
    constructor(dataSource: MysqlDataSource);
}
