/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from 'next/image';

const Discount = () => {
  return (
    <div className="py-10">
      {/* Title */}
      <h2 className="text-[36px] font-bold text-indigo-900 mb-8 text-center">
        Discount Item
      </h2>

      {/* Navigation Links */}
      <ul className="flex justify-center gap-5 underline">
        <li className="text-color underline hover:text-pink-600 cursor-pointer">
          Wood Chair
        </li>
        <li className="text-color underline hover:text-pink-600 cursor-pointer">
          Plastic Chair
        </li>
        <li className="text-color underline hover:text-pink-600 cursor-pointer">
          Sofa Collection
        </li>
      </ul>

      {/* Discount Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Text Section */}
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[520px] text-center md:text-left">
          <h2 className="mt-10 text-color font-bold text-[25px]">
            20% Discount Of All Products
          </h2>
          <p className="text-pink-700 font-bold leading-9">Eams Sofa Compact</p>
          <p className="text-para mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <button className="bg-pink-600 text-white py-2 px-6 mt-5 font-bold">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
          <Image
            src="/tortuga-01-b 1.png"
            alt="Discounted Product"
            width={700}
            height={460}
            className="w-full h-[460px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
