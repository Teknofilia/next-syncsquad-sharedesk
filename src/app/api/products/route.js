import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
export async function GET() {
  try {
    const allProducts = await prisma.product.findMany();
    return NextResponse.json(
      { data: allProducts, message: "Products fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const featuredImage = formData.get("featuredImage");
  const images = formData.getAll("images");
  const category = formData.get("category");

  // send image to aws s3

  // save product (spaces) to database
  return NextResponse.json({
    data: {
      name,
      description,
      featuredImage,
      images,
      category,
    },
    message: "Product created successfully",
  });
}
