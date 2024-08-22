import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
        <div className='h-full container mx-auto flex items-center px-4 justify-between '>
            <div>
                <Logo h={90} w={60}/>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='Search product here ....' className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'><GrSearch /></div>
            </div>

            <div className='flex items-center gap-7'>
                <div className='text-3xl cursor-pointer'> <FaRegUserCircle /></div>
                <div className='text-2xl cursor-pointer relative'>
                  <span><FaShoppingCart /></span>
                   <div className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-3 -right-3">
                    <p className='text-xs'>0</p>
                    </div>
                </div>
                <div>
                    <button className='px-3 py-1 rounded-full text-white bg-red-600 items-center hover:bg-red-700'>Login</button>
                </div>
           
            </div>
        </div>

    </header>
  )
}

export default Header