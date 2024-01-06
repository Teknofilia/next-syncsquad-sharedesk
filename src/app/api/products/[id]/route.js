import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

let data = {
    "123":{
      id:"123",
      name:"Kursi",
      slug:"sepatu_05012002",
      description:"Hello semuaa ini adalah sepatu",
      featuredImage:"https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images:[
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
      ],
      category:"fashion",
      questCount:10,
      roomCount:2,
      createdAt:"05-01-2023",
      updatedAt:"05-01-2023"
    },
    "1232":{
      id:"1232",
      name:"Sepatu",
      slug:"sepatu_05012002",
      description:"Hello semuaa ini adalah sepatu",
      featuredImage:"https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images:[
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
      ],
      category:"fashion",
      questCount:10,
      roomCount:2,
      createdAt:"05-01-2023",
      updatedAt:"05-01-2023"
    },
    "1235":{
      id:"1235",
      name:"Sepatu",
      slug:"sepatu_05012002",
      description:"Hello semuaa ini adalah sepatu",
      featuredImage:"https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images:[
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
      ],
      category:"fashion",
      questCount:10,
      roomCount:2,
      createdAt:"05-01-2023",
      updatedAt:"05-01-2023"
    },
    "1234":{
      id:"1234",
      name:"Sepatu",
      slug:"sepatu_05012002",
      description:"Hello semuaa ini adalah sepatu",
      featuredImage:"https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images:[
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
      ],
      category:"fashion",
      questCount:10,
      roomCount:2,
      createdAt:"05-01-2023",
      updatedAt:"05-01-2023"
    },
    "12346":{
      id:"12346",
      name:"Sepatu",
      slug:"sepatu_05012002",
      description:"Hello semuaa ini adalah sepatu",
      featuredImage:"https://lzd-img-global.slatic.net/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp",
      images:[
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/5/485e8474-a8d1-4d03-895f-9ef89c1635aa.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/19/91019af6-04f9-4498-b29d-a969c5459188.jpg",
        "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(100):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/products/eca5007c-1fe8-428e-8a31-5ad696b77ecf-argapura-agri-1.jpg"
      ],
      category:"fashion",
      questCount:10,
      roomCount:2,
      createdAt:"05-01-2023",
      updatedAt:"05-01-2023"
    }    
  }

export async function GET(request, { params }) {
    const ids = params.id

    return NextResponse.json(
        {
          data: data[ids],      
          message:"Products fetched successfully"
        },
        {status:200}
      )
    //console.log(ids)
}