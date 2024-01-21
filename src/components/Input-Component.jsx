import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const Input = (props) => {
    
    return (
        <div className='flex flex-col'>
        {props?.title?<p className='text-gray-600'>{props?.title}</p>:null}
        <div  className={`shadow  flex flex-row  border rounded ${props?.classsecond}`}>
           {props.icon2?
            <div onClick={()=>props?.clickIcon2?props.clickIcon2():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon2()}
            </div>
            :null}
            <input 
                value={props?.value} 
                className={` appearance-none rounded  w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${props?.classsecondInput}`}
                id={props?.id} 
                onKeyPress={(e)=>props?.onKeyPress?props?.onKeyPress(e):null}
                type={props?.type} 
                placeholder={props?.placeholder}
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                onChange={(v)=>props?.onChange(v?.target?.value)}
                onClick={props?.click?()=>props?.click():null}
                pattern = {props?.pattern}
                // {...props}
            />
            {props.icon?
            <div onClick={()=>props?.clickIcon?props.clickIcon():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon()}
            </div>
            :null}
        </div>
        </div>
    )
}
const InputDenganGaya = (props) => {
    
    return (
        <div className='flex flex-col'>
        {props?.value?<p className='text-gray-600 mb-3 font-bold'>{props.placeholder}</p>:null}
        <div  className={`  flex flex-row  border-[1px] border-gray-300 rounded ${props?.classsecond}`}>
           {props.icon2?
            <div onClick={()=>props?.clickIcon2?props.clickIcon2():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon2()}
            </div>
            :null}
            <input 
                value={props?.value} 
                className={` appearance-none rounded  w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${props?.classsecondInput}`}
                id={props?.id} 
                onKeyPress={(e)=>props?.onKeyPress?props?.onKeyPress(e):null}
                type={props?.type} 
                placeholder={props?.placeholder}
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                onChange={(v)=>props?.onChange?props?.onChange(v?.target?.value):null}
                onClick={props?.click?()=>props?.click():null}
                pattern = {props?.pattern}
                // {...props}
            />
            {props.icon?
            <div onClick={()=>props?.clickIcon?props.clickIcon():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon()}
            </div>
            :null}
        </div>
        </div>
    )
}
const InputDenganStyle = (props) => {
    
    return (
        <div className='flex flex-col'>
        {props?.value?<p className='text-gray-600 mb-3 font-bold'>{props.placeholder}</p>:null}
        <div  className={`  flex flex-row  border-b-[1px] border-gray-500  ${props?.classsecond}`}>
           {props.icon2?
            <div onClick={()=>props?.clickIcon2?props.clickIcon2():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon2()}
            </div>
            :null}
            <input 
                value={props?.value} 
                className={` appearance-none rounded  w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${props?.classsecondInput}`}
                id={props?.id} 
                onKeyPress={(e)=>props?.onKeyPress?props?.onKeyPress(e):null}
                type={props?.type} 
                placeholder={props?.placeholder}
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                onChange={(v)=>props?.onChange?props?.onChange(v?.target?.value):null}
                onClick={props?.click?()=>props?.click():null}
                pattern = {props?.pattern}
                // {...props}
            />
            {props.icon?
            <div onClick={()=>props?.clickIcon?props.clickIcon():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon()}
            </div>
            :null}
        </div>
        </div>
    )
}
const DateInputDenganGaya = (props) =>{
    return(
    <>
    <div >
   
       <DatePicker 
       className={`shadow  flex flex-row  border rounded ${props?.classsecond} appearance-none   w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
    //    selected={props?.select} 
    //    onChange={(v)=>props?.change?props?.change(v):null}
       {...props}
       />
       </div>
    </>
   
    )
}
 
const InputFile = (props) => {
    
    return (
        <div className='flex flex-col'>
        {props?.title?<p className='text-gray-600'>{props?.title}</p>:null}
        <div  className={`shadow  flex flex-row  border rounded ${props?.classsecond}`}>
           {props.icon2?
            <div onClick={()=>props?.clickIcon2?props.clickIcon2():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon2()}
            </div>
            :null}
            <input 
                value={props?.value} 
                className={` appearance-none rounded  w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${props?.classsecondInput}`}
                id={props?.id} 
                type={props?.type} 
                placeholder={props?.placeholder}
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                onChange={(v)=>props?.onChange(v)}
                accept={props?.accept}
                onClick={props?.click?()=>props?.click():null}
                // {...props}
            />
            {props.icon?
            <div onClick={()=>props?.clickIcon?props.clickIcon():null} className=' pt-2 w-[10%] bg-gray-300 rounded-r flex justify-center'>
                {props.icon()}
            </div>
            :null}
        </div>
        </div>
    )
}
const SelectCustom =(props)=>{
    let option = props?.Option?.length>0?props?.Option:[]
    return(
        <>
            <div className={`shadow ${props?.width?props?.width:'w-full'} flex flex-row  border rounded`}>
                                <select onChange={(v)=>props?.onChange(v?.target?.value)} value={props?.value} className="bg-white rounded  w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                
                                    {option?.map((data)=>{return(<>
                                        {/* <option onClick={()=>{setGroup(data?.value)}}>{data?.label}</option> */}
                                        <option value={data?.value}>{data?.label}</option>
                                    </>)})}
                                    
                                </select>
                            </div>
                            </>
    )
}
 
const upload = (props) =>{
    return(
    <>
       
    </>
    )
}
const DateInput = (props) =>{
    return(
    <>
    <div >
   
       <DatePicker 
       className={`shadow  flex flex-row  border rounded ${props?.classsecond} appearance-none rounded  w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
    //    selected={props?.select} 
    //    onChange={(v)=>props?.change?props?.change(v):null}
       {...props}
       />
       </div>
    </>
   
    )
}
const TimeInput = (props) =>{
    return(
    <>
       <div >
   
   <DatePicker 
   className={`shadow  flex flex-row  border rounded ${props?.classsecond} appearance-none rounded  w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
   showTimeSelect showTimeSelectOnly
   timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa"
//    selected={props?.select} 
   {...props}
//    onChange={(v)=>console.log({v})}
   />
   </div>
    </>
    )
}

const DateTimeInput = (props) =>{
    return(
    <>
        <div >
   
   <DatePicker 
   className={`shadow  flex flex-row  border rounded ${props?.classsecond} appearance-none rounded  w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
   showTimeSelect 
            timeFormat="HH:mm" timeIntervals={30} dateFormat="LLL" timeCaption="Time"
   selected={props?.select} 
   onChange={(v)=>console.log({v})}
   />
   </div>
    </>
    )
}
const Textarea = (props) => {
    
    return (
        <div className='flex flex-col'>
        {props?.title?
        <div className='flex flex-row'>
        <p className='text-gray-600'>{props?.title}</p>
        
        </div>
        :null}
        <div  className={`shadow  flex flex-row  border rounded ${props?.classsecond}`}>
           
            <textarea
                className={` appearance-none rounded  w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${props?.classsecondInput}`}
                id={props?.id} 
                type={props?.type} 
                placeholder={props?.placeholder}
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                onChange={(v)=>props?.onChange(v?.target?.value)}
                onClick={props?.click?()=>props?.click():null}
                value={props?.value}
                // {...props}
            />
      
        </div>
        {props?.sub?<p className='mt-1 text-red-500 text-[11px]'>{props?.sub}</p>:null}
        </div>
    )
}
 
export { 
    InputDenganStyle,
    
    DateInputDenganGaya,
    InputDenganGaya,
    Input,
    InputFile,

    upload,
    DateInput,
    TimeInput,
    DateTimeInput,
    Textarea,
    SelectCustom
}
