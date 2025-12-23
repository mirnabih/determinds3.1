import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './database/database.module.js';
import { ArticlesModule } from './articles/articles.module.js';
import { CommentsModule } from './comments/comments.module.js';
import { CategoriesModule } from './categories/categories.module.js';

@Module({
  imports: [DatabaseModule, ArticlesModule, CommentsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
