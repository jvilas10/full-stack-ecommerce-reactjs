import React, { useState } from 'react'
import UploadProducts from '../components/UploadProducts'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct]=useState(false);
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className='font-bold text-lg'> All Products</h2>
        <button  className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full' onClick={()=>setOpenUploadProduct(!openUploadProduct)}> Upload Products</button>
       </div>
       {/* upload product componet */}
       {
        openUploadProduct && (
          <UploadProducts
          onClose={()=>setOpenUploadProduct(false)}
          />
        )
       }

    </div>
  )
}

export default AllProducts