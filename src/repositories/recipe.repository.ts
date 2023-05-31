import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Recipe, RecipeRelations, Ingredients} from '../models';
import {IngredientsRepository} from './ingredients.repository';

export class RecipeRepository extends DefaultCrudRepository<
  Recipe,
  typeof Recipe.prototype.id,
  RecipeRelations
> {
  public readonly ingredients: HasManyRepositoryFactory<
    Ingredients,
    typeof Recipe.prototype.id
  >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
    @repository.getter('IngredientsRepository')
    protected ingredientsRepositoryGetter: Getter<IngredientsRepository>,
  ) {
    super(Recipe, dataSource);
    this.ingredients = this.createHasManyRepositoryFactoryFor(
      'ingredients',
      ingredientsRepositoryGetter,
    );
    this.registerInclusionResolver(
      'ingredients',
      this.ingredients.inclusionResolver,
    );
  }
}
