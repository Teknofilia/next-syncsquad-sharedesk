-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_Listing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "images" TEXT[],
    "category" TEXT NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "roomCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Product_Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "product_listingId" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "product_listingId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Master_Jam" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Master_Jam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_Detail" (
    "id" TEXT NOT NULL,
    "product_listingId" TEXT NOT NULL,
    "jamId" TEXT NOT NULL,

    CONSTRAINT "Product_Detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation_Detail" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "jamId" TEXT NOT NULL,

    CONSTRAINT "Reservation_Detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_Listing_slug_key" ON "Product_Listing"("slug");

-- AddForeignKey
ALTER TABLE "Product_Listing" ADD CONSTRAINT "Product_Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_product_listingId_fkey" FOREIGN KEY ("product_listingId") REFERENCES "Product_Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_product_listingId_fkey" FOREIGN KEY ("product_listingId") REFERENCES "Product_Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_Detail" ADD CONSTRAINT "Product_Detail_product_listingId_fkey" FOREIGN KEY ("product_listingId") REFERENCES "Product_Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_Detail" ADD CONSTRAINT "Product_Detail_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Master_Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation_Detail" ADD CONSTRAINT "Reservation_Detail_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation_Detail" ADD CONSTRAINT "Reservation_Detail_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Master_Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE;
