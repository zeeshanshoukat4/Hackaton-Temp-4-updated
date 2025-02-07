/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <div>
      <h1 className='text-[32px] font-bold text-blue-950 text-center mt-14'>Trending Products</h1>
      <div className='flex flex-wrap justify-center gap-10 mt-10 mb-20'>
        <div className='bg-white shadow-2xl p-6 w-[190px] sm:w-[250px] transform transition hover:scale-110 cursor-pointer'>
          <Image 
            src="/image 1171.png" 
            alt="" 
            width={250} 
            height={171} 
            className='bg-bg w-full h-[171px] object-cover' 
          />
          <div className='bg-white shadow-2xl p-6 cursor-pointer w-full h-[120px]'>
            <h1 className='text-blue-950 text-[18px] font-semibold text-center'>Cantilever Chair</h1>
            <p className='text-[14px] text-blue-950 text-center'>$42.00</p>
          </div>
        </div>
        
        <div className='bg-white shadow-2xl p-6 w-[190px] sm:w-[250px] transform transition hover:scale-110 cursor-pointer'>
          <Image 
            src="/image 1170.png" 
            alt="" 
            width={250} 
            height={171} 
            className='bg-bg w-full h-[171px] object-cover' 
          />
          <div className='bg-white shadow-2xl p-6 cursor-pointer w-full h-[120px]'>
            <h1 className='text-blue-950 text-[18px] font-semibold text-center'>Cantilever Chair</h1>
            <p className='text-[14px] text-blue-950 text-center'>$42.00</p>
          </div>
        </div>
        
        <div className='bg-white shadow-2xl p-6 w-[190px] sm:w-[250px] transform transition hover:scale-110 cursor-pointer'>
          <Image 
            src="/image 1172.png" 
            alt="" 
            width={250} 
            height={171} 
            className='bg-bg w-full h-[171px] object-cover' 
          />
          <div className='bg-white shadow-2xl p-6 cursor-pointer w-full h-[120px]'>
            <h1 className='text-blue-950 text-[18px] font-semibold text-center'>Cantilever Chair</h1>
            <p className='text-[14px] text-blue-950 text-center'>$42.00</p>
          </div>
        </div>
        
        <div className='bg-white shadow-2xl p-6 w-[190px] sm:w-[250px] transform transition hover:scale-110 cursor-pointer'>
          <Image 
            src="/image 1169.png" 
            alt="" 
            width={250} 
            height={171} 
            className='bg-bg w-full h-[171px] object-cover' 
          />
          <div className='bg-white shadow-2xl p-6 cursor-pointer w-full h-[120px]'>
            <h1 className='text-blue-950 text-[18px] font-semibold text-center'>Cantilever Chair</h1>
            <p className='text-[14px] text-blue-950 text-center'>$42.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
