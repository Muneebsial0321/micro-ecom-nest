-- CreateTable
CREATE TABLE "Purchased" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchased_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchased" ADD CONSTRAINT "Purchased_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
