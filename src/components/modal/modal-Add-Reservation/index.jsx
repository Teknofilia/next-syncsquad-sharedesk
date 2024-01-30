"use client"

import React, {useState, useEffect} from "react"
import Modal from "react-modal"
import { Button, Input, Textarea } from "@nextui-org/react"
import { ImCross } from "react-icons/im"
import { alertError, alertSucces} from "../../../../helper/sweetalert"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { dataToSelect } from "../../../../helper/dataprocess"
import { actionSaveReservation, actionSaveReservationDetail } from "./action"

const animatedComponents = makeAnimated()

export default function Addupdatereservation({ id, isShow, setIsShow, dataRoom }){
  const [jamOption, setJamOption] = useState([])
  const [jam, setJam] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [startDate, setStartDate] = useState(new Date())

  useEffect(()=>{
  },[dataRoom])
  
  useEffect(() => {
    getHoursSelect();
  }, [])

  const getHoursSelect = async () => {
    const dataListHours = await fetch("http://localhost:3000/api/hours", {
    method: "GET"
  })

  const responseDataHours = await dataListHours.json()

  let resDataToSelect = dataToSelect({
      data: responseDataHours?.data,
      label: "description",
      value: "id",
    });

    setJamOption(resDataToSelect)
  }

  const submitAddUpdate = async () => {
    if(startDate === ''){
      alertError("Fail", "Date cannot be empty.");
      return;
    }
    if(jam.length === 0){
      alertError("Fail", "Booking time cannot be empty.");
      return;
    }

    const responseSave = await actionSaveReservation({
      reservationDate: startDate,
      createdBy: "Reza",
      totalPrice: (jam.length * dataRoom?.price),
      userId: dataRoom?.userId,
      product_listingId: dataRoom?.id,
    })

    if (!responseSave.status){
      toast.error("Saving failed, please try again.")
    }    

    let requetReservationDetail = []
    for (const item of jam) {          
      requetReservationDetail.push({
        jamId: item.value,
        reservationId: responseSave.data.id
      })
    }    

    const responseSaveDetail = await actionSaveReservationDetail(requetReservationDetail)
    toast.success("Your data was saved.")
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: isMobile ? "100%" : "600px",
      height: isMobile ? "100%" : "100%",
      transform: "translate(-50%, -50%)",
    },
  }

  return(
    <>
      <Modal
        isOpen={isShow}
        onRequestClose={() => setIsShow(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="border-b-[1px] border-gray-200 pb-3 flex justify-between">
          <p className="text-lg"></p>
          <ImCross className="mt-1" onClick={() => setIsShow(false)} />
        </div>
        <div>
          <div className="">
            <>
              <div className="p-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white w-full p-10 mt-5">
                    <div className="w-full mb-4">
                      <p className="mb-2">Room :</p>
                      <Input 
                        value={dataRoom.name}
                        type="text" 
                      />
                    </div>

                    <div className="w-full mb-4">
                      <p className="mb-2">Date :</p>
                      <DatePicker
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                    
                    <div className="w-full mb-4">
                      <p className="mb-2">Booking Time :</p>
                      <Select
                        placeholder="Choose booking schedule"
                        value={jam}
                        closeMenuOnSelect={false}
                        menuPlacement="top"
                        dir
                        components={animatedComponents}
                        isMulti
                        onChange={(v) => setJam(v)}
                        options={jamOption}
                      />
                    </div>

                    <div className="w-full mb-4">
                      <p className="mb-2">Note :</p>
                      <Textarea
                        placeholder="Enter your note"
                        className="w-full"
                      />
                    </div>
                    <div className="mt-10 flex justify-between">
                      <div>
                        <button
                          color="primary"
                          role="button"
                          onClick={() => submitAddUpdate()}
                          className="
                          focus:ring-offset-2 leading-none text-white font-medium rounded-lg text-sm px-4 py-2
                          border bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                          focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </Modal>
    </>
  )
}