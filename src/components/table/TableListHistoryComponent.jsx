import { useState, useEffect } from "react"
import { FaEdit } from "react-icons/fa"
import ModalAddUpdateAccess from '../../components/modal/modal-AddUpdate-History'
import Componentstar from "../../components/rate"

import { useRouter } from 'next/router'
import { alertSuccess, alertError, alertQuestion } from "../../../helper/sweetalert"

const TableListHistoryComponent = ({data, showModalUpdate}) => {
  //const query = prisma.$queryRaw`SELECT b.name, c.reservationDate, a.rating, a.review, a.userId, a.product_listingId FROM Review a JOIN Product_Listing b ON b.id = a.product_listingId JOIN Reservation c ON c.product_listingId = b.id`
  //data = (data || [])
  // data = (data || [{
  //   room:"Semeru Room",
  //   id:1,
  //   rate:3,
  //   date:"12 Januari 2024",
  //   comment:"AC-nya dingin, tapi toiletnya bau.."
  // },
  // {
  //   room:"Rinjani Room",
  //   id:2,
  //   rate:5,
  //   date:"16 Januari 2024",
  //   comment:"Ruangannya besar, TV-nya juga besar dan ada snack-nya.."
  // },
  // {
  //   room:"Leuser Room",
  //   id:3,
  //   rate:2,
  //   date:"21 Januari 2024",
  //   comment:"bangkunya cuma 4, mejanya 2, terlalu sempit.."
  // }])
    
  return (
  <>
    <div className="min-h-screen py-5">            
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto">                        
          <table className="relative mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 ">
            <thead className="">
              <tr className=" text-white text-left text- ">
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Room </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Date </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Rate </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Comment </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200  ">
              {/* {data?.map((data,i) => {
                return(
                  <>
                    <tr className={`text-gray-900 `}>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> {data.room} </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> {data.date} </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                        <Componentstar disabled={true} star={data.rate} setStart={(value) => null}/>
                      </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line">{data.comment} </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                        <FaEdit color={'blue'} onClick={ () => showModalUpdate(data.id, data) }/>
                      </td>
                    </tr>
                  </>
                )
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>)
}

export default TableListHistoryComponent