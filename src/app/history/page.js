"use client"

import InputSearchComponent from "./component/searchHistory"
import { useState, useEffect } from "react"
import dynamic from 'next/dynamic'
import ModalAddUpdateRoom from '../../components/modal/modal-AddUpdate-History'

const Table = dynamic(
  () => import('../../components/table/TableListHistoryComponent'),
  { ssr: false }
)

export default function HistoryPage({searchParams}) {
  const [isShow, setIsShow] = useState(false)
  const [detail, setDetail] = useState(null)
  const [id, setId] = useState(false)

  /** @param {string} id */
  const showModalUpdate = (id, data) => {
    console.log(data)
    setId(id)
    setDetail(data)
    setIsShow(true)
  }

  // useEffect(()=> {
  //   getReview()
  // })

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
          <Table data = {detail} showModalUpdate={showModalUpdate}/>
        </div>
      </div>
    </>    
  )
}