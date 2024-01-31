"use client"

import InputSearchComponent from "./component/searchHistory"
import { useState, useEffect } from "react"
import { actionGetDataReview } from "./action"
import dynamic from 'next/dynamic'
import prisma from "@/utils/prisma"
import ModalAddUpdateRoom from '../../components/modal/modal-AddUpdate-History'

const Table = dynamic(
  () => import('../../components/table/TableListHistoryComponent'),
  { ssr: false }
)

async function getReview() {
	const dataReview = await actionGetDataReview()
	return dataReview
}

export default function HistoryPage({searchParams}) {
  const [isShow, setIsShow] = useState(false)
  const [detail, setDetail] = useState(null)
  const [id, setId] = useState(false)
  const dataReview = getReview()

  /** @param {string} id */
  const showModalUpdate = (id, data) => {
    setId(id)
    setDetail(data)
    setIsShow(true)
  }

  useEffect(()=> {
    getReview()
  })

  useEffect(()=>{
    if(!isShow) {
      setId("")
      setDetail(null)
    }
  },[isShow])

  return (
    <>
      <ModalAddUpdateRoom id={id} isShow={isShow} setIsShow={setIsShow} data={[dataReview]} />
      <div className="">      
        <div className='flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-3'>
          <div className='w-full'>
            <div className="mb-5">
              <InputSearchComponent></InputSearchComponent>
            </div>
          </div>
        </div>
        <div>
          <Table data = {[dataReview]} showModalUpdate={showModalUpdate}/>
        </div>
      </div>
    </>    
  )
}