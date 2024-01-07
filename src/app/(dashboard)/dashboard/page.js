import InputSearchComponent from "./component/InputSearch"
import prisma from "@/utils/prisma"

/** 
 * @param {string} name  
*/
async function getProducts(nameParam) {

  // const dataListProduct = await fetch(`http://localhost:3000/api/products?name=${name}`, {
  //   method: "GET",
  //   next: { revalidate: 0 }
  // })

  // const responseDataListProduct = await dataListProduct.json()

  // return responseDataListProduct.data

  const dataListProduct = await prisma.Product_Listing.findMany({
    where: {
      name: {
        contains: nameParam || "",
        mode: "insensitive",
      },
    },
  });

  //const dataListProduct = await prisma.Product_Listing.findMany(name);
  //console.log(dataListProduct)

  return dataListProduct

}

export default async function DashboardPage({searchParams}) {  

  const { name } = searchParams

  const data = await getProducts(name)
  console.log(data)

  return (
    <div className="">
      <div className="mb-5">
        <InputSearchComponent ></InputSearchComponent>
      </div>
      <div className=" grid gap-4 grid-cols-3 mb-10">
        {
          data?.map((value, index) => {

            return (

              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={value.featuredImage} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {value.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {value.description}
                  </p>
                  <a href={`/dashboard/${value.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}