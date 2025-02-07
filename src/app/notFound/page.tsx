/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="bg-bag h-[286px] w-[1920px]">
        <h1 className="text-[40px] text-blue-950 font-bold pt-[125px] ml-52">Page Not Found</h1>
      </div>
     
      <div className='flex justify-center'>
        <Image src="/Group 197.png" alt="" width={812} height={577} />
      </div>
      <div className='flex justify-center mb-16 mt-10'>
        <Image src="/image 1174.png" alt=""width={1246} height={128} />
     </div>
    </div>
  )
}

export default page
