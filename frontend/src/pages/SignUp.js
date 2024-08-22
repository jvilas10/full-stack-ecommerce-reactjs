import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { Form, Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imageTobase64 from '../helpers/imageTobase64';
const SignUp = () => {

    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        profilePic:''
    })

    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setData((preve)=>{
             return{
                ...preve,
                [name]:value
             }
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data);
    }
    
    const handleUploadPic = async(e) =>{
      const file = e.target.files[0]
      
      const imagePic = await imageTobase64(file)
      
      setData((preve)=>{
        return{
          ...preve,
          profilePic : imagePic
        }
      })
  
    }

  return (
    <section id='login'>
    <div className='mx-auto container p-4'>
         <div className='bg-white p-4 w-full max-w-sm mx-auto'>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                <img src={data.profilePic || loginIcons} alt="login icon"/>
                </div>
                <form>
                  <label>
                  <div className='text-xs bg-slate-80 py-4 cursor-pointer text-center absolute bottom-0 w-full'>
                   Upload Photo
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic}/>
                  </label>
                </form>
                
               
            </div>
            <Form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className='grid'>
                    <label>Name</label>
                     <div className='bg-slate-100 p-2'>
                      <input type='text' placeholder='Enter Name' name='name' value={data.name} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent'/>
                    </div>                        
                </div>
                <div className='grid'>
                    <label>Email</label>
                     <div className='bg-slate-100 p-2'>
                      <input type='text' placeholder='Enter Email' name='email' value={data.email} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent'/>
                    </div>                        
                </div>
                <div className='grid'>
                    <label>Password</label>
                    <div className='bg-slate-100 p-2 flex'>
                      <input type={ showPassword ? "text":"password"} name='password' value={data.password} onChange={handleOnChange} placeholder='Enter Password' className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer'>
                          <span >{!showPassword?<FaEye onClick={()=>setShowPassword(true)} />:<FaEyeSlash onClick={()=>setShowPassword(false)} />} </span>
                        
                        </div>
                    </div>  
                 </div>
                <div className='grid'>
                    <label>Confirm Password</label>
                    <div className='bg-slate-100 p-2 flex'>
                      <input type={ showConfirmPassword ? "text":"password"} name='confirmPassword' value={data.confirmPassword} onChange={handleOnChange} placeholder='Enter Password' className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                          <span >{!showConfirmPassword?<FaEye />:<FaEyeSlash/>} </span>
                         </div>
                    </div>                    
                </div>
              
                <div>
                    <button className='bg-red-600 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Signup</button>
                 </div>
                 <p className='py-5'>You have already account ? <Link to={'/login'} className=' text-red-600 hover:text-red-600 hover:underline'>Login</Link></p>
              
            </Form>                
         </div>
     </div>
</section>
  )
}

export default SignUp