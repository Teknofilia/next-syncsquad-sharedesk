import React, {useState, useEffect} from "react"
import Modal from "react-modal"
import { Button, Input, Textarea } from "@nextui-org/react"
import { ImCross } from "react-icons/im"
import { alertError, alertSucces} from "../../../../helper/sweetalert"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const animatedComponents = makeAnimated()

export default function Addupdatereservation({ id, isShow, setIsShow, dataRoom }){
  const [jamOption, setJamOption] = useState([])
  //const [dataJam, setDataJam] = useState([])
  const [jam, setJam] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [startDate, setStartDate] = useState(new Date())

  const dataJam = [{
    value:1,
    label:"09.00-10.00",
  },
  {
    value:2,
    label:"10.00-11.00",
  },
  {
    value:3,
    label:"11.00-12.00",
  },
  {
    value:4,
    label:"12.00-13.00",
  },
  {
    value:5,
    label:"13.00-14.00",
  },
  {
    value:6,
    label:"14.00-15.00",
  },
  {
    value:7,
    label:"15.00-16.00",
  },
  {
    value:8,
    label:"16.00-17.00",
  },
  {
    value:9,
    label:"17.00-18.00",
  },
  {
    value:10,
    label:"18.00-19.00",
  },
  {
    value:11,
    label:"19.00-20.00",
  },
  {
    value:11,
    label:"20.00-21.00",
  },
  {
    value:11,
    label:"21.00-22.00",
  }]

  useEffect(() => {
    setJamOption(dataJam);
  }, []);

  const submitAddUpdate = async () => {
    // if(star === 0){
    //   alertError("Fail", "Rating cannot be empty.");
    //   return;
    // }
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
                      <Input type="text" />
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
                        options={dataJam}
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