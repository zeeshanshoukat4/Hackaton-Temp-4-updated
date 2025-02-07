/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const FeaturesGrid = () => {
  return (
    <div>
      <h1 className="text-[24px] lg:text-[32px] font-bold text-blue-950 text-center">
        Featured Product
      </h1>
      <div className="flex flex-wrap gap-8 lg:gap-16 justify-center mt-8 lg:mt-16">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <Image 
            src="/image 1168.png" 
            alt="" 
            layout="responsive" 
            width={500} 
            height={500} 
            className="bg-bg mx-auto" 
          />
          <div className="bg-white shadow-2xl p-6 hover:bg-blue-800 cursor-pointer">
            <h1 className="text-pink-600 text-[16px] lg:text-[18px] font-semibold text-center">
              Cantilever chair
            </h1>
            <p className="text-[12px] lg:text-[14px] text-blue-950 text-center">
              Code - Y523201
              <br />
              $42.00
            </p>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-auto">
          <Image 
            src="/image 1.png" 
            alt="" 
            layout="responsive" 
            width={500} 
            height={350} 
            className="bg-bg mx-auto" 
          />
          <div className="bg-white hover:bg-blue-800 shadow-2xl p-6 cursor-pointer">
            <h1 className="text-pink-600 text-[16px] lg:text-[18px] font-semibold mt-4 lg:mt-7 text-center">
              Cantilever chair
            </h1>
            <p className="text-[12px] lg:text-[14px] text-blue-950 text-center">
              Code - Y523201
              <br />
              $42.00
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <Image 
            src="/image 3.png" 
            alt="" 
            layout="responsive" 
            width={500} 
            height={500} 
            className="bg-bg mx-auto" 
          />
          <div className="bg-white hover:bg-blue-800 shadow-2xl p-6 cursor-pointer">
            <h1 className="text-pink-600 text-[16px] lg:text-[18px] font-semibold mt-4 lg:mt-7 text-center">
              Cantilever chair
            </h1>
            <p className="text-[12px] lg:text-[14px] text-blue-950 text-center">
              Code - Y523201
              <br />
              $42.00
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <Image 
            src="/image 1169.png" 
            alt="" 
            layout="responsive" 
            width={500} 
            height={500} 
            className="bg-bg mx-auto" 
          />
          <div className="bg-white hover:bg-blue-800 shadow-2xl p-6 cursor-pointer">
            <h1 className="text-pink-600 text-[16px] lg:text-[18px] font-semibold text-center">
              Cantilever chair
            </h1>
            <p className="text-[12px] lg:text-[14px] text-blue-950 text-center">
              Code - Y523201
              <br />
              $42.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
