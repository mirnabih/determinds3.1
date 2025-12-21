-- CreateEnum
CREATE TYPE "ArticleType" AS ENUM ('LONG', 'SHORT');

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "type" "ArticleType" NOT NULL DEFAULT 'LONG';
