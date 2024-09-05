import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
  const [allUser, setAllUsers]=useState([]);
  const [openUpdateRole,setOpenUpdateRole]=useState(false);
  const [updateUserDetails,setUpdateUserDetails]=useState({
    email : "",
    name : "",
    role : "",
    _id  : ""
  })
 
  const fetchAllUsers=async()=>{
    const fetchData= await fetch(SummaryApi.allUser.url,{
      method:SummaryApi.allUser.method,
      credentials:'include'
    }) 
    const dataResponse=await fetchData.json();
    if(dataResponse.success){
      setAllUsers(dataResponse.data);
      console.log(dataResponse.data);
    }
  }
  useEffect(()=>{
    fetchAllUsers();
  },[])

  return (
    <div>
      <table className='w-full usertable pb-4'> 
        <thead>
          <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          allUser.map((item,index)=>{
            return(
              <tr>
                <td>{index+1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.role}</td>
                <td>{moment(item?.updatedAt).format('L')}</td>
                <td><button className=' bg-green-100 p-1 rounded-full cursor-pointer hover:bg-green-400 hover:text-white'  onClick={()=>{
                                        setUpdateUserDetails(item)
                                        setOpenUpdateRole(true)

                                    }}><MdModeEdit /></button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      {
        openUpdateRole && (<ChangeUserRole 
            onClose={()=>{setOpenUpdateRole(false)}}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callFanc={fetchAllUsers}
        />)
      }
      

    </div>
  )
}

export default AllUsers