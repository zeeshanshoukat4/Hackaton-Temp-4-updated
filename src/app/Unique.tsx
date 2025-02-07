/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const Unique = () => {
  return (
    <div>
      <div className='bg-banner mt-24 h-[600px] flex flex-col sm:flex-row justify-center items-center'>
        <Image 
          src="/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png" 
          alt="" 
          width={509} 
          height={550} 
          className='w-full sm:w-[509px] sm:h-[550px] object-cover'
        />
        <div className='text-center sm:text-left sm:ml-10'>
          <h1 className='text-color font-bold text-[24px] sm:text-[36px] mt-10 sm:mt-36'>
            Unique Features Of Latest & <br /> Trending Products.
          </h1>
          <p className='text-para font-thin text-[14px] sm:text-[16px] mt-4'>
            All frames constructed with hardwood solids and laminates.
          </p>
          <p className='text-para font-thin text-[14px] sm:text-[16px] mt-2'>
            Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails.
          </p>
          <p className='text-para font-thin text-[14px] sm:text-[16px] mt-2'>
            Arms, backs, and seats are structurally reinforced.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-6'>
            <button className='font-semibold text-[16px] sm:text-[20px] bg-pink-500 py-2 px-6 mt-3 text-white'>
              Add To Cart
            </button>
            <p className='text-[16px] sm:text-[18px] mt-3'>
              B&B Italian Sofa <br /> $32.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
