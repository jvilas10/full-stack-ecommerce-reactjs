import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user=useSelector(state=>state?.user?.user)

    const navigation=useNavigate();

    useEffect(()=>{
      if(user?.role !==ROLE.ADMIN){
        navigation('/');
      }
    },[navigation, user])
  return (
    <div className='min-h-[calc(100vh-100px)] md:flex '>
       <aside className='bg-white min-h-full  w-full  max-w-60 customShadow'>
        <div className=' h-36 bg-red-500 flex justify-center items-center flex-col'>
            <div className='text-5xl cursor-pointer flex text-center '>
                 {user?.profilePic?(<img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name}/>):(<FaRegUserCircle />)}
            </div>
            <p className='capitalize'>{user?.name}</p>
            <p>{user?.role}</p>
        </div>

         {/***navigation */}       
                <div>   
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All product</Link>
                    </nav>
                </div>  
       </aside> 
       <main className='w-full h-full p-4'>
        <Outlet/>
       </main>
    </div>
  )
}

export default AdminPanel