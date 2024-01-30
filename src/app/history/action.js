"use server"

import prisma from "@/utils/prisma"

export async function actionGetDataReview () {
  const result = await prisma.$queryRaw`SELECT * FROM "public"."Review"`
  //const result = await prisma.$queryRaw`SELECT b.name, c.reservationDate, a.rating, a.review, a.userId, a.product_listingId FROM "public"."Review" a JOIN "public"."Product_Listing" b ON b.id = a.product_listingId JOIN "public"."Reservation" c ON c.product_listingId = b.id`
  return result
}
