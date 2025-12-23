import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    return this.databaseService.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.databaseService.category.findMany({
      orderBy: { createdAt: 'asc' },
      include: { _count: { select: { articles: true } } },
    });
  }

  async findOne(id: number) {
    return this.databaseService.category.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return this.databaseService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.category.delete({
      where: { id },
    });
  }

  async addArticlesToCategory(categoryId: number, articleIds: number[]) {
    return this.databaseService.category.update({
      where: { id: categoryId },
      data: { articles: { connect: articleIds.map(id => ({ id })) } },
    });
  }
}
