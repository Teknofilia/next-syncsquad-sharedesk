async function getProductDetail(id) {

    const dataListProduct = await prisma.Product_Listing.findMany(id);
    //console.log(dataListProduct)

    return dataListProduct

    // const dataListProduct = await fetch(`http://localhost:3000/api/products/${id}`, {
    //   method: "GET",
    //   next: { revalidate: 0 }
    // })
  
    // const responseDataListProduct = await dataListProduct.json()
  
    // return responseDataListProduct.data
  
  }

export default async function DashboardDetailPage({ params }) {   

  const data = await getProductDetail(params.id)

    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center space-x-4 mb-6">
                {data.images.map((value, index) => {
                    return (
                        <div key={index}>
                            <img className="rounded-lg" src={value} alt="" height={350} width={250}/>
                        </div>
                    )
                })}
            </div>
            <div><h1>{data.name}</h1></div>
            <div><h5>{data.description}</h5></div>
            <div><p>Price: Rp. 400.000 / Day</p></div>
        </div>
    )
}