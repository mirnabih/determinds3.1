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

  async findAll({ categoryId, limit, skip }: { categoryId?: number, limit?: number, skip?: number }) {
    const where: Prisma.ArticleWhereInput = {};
    if(categoryId) {
      where.categories = { some: { id: categoryId } };
    }
    return this.databaseService.article.findMany({ where, take: limit ?? undefined, skip: skip ?? undefined, orderBy: { createdAt: 'asc' } });
  }

  async findOne(id: number) {
    return this.databaseService.article.findUnique({
      where: { id },
      include: {
        comments: true,
        categories: true,
      },
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

  async removeMany(ids: number[]) {
    return this.databaseService.article.deleteMany({
      where: { id: { in: ids } },
    });
  }
}


