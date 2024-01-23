import { useState, useEffect } from "react"
import { FaEdit } from "react-icons/fa"
import ModalAddUpdateAccess from '../../components/modal/modal-AddUpdate-History'
import Componentstar from "../../components/rate"

import { useRouter } from 'next/router'
<<<<<<< HEAD
// import { alertSuccess, alertError, alertQuestion } from '../helper/sweetalert'

const TableListHistoryComponent = ({data, showModalUpdate}) => {
    const [isShow, setIsShow] = useState(false)
    
=======
import { alertSuccess, alertError, alertQuestion } from "../../../helper/sweetalert"

const TableListHistoryComponent = ({data, showModalUpdate}) => {    
>>>>>>> f8652c36cbb17ad34ecc261090b05f65d3f84569
    data = (data || [{
        room:"Semeru Room",
        id:1,
        rate:3,
<<<<<<< HEAD
=======
        date:"12 Januari 2024",
>>>>>>> f8652c36cbb17ad34ecc261090b05f65d3f84569
        comment:"AC-nya dingin, tapi toiletnya bau.."
    },
    {
        room:"Rinjani Room",
        id:2,
        rate:5,
<<<<<<< HEAD
=======
        date:"16 Januari 2024",
>>>>>>> f8652c36cbb17ad34ecc261090b05f65d3f84569
        comment:"Ruangannya besar, TV-nya juga besar dan ada snack-nya.."
    },
    {
        room:"Leuser Room",
        id:3,
        rate:2,
<<<<<<< HEAD
        comment:"bangkunya cuma 4, mejanya 2, terlalu sempit.."
    }]) 

    showModalUpdate = () => {
        setIsShow(true)
    }

    console.log(showModalUpdate)
    
    // const router = useRouter()
    // async function updateStar({id,value}){
    //     let res
    // }
    return (
        <>
            <div className="min-h-screen py-5">            
                <div className="flex flex-col h-screen">
                    <div className="flex-grow overflow-auto">                        
                        <table   className="relative mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 ">
                            <thead className="">
                                <tr className=" text-white text-left text- ">
                                    <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Room </th>
                                    <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Rate </th>
                                    <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Comment </th>
                                    <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            {/* <tbody className="divide-y divide-gray-200  ">
                                <tr className={`text-gray-900 `}>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Semeru Room </td>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                                        <Componentstar disabled={true} star={2} setStart={(value)=>null}/>
                                    </td>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Ruangannya bagus, fasilitasnya oke dan WiFi-nya kencang </td>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                                        <FaEdit color={'blue'} onClick={()=>null}/>
                                    </td>
                                </tr>
                                <tr className={`text-gray-900 `}>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Rinjani Room </td>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                                        <Componentstar disabled={true} star={5} setStart={(value)=>null}/>
                                    </td>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Pokoknya keren banget deh ruangannya </td>
                                    <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                                        <FaEdit color={'blue'} onClick={()=>null}/>
                                    </td>
                                </tr>
                            </tbody> */}
                            <tbody className="divide-y divide-gray-200  ">
                                {data?.map((v,i)=>{                                 
                                    return(
                                    <>
                                        <tr className={`text-gray-900 `}>
                                            <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> {v.room} </td>
                                            <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                                                <Componentstar disabled={true} star={v.rate} setStart={(value) => null}/>
                                            </td>
                                            <td className="px-6 py-4 text-center uppercase whitespace-pre-line">{v.comment} </td>
                                            <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                                                {/* <FaEdit color={'blue'} onClick={() => null}/> */}
                                                <FaEdit color={'blue'} onClick={()=>showModalUpdate()}/>
                                            </td>
                                        </tr>
                                    </>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>           
    )
=======
        date:"21 Januari 2024",
        comment:"bangkunya cuma 4, mejanya 2, terlalu sempit.."
    }])
    
    return (
    <>
        <div className="min-h-screen py-5">            
            <div className="flex flex-col h-screen">
                <div className="flex-grow overflow-auto">                        
                    <table   className="relative mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 ">
                        <thead className="">
                            <tr className=" text-white text-left text- ">
                                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Room </th>
                                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Date </th>
                                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Rate </th>
                                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4"> Comment </th>
                                <th className="sticky top-0 font-semibold text-center bg-blue-800 text-sm uppercase px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        {/* <tbody className="divide-y divide-gray-200  ">
                            <tr className={`text-gray-900 `}>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Semeru Room </td>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                                    <Componentstar disabled={true} star={2} setStart={(value)=>null}/>
                                </td>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Ruangannya bagus, fasilitasnya oke dan WiFi-nya kencang </td>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                                    <FaEdit color={'blue'} onClick={()=>null}/>
                                </td>
                            </tr>
                            <tr className={`text-gray-900 `}>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Rinjani Room </td>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line">
                                    <Componentstar disabled={true} star={5} setStart={(value)=>null}/>
                                </td>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line"> Pokoknya keren banget deh ruangannya </td>
                                <td className="px-6 py-4 text-center uppercase whitespace-pre-line flex flex-row justify-center space-x-2">
                                    <FaEdit color={'blue'} onClick={()=>null}/>
                                </td>
                            </tr>
                        </tbody> */}
                        <tbody className="divide-y divide-gray-200  ">
                            {data?.map((data,i)=>{                                 
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
                                            {/* <FaEdit color={'blue'} onClick={() => null}/> */}
                                            <FaEdit color={'blue'} onClick={ () => showModalUpdate(data.id, data) }/>
                                        </td>
                                    </tr>
                                </>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>)
>>>>>>> f8652c36cbb17ad34ecc261090b05f65d3f84569
}

export default TableListHistoryComponent