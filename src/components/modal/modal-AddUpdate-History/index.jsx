import Modal from "react-modal"
import React, {useEffect, useState} from "react"
// import { Button } from "../../../components/Button-Component"
import { Button, Input, Textarea } from "@nextui-org/react"
import { ImCross } from "react-icons/im"
import { alertError, alertSucces} from "../../../../helper/sweetalert"
import { CopySlash } from "lucide-react"
import Componentstar from "../../../components/rate"

// export default function Addupdatehistory({ isShow, setIsShow, id, refetch, detail }){
export default function Addupdatehistory({ id, isShow, setIsShow, data }){  
  const [room, setRoom] = useState(null)
  const [date, setDate] = useState("")
  const [star, setStar] = useState(0)
  const [comment, setComment] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    setStar(id?data.rate : 0)
  },[id, data])  

  const submitAddUpdate = async () => {
    if(star === 0){
      alertError("Fail", "Rating cannot be empty.");
      return;
    }

    if(comment === ""){
      alertError("Fail", "Comment cannot be empty.");
      return;
    }
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
                  <div className="bg-white   w-full p-10 mt-5">
                    <div className="w-full mb-4">
                      <p className="mb-2">Room :</p>
                      <Input disabled type="text" value={id?data.room:""} />
                    </div>

                    <div className="w-full mb-4">
                      <p className="mb-2">Reservation Date :</p>
                      <Input disabled type="text" value={id?data.date:""} />
                    </div>

                    <div className="w-full mb-4">
                      <p className="mb-2">Rating :</p>
                      <Componentstar disabled={false} star={star} setStar={setStar}/>
                    </div>

                    <div className="w-full mb-4">
                      <p className="mb-2">Comment :</p>
                      <Textarea
                        value={id?data.comment:""}
                        label="Description"
                        placeholder="Enter your description"
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
