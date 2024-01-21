import Modal from "react-modal"
import React from "react"
//import { Button } from "../components/Button-Component"
import { ImCross } from "react-icons/im"
//import { alertError, alertSuccess } from "../../helper/sweetalert"
import {Textarea} from "@nextui-org/react"

// export default function Addupdatehistory({ isShow, setIsShow, id, refetch, detail }){
export default function Addupdatehistory({ isShow, setIsShow }){
  const [star, setStar] = useState([])
  const [comment, setComment] = useState("")

  const submitAddUpdate = async () => {
    // if(star === 0){
    //   alertError("Fail", "Rating cannot be empty.");
    //   return;
    // }

    // if(comment === ""){
    //   alertError("Fail", "Comment cannot be empty.");
    //   return;
    // }


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
                      <p className="mb-2">Rating</p>
                      <Componentstar disabled={false} star={id ? v.rate : 0} setStart={(value) => null}/>
                    </div>

                    <div className="w-full mb-4">
                      <p className="mb-2">Comment</p>
                      <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        className="max-w-xs"
                      />
                    </div>
                    <div className="mt-10 flex justify-between">
                      <div>
                        <button
                          role="button"
                          onClick={() => submitAddUpdate()}
                          className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 text-sm font-semibold leading-none text-black 
                          focus:outline-none bg-gray-200 border 
                          rounded hover:bg-gray-300 py-2 px-4"
                        >
                          Save
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
