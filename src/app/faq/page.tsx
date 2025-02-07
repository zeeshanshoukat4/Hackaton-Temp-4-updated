/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="bg-bag h-[286px] w-[1920px]">
        <h1 className="text-[40px] text-blue-950 font-bold pt-[125px] ml-52">FAQ</h1>
      </div>
      <div>
        <img src="/page sort by.png" alt="" className="ml-[310px] mt-[140px]" />
      </div>
      <div className='flex gap-28 justify-center mt-20'>
        
        <div>
        <h1 className='text-[36px] font-bold text-blue-950 '>General Information </h1>
         <div className='mt-16'>
         <h1 className='text-blue-950 text-[17px] font-bold'>Eu dictumst cum at sed euismood condimentum?</h1>
        <p className='text-para2 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br/> tristique mollis vitae, consequat gravida sagittis.</p>
      </div>
      <div>
         <h1 className='text-blue-950 text-[17px] font-bold mt-14'>Magna bibendum est fermentum eros.</h1>
        <p className='text-para2 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br/> tristique mollis vitae, consequat gravida sagittis.</p>
      </div>
      <div>
         <h1 className='text-blue-950 text-[17px] font-bold mt-14'>Odio muskana hak eris conseekin sceleton?</h1>
        <p className='text-para2 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br/>tristique mollis vitae, consequat gravida sagittis.</p>
      </div>
      <div>
         <h1 className='text-blue-950 text-[17px] font-bold mt-14'>Elit id blandit sabara boi velit gua mara?</h1>
        <p className='text-para2 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br/> tristique mollis vitae, consequat gravida sagittis.</p>
      </div>
        </div>
        <div>
        <div className="py-3 px-3 mt-10 w-[525px] ">
            <h1 className='text-[24px] text-blue-950 font-bold'>Ask a Question</h1>
            <input type="text"  placeholder=" Your Name*" className="border-2 text-para2 h-[50px] w-[500px] rounded-md mt-20" />
           
            <div>
            <input type="text" placeholder="Subject*"  className="border-2 text-para2 h-[50px] w-[500px] mt-8 rounded-md"         />
            </div>
           <div>
            <input type="text" placeholder=" Type Your Message"  className="border-2 text-para2 h-[160px] w-[500px] mt-8 pb-20 rounded-md"  />
            </div>
          </div>
          <button className="py-3 px-3 w-[200px] ml-5 bg-pink-600 text-white font-semibold text-[17px] rounded-sm mt-8">Send Email</button>
        </div>
        </div>
        <div className='flex justify-center mb-16 mt-20'>
        <Image  src="/image 1174.png" alt=""width={1246} height={128} />
     </div>
      </div>
      
    
     
  )
}

export default page
