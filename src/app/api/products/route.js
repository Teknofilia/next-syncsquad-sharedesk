import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const allProducts = await prisma.product.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
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
  const name = formData.get("name") ?? ""; // Use nullish coalescing operator to provide a default value if `formData.get("name")` is undefined
  const description = formData.get("description");
  const featuredImage = formData.get("featuredImage");
  const images = formData.getAll("images");
  const category = formData.get("category");
  const userId = formData.get("userId");

  let productId = "";
  // save product (spaces) to database
  try {
    const allImages = [];
    images.forEach((image) => {
      allImages.push(image.name);
    });

    const createProduct = await prisma.product.create({
      data: {
        name,
        slug: slugify(name, { lower: true, replacement: "-" }),
        description,
        featuredImage: featuredImage.name,
        images: allImages,
        category,
        userId,
      },
    });

    productId = createProduct.id;
    console.log(createProduct);
  } catch (error) {
    console.log(error);
  }

  // Send Image ke AWS S3
  try {
    //   Upload featured image file
    const uploadFeaturedImage = await uploadFile({
      Body: featuredImage,
      Key: featuredImage.name,
      ContentType: featuredImage.type,
      Dir: `products/${productId}`,
    });
    console.log(uploadFeaturedImage);

    //   Upload images file
    images.forEach(async (item) => {
      const uploadFeaturedImage = await uploadFile({
        Body: item,
        Key: item.name,
        ContentType: item.type,
        Dir: `products/${productId}`,
      });
      console.log(uploadFeaturedImage);
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 201 }
  );
}
