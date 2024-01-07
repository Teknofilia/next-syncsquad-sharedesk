import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let name = searchParams.get("name");

  let data = [
    {
      id: "123",
      name: "Kursi",
      slug: "sepatu_05012002",
      description: "Hello semuaa ini adalah sepatu",
      featuredImage:
        "https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images: [
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg",
      ],
      category: "fashion",
      questCount: 10,
      roomCount: 2,
      createdAt: "05-01-2023",
      updatedAt: "05-01-2023",
    },
    {
      id: "1232",
      name: "Sepatu",
      slug: "sepatu_05012002",
      description: "Hello semuaa ini adalah sepatu",
      featuredImage:
        "https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images: [
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg",
      ],
      category: "fashion",
      questCount: 10,
      roomCount: 2,
      createdAt: "05-01-2023",
      updatedAt: "05-01-2023",
    },
    {
      id: "1235",
      name: "Sepatu",
      slug: "sepatu_05012002",
      description: "Hello semuaa ini adalah sepatu",
      featuredImage:
        "https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images: [
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg",
      ],
      category: "fashion",
      questCount: 10,
      roomCount: 2,
      createdAt: "05-01-2023",
      updatedAt: "05-01-2023",
    },
    {
      id: "1234",
      name: "Sepatu",
      slug: "sepatu_05012002",
      description: "Hello semuaa ini adalah sepatu",
      featuredImage:
        "https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images: [
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg",
      ],
      category: "fashion",
      questCount: 10,
      roomCount: 2,
      createdAt: "05-01-2023",
      updatedAt: "05-01-2023",
    },
    {
      id: "12346",
      name: "Sepatu",
      slug: "sepatu_05012002",
      description: "Hello semuaa ini adalah sepatu",
      featuredImage:
        "https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images: [
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg",
      ],
      category: "fashion",
      questCount: 10,
      roomCount: 2,
      createdAt: "05-01-2023",
      updatedAt: "05-01-2023",
    },
  ];

  data = data.filter((value) => {
    if (name === "undefined") {
      return true;
    }

    if (name?.length === 0) {
      return true;
    }

    if (value.name !== name) {
      return false;
    }

    return true;
  });

  return NextResponse.json(
    {
      data,
      message: "Products fetched successfully",
    },
    { status: 200 }
  );

  // try {
  //   const allProducts = await prisma.product.findMany({
  //     include: {
  //       user: {
  //         select: {
  //           username: true,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json(
  //     { data: allProducts, message: "Products fetched successfully" },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   console.error(error);
  //   return NextResponse.json(
  //     { error: "Something went wrong. Please try again later" },
  //     { status: 500 }
  //   );
  // }
}

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const featuredImage = formData.get("featuredImage");
  const images = formData.getAll("images");
  const category = formData.get("category");
  const guestCount = formData.get("guestCount");
  const roomCount = formData.get("roomCount");
  const userId = formData.get("userId");

  let product_listingId = "";
  // save product (spaces) to database
  try {
    const allImages = [];
    images.forEach((image) => {
      allImages.push(image.name);
    });

    const createProduct = await prisma.product_listing.create({
      data: {
        name,
        slug: slugify(name, { lower: true, replacement: "-" }),
        description,
        featuredImage: featuredImage.name,
        images: allImages,
        category,
        guestCount,
        roomCount,
        userId,
      },
    });

    product_listingId = createProduct.id;
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
      Dir: `products/${product_listingId}`,
    });
    console.log(uploadFeaturedImage);

    //   Upload images file
    images.forEach(async (item) => {
      const uploadFeaturedImage = await uploadFile({
        Body: item,
        Key: item.name,
        ContentType: item.type,
        Dir: `products/${product_listingId}`,
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
