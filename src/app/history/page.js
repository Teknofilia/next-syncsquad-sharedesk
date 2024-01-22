"use client"

import InputSearchComponent from "./component/searchHistory"
import { useState, useEffect } from "react"
import prisma from "@/utils/prisma"
import dynamic from 'next/dynamic'
import ModalAddUpdateRoom from '../../components/modal/modal-AddUpdate-History'

const Table = dynamic(
  () => import('../../components/table/TableListHistoryComponent'),
  { ssr: false }
)

/** 
 * @param {string} name  
*/
// async function getHistory(nameParam) {

//   const dataListHistory = await prisma.Product_Listing.findMany({
//     where: {
//       name: {
//         contains: nameParam || "",
//         mode: "insensitive",
//       },
//     },
//   });

//   return dataListHistory

// }

export default function HistoryPage({searchParams}) {
  const [isShow, setIsShow] = useState(false)
  const [detail, setDetail] = useState(null)
  const [id, setId] = useState(false)
  const { name } = searchParams
  //const data = await getHistory(name)

  /** @param {string} id */
  const showModalUpdate = (id, data) => {
    setId(id)
    setDetail(data)
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
      <ModalAddUpdateRoom id={id} isShow={isShow} setIsShow={setIsShow} data={detail} />
      <div className="">      
        <div className='flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-3'>
          <div className='w-full'>
            <div className="mb-5">
              <InputSearchComponent></InputSearchComponent>
            </div>
          </div>
        </div>
        <div>
          {/* <Table data={data} showModalUpdate={showModalUpdate}/> */}
          <Table showModalUpdate={showModalUpdate}/>
        </div>
      </div>
    </>
    
  )
}