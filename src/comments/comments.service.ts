import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class CommentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  async create(createCommentDto: Prisma.CommentCreateInput) {
    return this.databaseService.comment.create({
      data: createCommentDto,
    });
  }

  async findAll(articleId: number) {
    return this.databaseService.comment.findMany({ where: { articleId }, orderBy: { createdAt: 'asc' } });
  }

  async findOne(id: number) {
    return this.databaseService.comment.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCommentDto: Prisma.CommentUpdateInput) {
    return this.databaseService.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.comment.delete({
      where: { id },
    });
  }
}
