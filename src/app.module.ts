import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { dataSourceOptions } from 'db/data-source';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ForumModule } from './forum/forum.module';
import { LevelModule } from './level/level.module';
import { ChallengeModule } from './challenge/challenge.module';
import { RewardsModule } from './rewards/rewards.module';
import { LeagueModule } from './league/league.module';
import { CompetitionModule } from './competition/competition.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, RecipeModule, IngredientsModule, ForumModule, LevelModule, ChallengeModule, RewardsModule, LeagueModule, CompetitionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
