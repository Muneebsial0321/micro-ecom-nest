/*
  Warnings:

  - The primary key for the `View` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `View` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,productId]` on the table `View` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ReviewCount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasedCount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewCount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `View` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `View` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ReviewCount" INTEGER NOT NULL,
ADD COLUMN     "colours" TEXT[],
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "picUrl" TEXT[],
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "purchasedCount" INTEGER NOT NULL,
ADD COLUMN     "size" TEXT[],
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "viewCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "View" DROP CONSTRAINT "View_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "View_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Reviews";

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_productId_key" ON "Review"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "View_userId_productId_key" ON "View"("userId", "productId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
