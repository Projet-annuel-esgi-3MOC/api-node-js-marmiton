import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Recipe, RecipeRelations} from '../models';

export class RecipeRepository extends DefaultCrudRepository<
  Recipe,
  typeof Recipe.prototype.id,
  RecipeRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Recipe, dataSource);
  }
}
