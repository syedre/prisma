/*
  Warnings:

  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `todos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."orders" DROP CONSTRAINT "fk_product";

-- DropForeignKey
ALTER TABLE "public"."todos" DROP CONSTRAINT "todos_user_id_fkey";

-- AlterTable
ALTER TABLE "prisma" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- DropTable
DROP TABLE "public"."orders";

-- DropTable
DROP TABLE "public"."products";

-- DropTable
DROP TABLE "public"."todos";

-- DropTable
DROP TABLE "public"."users";
