import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req) {
  const formData = await req.formData();
  const user = formData.get("user");
  const review = formData.get("startDate");
  const rating = formData.get("endDate");

  const userId = formData.get("userId");
  const product_listingId = formData.get("product_listingId");

  try {
    const createReview = await prisma.review.create({
      data: {
        user,
        review,
        rating,
        userId,
        product_listingId,
      },
    });
    // product_listingId = createReservation.id;
    console.log(createReservation);
    return NextResponse.json(
      { data: createReview, message: "Review created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}
