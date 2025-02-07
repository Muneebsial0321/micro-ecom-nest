/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedat" TIMESTAMP(3),
ADD COLUMN     "isEmailVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpireDate" TIMESTAMP(3),
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "profilePic" TEXT,
ADD COLUMN     "provider" TEXT DEFAULT 'local',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
