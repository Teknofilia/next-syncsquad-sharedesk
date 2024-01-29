import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req) {
	const formData = await req.formData();
	// const user = formData.get("user");
	const reservationDate = formData.get("reservationDate");
	const totalPrice = formData.getAll("totalPrice");
	const createdBy = formData.getAll("createdBy");

	const userId = formData.get("userId");
	const product_listingId = formData.get("product_listingId");

	try {
		const createReservation = await prisma.reservation.create({
			data: {
				// user,
				reservationDate,
				totalPrice: Number(totalPrice),
				createdBy,
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

export async function GET(req) {
	const searchParams = req.nextUrl.searchParams;
	const query = searchParams.get("product_listingId");

	let allReservations;

	try {
		if (query) {
			allReservations = await prisma.reservation.findMany({
				where: {
					name: {
						contains: query || "",
						mode: "insensitive",
					},
				},
			});
		} else {
			allReservations = await prisma.reservation.findMany();
		}
		//console.log(allReservations)

		return NextResponse.json(
			{ message: "Reservations fetched succesfully!", data: allReservations },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Reservations fetch failed!" },
			{ status: 500 }
		);
	}
}
