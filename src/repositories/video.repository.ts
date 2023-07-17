import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Video, VideoRelations} from '../models';

export class VideoRepository extends DefaultCrudRepository<
  Video,
  typeof Video.prototype.id,
  VideoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Video, dataSource);
  }
}
