import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req) {
  const formData = await req.formData();
  // const user = formData.get("user");
  const review = formData.get("review");
  const rating = formData.get("rating");

  const userId = formData.get("userId");
  const product_listingId = formData.get("product_listingId");
  console.log(formData);
  try {
    const createReview = await prisma.review.create({
      data: {
        // user,
        review,
        rating,
        userId,
        product_listingId,
      },
    });
    // product_listingId = createReservation.id;
    console.log(createReview);
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

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("product_listingId");

  let allReviews;

  try {
    if (query) {
      allReviews = await prisma.review.findMany({
        where: {
          name: {
            contains: query || "",
            mode: "insensitive",
          },
        },
      });
    } else {
      allReviews = await prisma.review.findMany();
    }
    //console.log(allReviews)

    return NextResponse.json(
      { message: "Review fetched succesfully!", data: allReviews },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Review fetch failed!" },
      { status: 500 }
    );
  }
}
