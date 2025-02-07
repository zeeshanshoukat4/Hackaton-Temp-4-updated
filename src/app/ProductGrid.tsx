/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const ProductGrid = () => {
  return (
    <div>
      <h1 className="text-[24px] lg:text-[32px] font-bold text-blue-950 text-center mt-8 lg:mt-16">
        Latest Product
      </h1>
      <ul className="flex flex-wrap justify-center gap-4 lg:gap-10 text-blue-950 text-[16px] lg:text-[18px] font-medium mt-4 lg:mt-6">
        <li className="underline hover:text-pink-600 cursor-pointer">New Arrival</li>
        <li className="underline hover:text-pink-600 cursor-pointer">Best Seller</li>
        <li className="underline hover:text-pink-600 cursor-pointer">Featured</li>
        <li className="underline hover:text-pink-600 cursor-pointer">Special Offer</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 lg:mt-10 mx-auto max-w-[1000px] px-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center transform transition hover:scale-110 cursor-pointer">
          <Image 
            src="/image 1166.png" 
            alt="" 
            width={223} 
            height={229} 
            className="bg-bg w-[223px] h-[229px]" 
          />
          <div className="mt-3 text-center">
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              Comfort Handy Craft
            </p>
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              $42.00{" "}
              <del className="text-pink-600 text-[14px] lg:text-[16px]">$65.00</del>
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center transform transition hover:scale-110 cursor-pointer">
          <Image 
            src="/image 15.png" 
            alt="" 
            width={223} 
            height={229} 
            className="bg-bg w-[223px] h-[229px]" 
          />
          <div className="mt-3 text-center">
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              Comfort Handy Craft
            </p>
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              $42.00{" "}
              <del className="text-pink-600 text-[14px] lg:text-[16px]">$65.00</del>
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center transform transition hover:scale-110 cursor-pointer">
          <Image 
            src="/image 1168.png" 
            alt="" 
            width={223} 
            height={229} 
            className="bg-bg w-[223px] h-[229px]" 
          />
          <div className="mt-3 text-center">
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              Comfort Handy Craft
            </p>
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              $42.00{" "}
              <del className="text-pink-600 text-[14px] lg:text-[16px]">$65.00</del>
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center transform transition hover:scale-110 cursor-pointer">
          <Image 
            src="/image 23.png" 
            alt="" 
            width={223} 
            height={229} 
            className="bg-bg w-[223px] h-[229px]" 
          />
          <div className="mt-3 text-center">
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              Comfort Handy Craft
            </p>
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              $42.00{" "}
              <del className="text-pink-600 text-[14px] lg:text-[16px]">$65.00</del>
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="flex flex-col items-center transform transition hover:scale-110 cursor-pointer">
          <Image 
            src="/image 32 (1).png" 
            alt="" 
            width={223} 
            height={229} 
            className="bg-bg w-[223px] h-[229px]" 
          />
          <div className="mt-3 text-center">
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              Comfort Handy Craft
            </p>
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              $42.00{" "}
              <del className="text-pink-600 text-[14px] lg:text-[16px]">$65.00</del>
            </p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="flex flex-col items-center transform transition hover:scale-110 cursor-pointer">
          <Image 
            src="/image 3.png" 
            alt="" 
            width={223} 
            height={229} 
            className="bg-bg w-[223px] h-[229px]" 
          />
          <div className="mt-3 text-center">
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              Comfort Handy Craft
            </p>
            <p className="text-blue-950 text-[14px] lg:text-[16px] font-medium">
              $42.00{" "}
              <del className="text-pink-600 text-[14px] lg:text-[16px]">$65.00</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
