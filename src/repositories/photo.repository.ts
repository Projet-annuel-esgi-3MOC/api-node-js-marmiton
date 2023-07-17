import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Photo, PhotoRelations} from '../models';

export class PhotoRepository extends DefaultCrudRepository<
  Photo,
  typeof Photo.prototype.id,
  PhotoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Photo, dataSource);
  }
}
