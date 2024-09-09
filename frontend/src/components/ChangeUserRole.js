import React, { useState } from 'react'
import ROLE from '../common/role'
import SummaryApi from '../common';
import { IoIosClose } from "react-icons/io";

const ChangeUserRole = ({
  name,email,role,userId,onClose,callFanc
}) => {
const [userRole,setUserRole]=useState(role)

const handleOnChangeSelect=(e)=>{

   setUserRole(e.target.value)
}

const updateUserRole=async()=>{
  console.log(userRole);
  const fetchResponse = await fetch(SummaryApi.updateUser.url,{
    method : SummaryApi.updateUser.method,
    credentials : 'include',
    headers : {
        "content-type" : "application/json"
    },
    body : JSON.stringify({
        userId : userId,
        role : userRole
    })

})
const responseData = await fetchResponse.json()

if(responseData.success){
  callFanc()
  onClose()
}
}
  return (
    <div  className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50'>
 
        <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>
        <button className='block ml-auto hover:text-red-600' onClick={onClose}>
          <IoIosClose />
          </button>
               <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>
               <p>Name :  {name} </p>
               <p>Email : {email}</p>
               <div className='flex items-center justify-between pb-4'>
                <p>Role:</p>
               <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>

               {
                        Object.values(ROLE)?.map(el => {
                            return(
                                <option value={el} key={el}>{el}</option>
                            )
                        })
                    }
                
               </select></div>
               <button className='w-fit mx-auto block px-4 py-1 rounded-full bg-red-600 text-white hover:bg-red-700' onClick={updateUserRole}>Change Role</button>
         </div>
    </div>
  )
}

export default ChangeUserRole