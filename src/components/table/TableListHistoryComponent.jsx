import { useState, useEffect } from "react"
import { FaEdit } from "react-icons/fa"
import { actionGetDataReview } from "./action"
import ModalAddUpdateAccess from '../../components/modal/modal-AddUpdate-History'
import Componentstar from "../../components/rate"
import { alertSuccess, alertError, alertQuestion } from "../../../helper/sweetalert"

const TableListHistoryComponent = async ({data, showModalUpdate}) => {
  const dataReview = await actionGetDataReview()
    
  return (
  <>
    <div className="min-h-screen py-5">            
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto">                        
          <table className="relative mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 ">
            <thead className="">
              <tr className=" text-white text-left text- ">
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Room </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Price </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Rate </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Comment </th>
                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200  ">
              {dataReview?.map((data,index) => {
                console.log(data)
                return(
                  <>
                    <tr key={index} className={`text-gray-900 `}>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> {data.product_listing.name} </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> {data.product_listing.price} </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                        <Componentstar disabled={true} star={data.rate} setStart={(value) => null}/>
                      </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line">{data.review} </td>
                      <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                        <FaEdit color={'blue'} onClick={ () => showModalUpdate(data.id, data) }/>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>)
}

export default TableListHistoryComponent