"use client";

import React, {useEffect, useState} from 'react'
import { imageUrl } from "@/config/apiUrl";
import slugify from "slugify";
import ModalAddReservasi from '../../../../components/modal/modal-Add-Reservation'
import { acitonGetProductDetail } from "./action";

export default function DashboardDetailPage({ params }) {

  const [data, setData] = useState({
    images:[]
  })

	const [isShow, setIsShow] = useState(false)
	const [detail, setDetail] = useState({})
	const [id, setId] = useState(false)

  useEffect(()=>{
    acitonGetProductDetail(params.id).then((responseGet)=>{
      setData(responseGet[0])
      setDetail(responseGet[0])
    });
  },[])

	/** @param {string} id */
	const showModalUpdate = (id, detail) => {
	  setId(id)
	  setDetail(detail)
	  setIsShow(true)
	}

	useEffect(()=>{
	  if(!isShow) {
	    setId("")
	    setDetail(null)
	  }
	},[isShow])

	return (
		<>
			<ModalAddReservasi id={id} isShow={isShow} setIsShow={setIsShow} dataRoom={data} />
			<div className="w-full h-full">
				<div className="flex flex-wrap justify-center space-x-4 mb-6">
					{data?.images.map((value, index) => {
						const value1 = slugify(value, { replacement: "+" })
						const pathImage = `${imageUrl}/${data.id}/${value1}`

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
					<h5 className="font-light text-transform: normal-case">
						{data.description}
					</h5>
				</div>
				<div className="p-2">
					<p className="text-lg font-semibold text-zinc-500">
						{data.guestCount} guests &#183; {data.roomCount} rooms
					</p>
				</div>
				<div className="p-2">
					<button
						color="primary"
						role="button"
						onClick={() => showModalUpdate(data.id, detail)}
						className="
            focus:ring-offset-2 leading-none text-white font-medium rounded-lg text-sm px-4 py-2
            border bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Book Now!
					</button>
				</div>
			</div>
		</>
	);
}
