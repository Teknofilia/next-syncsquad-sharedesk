import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req) {
  const formData = await req.formData();
  // const user = formData.get("user");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const totalPrice = formData.getAll("totalPrice");

  const userId = formData.get("userId");
  const product_listingId = formData.get("product_listingId");

  try {
    const createReservation = await prisma.reservation.create({
      data: {
        // user,
        startDate,
        endDate,
        totalPrice: Number(totalPrice),
        userId,
        product_listingId,
      },
    });
    // product_listingId = createReservation.id;
    console.log(createReservation);
    return NextResponse.json(
      { data: createReservation, message: "Reservation created successfully" },
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
