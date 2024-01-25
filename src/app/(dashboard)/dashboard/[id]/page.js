"use client"

import prisma from "@/utils/prisma"
//import ModalAddReservasi from '../../../../components/modal/modal-Add-Reservation'

async function getProductDetail(idParam) {
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

export default async function DashboardDetailPage({ params }) {
  const [data] = await getProductDetail(params.id)
  // const [isShow, setIsShow] = useState(false)
  // const [detail, setDetail] = useState(null)
  // const [id, setId] = useState(false)

  // /** @param {string} id */
  // const showModalUpdate = (id, data) => {
  //   setId(id)
  //   setDetail(data)
  //   setIsShow(true)
  // }

  // useEffect(()=>{
  //   if(!isShow) {
  //     setId("")
  //     setDetail(null)
  //   }
  // },[isShow])

  return (
    <>
      {/* <ModalAddReservasi id={id} isShow={isShow} setIsShow={setIsShow} data={detail} /> */}
      <div className="w-full h-full">
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          {data.images.map((value, index) => {
            const pathImage = `https://sharedesk.s3.ap-southeast-1.amazonaws.com/products/${data.id}/${value}`
            return (
              <div key={index} className="mb-4">
                <img
                  className="rounded-lg"
                  src={pathImage}
                  alt=""
                  height={400}
                  width={450}
                />
              </div>
            );
          })}
        </div>
        <div className="p-2">
          <h1 className="text-transform: capitalize">{data.name}</h1>
        </div>
        <div className="p-2">
          <h5 className="font-light text-transform: normal-case">{data.description}</h5>
        </div>
        <div className="p-2">
          <p className="text-lg font-semibold text-zinc-500">{data.guestCount} guests &#183; {data.roomCount} rooms</p>
        </div>
        <div className="p-2">
          <button
            color="primary"
            role="button"
            onClick={ () => showModalUpdate(data.id, data) }
            className="
            focus:ring-offset-2 leading-none text-white font-medium rounded-lg text-sm px-4 py-2
            border bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
