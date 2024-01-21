import prisma from "@/utils/prisma";

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
  const [data] = await getProductDetail(params.id);

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {data.images.map((value, index) => {
          return (
            <div key={index} className="mb-4">
              <img
                className="rounded-lg"
                src={value}
                alt=""
                height={400}
                width={450}
              />
            </div>
          );
        })}
      </div>
      <div>
        <h1>{data.name}</h1>
      </div>
      <div>
        <h5>{data.description}</h5>
      </div>
      <div>
        <p className="text-xl">{data.guestCount} guests &#183; {data.roomCount} rooms</p>
      </div>
    </div>
  );
}
