async function getProductDetail(id) {

    const dataListProduct = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "GET",
      next: { revalidate: 0 }
    })
  
    const responseDataListProduct = await dataListProduct.json()
  
    return responseDataListProduct.data
  
  }

export default async function DashboardDetailPage({ params }) {   

  const data = await getProductDetail(params.id)

    return (
        <div>
            <div className="flex flex-wrap justify-center space-x-4">
                {data.images.map((value, index) => {
                    return (
                        <div key={index}>
                            <img className="rounded-lg" src={value} alt="" height={300} width={200}/>
                        </div>
                    )
                })}
            </div>
            <div>Name: {data.name}</div>
            <div>Description: {data.description}</div>
            <div>Category: {data.category}</div>
        </div>
    )
}