import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';
import { Prisma } from '../../generated/prisma/client.js';

@Injectable()
export class ArticlesService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  async create(createArticleDto: Prisma.ArticleCreateInput) {
    return this.databaseService.article.create({
      data: createArticleDto,
    });
  }

  async findAll() {
    return this.databaseService.article.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.article.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateArticleDto: Prisma.ArticleUpdateInput) {
    return this.databaseService.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.article.delete({
      where: { id },
    });
  }
}


