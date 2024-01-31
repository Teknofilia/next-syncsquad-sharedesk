import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function GET(request) {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("name");

	let allProducts;

	try {
		if (query) {
			allProducts = await prisma.product_Listing.findMany({
				where: {
					name: {
						contains: query || "",
						mode: "insensitive",
					},
				},
			});
		} else {
			allProducts = await prisma.product_Listing.findMany();
		}
		//console.log(allProducts)

		return NextResponse.json(
			{ message: "Product fetched succesfully!", data: allProducts },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Product fetch failed!" },
			{ status: 500 }
		);
	}

	//   const { searchParams } = new URL(request.url)
	//   let name = searchParams.get('name')

	//   let data = [
	//     {
	//       id:"1",
	//       name:"GoWork",
	//       slug:"gowork_01",
	//       description:"Sedang mencari rekomendasi coworking space Jakarta Pusat? GoWork bisa masuk dalam daftar pilihan Anda. Coworking space yang berada di Plaza Indonesia ini menyuguhkan ruangan berdesain modern dan industrialis, demi membawa atmosfir kerja yang nyaman. Fasilitasnya pun lengkap mulai dari ruang kerja, dedicated desk, conference room, private office, hingga event space.",
	//       featuredImage:"https://images.bisnis.com/posts/2019/02/27/894173/cocowork_200718.jpeg",
	//       images:[
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
	//         "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
	//       ],
	//       category:"Working",
	//       questCount:10,
	//       roomCount:2,
	//       createdAt:"05-01-2023",
	//       updatedAt:"05-01-2023"
	//     },
	//     {
	//       id:"2",
	//       name:"WeWork",
	//       slug:"wework_02",
	//       description:"WeWork bisa menjadi pilihan coworking space Jakarta dengan layanan fasilitas yang cukup lengkap. Provider coworking space asal New York, Amerika Serikat itu, memiliki beberapa cabang yang tersebar di sejumlah wilayah di Jakarta dan sekitarnya. Beberapa cabang tersebut di antaranya Revenue Tower SCBD, Menara Astra, Gama Tower, Noble House, South Quarter, dan Sinar MSIG Tower.",
	//       featuredImage:"https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/02/Web_150DPI-20191213_WeWork_One-Seaport-Square-Boston_011_v1.jpg",
	//       images:[
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
	//         "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
	//       ],
	//       category:"Working",
	//       questCount:10,
	//       roomCount:2,
	//       createdAt:"05-01-2023",
	//       updatedAt:"05-01-2023"
	//     },
	//     {
	//       id:"3",
	//       name:"CoHive",
	//       slug:"cohive_03",
	//       description:"CoHive berlokasi di Menara Mandiri, Jalan Jenderal Sudirman No.54–55, RT 5/RW 3, Senayan, Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta. CoHive terbilang nyaman untuk dijadikan pilihan tempat kerja bagi para karyawan, freelancer, hingga profesional di ibu kota.",
	//       featuredImage:"https://blog.go-work.com/wp-content/uploads/2020/02/coworking-space-near-me.jpg",
	//       images:[
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
	//         "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
	//       ],
	//       category:"Private",
	//       questCount:10,
	//       roomCount:2,
	//       createdAt:"05-01-2023",
	//       updatedAt:"05-01-2023"
	//     },
	//     {
	//       id:"4",
	//       name:"Greenhouse Coworking ID",
	//       slug:"greenhouse_04",
	//       description:"Berbeda dengan kebanyakan coworking space, Greenhouse Coworking Space menyuguhkan ruang kerja bersama dengan konsep ramah lingkungan. Coworking space Jakarta Selatan ini memiliki desain interior ramah lingkungan yang memberikan kesan nyaman, segar dan natural.",
	//       featuredImage:"https://uptown.id/wp-content/uploads/2020/03/Fasilitas-Co-working-Space-Desain-Interior-Yang-Keren.jpg",
	//       images:[
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
	//         "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
	//       ],
	//       category:"Meeting",
	//       questCount:10,
	//       roomCount:2,
	//       createdAt:"05-01-2023",
	//       updatedAt:"05-01-2023"
	//     },
	//     {
	//       id:"5",
	//       name:"Vin & Co.Working",
	//       slug:"vinnco_05",
	//       description:"Vin & Co merupakan pilihan coworking space Jakarta Timur lainnya untuk kamu. Di sini tersedia area kerja indoor dan outdoor, yang sama-sama nyaman untuk bekerja. Fasilitas yang tersedia di Vin & Co juga cukup lengkap meliputi lexi desk, dedicated desk, meeting room, event space, virtual office, dan private office.",
	//       featuredImage:"https://www.arteil.com.au/wp-content/uploads/2022/06/coworking-space-blog-1.jpg",
	//       images:[
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
	//         "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
	//         "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
	//       ],
	//       category:"fashion",
	//       questCount:10,
	//       roomCount:2,
	//       createdAt:"05-01-2023",
	//       updatedAt:"05-01-2023"
	//     }
	//   ]

	//   data = data.filter((value) => {

	//     if(name === "undefined"){
	//       return true
	//     }

	//     if(name?.length === 0){
	//       return true
	//     }

	//     if(value.name !== name){
	//       return false
	//     }

	//     return true
	//   })

	//   return NextResponse.json(
	//     {
	//       data,
	//       message:"Products fetched successfully"
	//     },
	//     {status:200}
	//   )
}

export async function POST(req) {
	const formData = await req.formData();
	const name = formData.get("name");
	const description = formData.get("description");
	const featuredImage = formData.get("featuredImage");
	const images = formData.getAll("images");
	const category = formData.get("category");
	const facility = formData.get("facility");
	const price = formData.get("price");
	const guestCount = formData.get("guestCount");
	const roomCount = formData.get("roomCount");
	const userId = formData.get("userId");
	// console.log(formData);

	let product_listingId = "";
	// save product (spaces) to database
	try {
		const allImages = [];
		images.forEach((image) => {
			allImages.push(image.name);
		});

		const createProduct = await prisma.product_Listing.create({
			data: {
				name,
				slug: slugify(name, { lower: true, replacement: "-" }),
				description,
				featuredImage: featuredImage.name,
				images: allImages,
				category,
				facility,
				price: Number(price),
				guestCount: Number(guestCount),
				roomCount: Number(roomCount),
				userId,
			},
		});

		product_listingId = createProduct.id;
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

		//   Upload images file
		images.forEach(async (item) => {
			const uploadFeaturedImage = await uploadFile({
				Body: item,
				Key: item.name,
				ContentType: item.type,
				Dir: `products/${product_listingId}`,
			});
		});
	} catch (error) {
		console.log(error);
	}

	return NextResponse.json(
		{ message: "Product created successfully" },
		{ status: 201 }
	);
}
