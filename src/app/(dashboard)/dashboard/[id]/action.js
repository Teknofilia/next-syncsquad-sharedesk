"use server"

import prisma from "@/utils/prisma";

export async function acitonGetProductDetail(idParam) {
	const dataListProduct = await prisma.product_Listing.findMany({
		where: {
			id: {
				contains: idParam || "",
				mode: "insensitive",
			},
		},
	});

	return dataListProduct;
}

