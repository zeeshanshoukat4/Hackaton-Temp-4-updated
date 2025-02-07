// pages/index.tsx
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from 'next/image';

const TopCategories = () => {
  return (
    <div className="py-10">
      {/* Title */}
      <h1 className="text-[32px] font-bold text-blue-950 text-center mt-10 sm:mt-20">
        Top Categories
      </h1>

      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <Image
            src="/image 1168.png"
            alt="Mini LCW Chair"
            width={150}
            height={150}
            className="mt-5 bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>

        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <Image
            src="/image 1169.png"
            alt="Mini LCW Chair"
            width={150}
            height={150}
            className="mt-5 bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>

        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <Image
            src="/image 1171.png"
            alt="Mini LCW Chair"
            width={150}
            height={150}
            className="mt-5 bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>

        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <Image
            src="/image 1166.png"
            alt="Mini LCW Chair"
            width={150}
            height={150}
            className="mt-5 bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
