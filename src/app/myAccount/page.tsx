/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='bg-bag h-[286px] w-[1920px]'>
        <h1 className='text-[40px] text-blue-950 font-bold pt-[125px] ml-52'>My Account</h1>
     </div>
    
     <div className=' w-[544px] h-[474px] text-center ml-[560px] mt-24 '>
        <h1 className='text-[20px] font-bold mt-14'>Login</h1>
        <p className='text-para2  '> Please login using account detail bellow.</p>
        <div className='  '>
       <input type="email" name="" id="" placeholder='Email Address' className='text-para2 border-2 py-3 w-[360px] px-2 mt-10' />
       </div>
       <div  className='  '>
        <input type="password" name="" id="" placeholder='Password ' className='text-para2 border-2 py-3 w-[360px] px-2 mt-5'/>
       </div>
       <p className='text-para2  text-start ml-24 mt-7 '>Forgot your password?</p>
        <button className='text-[19px] bg-pink-600 w-[360px] py-3 px-3 text-white mt-7 font-semibold'>Sign in</button>
        <p className='text-para2 mt-4'>Don't have an Account?Create account</p>
     </div>
     <div className='flex justify-center mb-16'>
        <Image src="/image 1174.png" alt=""  width={1176} height={121}/>
     </div>
    </div>
  )
}

export default page
