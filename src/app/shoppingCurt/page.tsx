/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='bg-bag h-[286px] w-[1920px]'>
        <h1 className='text-[40px] text-blue-950 font-bold pt-[125px] ml-52'>Shopping Curt</h1>
     </div>
    
    <div className='flex'>
        <div>
        <div>
        <ul className='flex gap-32 ml-72 text-[23px] text-blue-950 font-bold mt-20'>
            <li>Product</li>
            <li className='ml-32'>Price</li>
            <li>Quantity</li>
            <li> Total </li>
            
        </ul>
     </div>
     <div className='flex'>
        <div className='flex gap-10 ml-72 mt-20 border-b-2'>
            <Image src="/Rectangle 34.png" alt="" width={83} height={87}className=' ' />
            <p className='font-semibold text-[17px]'>Ut diam consequat
                <p className='text-para2'>Color:Brown<br/>Size:XL</p>
            </p>
            <p className='ml-10'>$32.00</p>
            <p className='border-2 w-16 h-7 text-center bg-gray-300 ml-28'>- 1 +</p>
        <p className='ml-24'>£219.00</p>
        </div>
       
     </div>
     {/* card 2 */}
     <div className='flex'>
        <div className='flex gap-10 ml-72 mt-20 border-b-2'>
            <Image src="/Rectangle 35.png" alt="" width={83} height={87} />
            <p className='font-semibold text-[17px]'>Ut diam consequat
                <p className='text-para2'>Color:Brown<br/>Size:XL</p>
            </p>
            <p className='ml-10'>$32.00</p>
            <p className='border-2 w-16 h-7 text-center bg-gray-300 ml-28'>- 1 +</p>
        <p className='ml-24'>£219.00</p>
        </div>
       
     </div>
     {/* card 3 */}
     <div className='flex'>
        <div className='flex gap-10 ml-72 mt-20 border-b-2'>
            <Image src="/Rectangle 36.png" alt="" width={83} height={87} />
            <p className='font-semibold text-[17px]'>Ut diam consequat
                <p className='text-para2'>Color:Brown<br/>Size:XL</p>
            </p>
            <p className='ml-10'>$32.00</p>
            <p className='border-2 w-16 h-7 text-center bg-gray-300 ml-28'>- 1 +</p>
        <p className='ml-24'>£219.00</p>
        </div>
       
     </div>
     {/* card4 */}
     <div className='flex'>
        <div className='flex gap-10 ml-72 mt-20 border-b-2'>
            <Image src="/Rectangle 37.png" alt="" width={83} height={87} />
            <p className='font-semibold text-[17px]'>Ut diam consequat
                <p className='text-para2'>Color:Brown<br/>Size:XL</p>
            </p>
            <p className='ml-10'>$32.00</p>
            <p className='border-2 w-16 h-7 text-center bg-gray-300 ml-28'>- 1 +</p>
        <p className='ml-24'>£219.00</p>
        </div>
       
     </div>
     {/* card5 */}
     <div className='flex'>
        <div className='flex gap-10 ml-72 mt-20 border-b-2'>
            <Image src="/Rectangle 38.png" alt="" width={83} height={87} />
            <p className='font-semibold text-[17px]'>Ut diam consequat
                <p className='text-para2'>Color:Brown<br/>Size:XL</p>
            </p>
            <p className='ml-10'>$32.00</p>
            <p className='border-2 w-16 h-7 text-center bg-gray-300 ml-28'>- 1 +</p>
        <p className='ml-24'>£219.00</p>
        </div>

       
     </div>
        </div>
        <div>
        <h1 className='text-[23px] text-blue-950 font-bold mt-20 ml-52'>Cart Total</h1>
           <div className=' px-10  w-[400px] h-[360px] bg-bag mt-10 ml-24 rounded-md '>
                <div className='flex justify-between border-b-4'>
                <p className='mt-14 text-[21px] text-blue-950 font-semibold'>Subtotal</p>
                <p className='mt-14 text-[21px] text-blue-950 font-semibold'>£219.00</p>
                </div>
                <div className='flex justify-between border-b-4'>
            <p className='mt-14 text-[21px] text-blue-950 font-semibold'>Totals:</p>
            <p className='mt-14 text-[21px] text-blue-950 font-semibold'>£325.00</p>
            </div>
            <input type="checkbox" className='mt-10 ' /><span className='text-para2 text-[17px]'>Shipping & taxes calculated at checkout</span><br/>
            <button className='px-11 py-2 bg-green-500 rounded-sm text-white text-[19px] font-semibold mt-9 ml-10'>Proceed To Checkout </button>
            </div>
            <div>
            <h1 className='text-[28px] text-blue-950 font-bold mt-10 ml-40'>Calculate shopping</h1>
           <div className=' px-10  w-[400px] h-[360px] bg-bag mt-10 ml-24 rounded-md '>
                <div className='border-b-4'>
                <p className=' py-3 text-[17px] text-para2 font-semibold'>Bangladesh</p>
                
                </div>
                <div className=' border-b-4'>
            <p className='mt-14 text-[17px] text-para2 font-semibold'>Mirpur Dhaka - 1200</p>
         </div>
         <div className=' border-b-4'>
            <p className='mt-14 text-[17px] text-para2 font-semibold'>Postal Code</p>
         </div>

            <button className='px-9 py-3 bg-pink-500 rounded-sm text-white text-[19px] font-semibold mt-9 ml-2'>Calculate Shipping </button>
            </div>
            </div>
            
           
        </div>
       
    </div>
     <div className='flex mt-10 mb-7 '>
     <button className='px-10 py-3 text-[19px] bg-pink-500 font-semibold text-white ml-72'>Update Curt</button>
     <button className='px-10 py-3 text-[19px] bg-pink-500 font-semibold text-white ml-[513px]'>Clear Curt</button>
      
     </div>
    </div>
  )
}

export default page
