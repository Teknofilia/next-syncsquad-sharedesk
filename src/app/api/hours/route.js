import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req) {
	const formData = await req.formData()
	const desc = formData.get("description")
	const isActive = formData.get("isActive")
	// console.log(formData)

	try {
		const createHours = await prisma.master_Jam.create({
			data: {
				description: desc,
				isActive: isActive === "1" ? true : false,
			},
		})
		
		//console.log(createReview)
		return NextResponse.json(
			{ data: createHours, message: "Review created successfully" },
			{ status: 201 }
		);
	} catch (error) {
		console.log(error)

		return NextResponse.json(
			{ errorMessage: "Something went wrong. Please try again later" },
			{ status: 500 }
		);
	}
}

export async function GET(req) {
	let allHours

	try {
		allHours = await prisma.master_Jam.findMany()
		//console.log(allReviews)

		return NextResponse.json(
			{ message: "Review fetched succesfully!", data: allHours },
			{ status: 200 }
		)
	} catch (error) {
		console.log(error)

		return NextResponse.json(
			{ error: "Review fetch failed!" },
			{ status: 500 }
		)
	}
}
