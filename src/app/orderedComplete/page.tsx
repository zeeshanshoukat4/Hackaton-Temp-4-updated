/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mb-10'>
      <div className="bg-bag h-[350px] w-[1920px]">
        <h1 className="text-[40px] font-bold pt-[125px] ml-52 text-blue-950">
          Order Completed
        </h1>
      </div>
      <div className='flex gap-80 justify-center mt-28'>
        <div>
            <Image src="/Group (4).png" alt=""  width={94} height={94} />
        </div>
        <div>
            <Image src="/Vector 15.png" alt=""   width={65} height={65}className='border-2 rounded-full ml-44' />
            <h1 className='text-blue-950 text-[32px] font-bold mt-5'>Your Ordered Is Completed</h1>
            <p className='text-para2 text-[17px] mt-5 '>
            Thank you for your order! Your order is being processed and will be completed within 3-6<br/>
hours. You will receive an email confirmation when your order is completed.</p>
<button className='px-9 py-3 bg-pink-500 rounded-sm text-white text-[19px] font-semibold mt-9 ml-2'>Calculate Shipping </button>
        </div>
      </div>
      <div className='flex justify-center mb-16 '>
        <Image src="/image 1174.png" alt="" width={1176} height={121} className="mt-24" />
     </div>
    </div>
  )
}

export default page
