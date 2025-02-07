/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mb-20">
      <div className="bg-bag h-[350px] w-[1920px]">
        <h1 className="text-[40px] font-bold text-blue-950 pt-[125px] ml-52">
          Product Details
        </h1>
      </div>
      <div>
        <img src="/page sort by.png" alt="" className="ml-[310px] mt-[140px]" />
      </div>
      <div className="flex justify-around ml-72 gap-20 mt-20 shadow-2xl p-6 bg-white rounded-lg border-2 w-[1180px] h-[550px]">
        <div>
          <div className="flex gap-6 ">
            <div>
              <Image src="/Rectangle 134.png" alt="" width={151} height={155}  />
              <Image src="/Rectangle 136.png" alt="" width={151} height={155}className="mt-3" />
              <Image src="/Rectangle 137.png" alt="" width={151} height={155}className="mt-3" />
            </div>
            <div>
              <Image src="/Rectangle 138.png" alt=""width={375} height={487} />
            </div>
          </div>
        </div>
        <div className="leading-9 mt-16">
          <h1 className="text-[28px] text-blue-950  font-bold">
            Playwood arm chair
          </h1>
          <p className="text-yellow-500">
            ★★★★★ <span className="text-blue-950 font-bold">(22)</span>
          </p>
          <p className="text-[17px] font-semibold text-blue-950 ">
            $26.00{" "}
            <span>
              {" "}
              <del className="text-pink-600 text-[17px] font-semibold">
                $43.00
              </del>
            </span>
          </p>
          <p className="text-[20px] text-blue-950 font-semibold">Color</p>
          <p className="text-[19px] text-para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Mauris tellus porttitor purus,et volutpat sit.
          </p>
          <div className="flex gap-4 mt-8">
            <div>
              {" "}
              <h1 className="font-bold text-[18px] text-blue-950 underline cursor-pointer ml-20">
                Add to Cart
              </h1>
            </div>
            <div>
              <Image src="/Vector (2).png" alt="" width={18} height={18} className="mt-1 " />
            </div>
          </div>
          <p className="text-[20px] text-blue-950  font-semibold mt-3">
            Categories:
            <br /> Tags
          </p>
          <div className="flex gap-3">
            <div className="text-[20px] text-blue-950  font-semibold">
              Share
            </div>
            <div className="flex gap-3">
              <Image src="/Group 202.png" alt="" width={14} height={8} />
              <Image src="/Group 203.png" alt="" width={14} height={8}/>
              <Image src="/Group 204.png" alt="" width={14} height={8}/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bag w-full h-[600px] mt-24">
       
      <ul className="flex ml-72 font-semibold  text-[26px] text-blue-950 gap-10 cursor-pointer">
        <li className="underline mt-16 ">Description</li>
        <li className="mt-16"> Additional Info</li>
        <li className="mt-16">Reviews</li>
        <li className="mt-16">Video</li>
      </ul>
      
      <div  className="mt-14">
        <h1 className="text-[23px] text-blue-950 ml-72 mt-10 font-bold">Varius tempor.</h1>
        <p className="text-[16px] ml-72 leading-7 mt-3 text-para2">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum.<br/> Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus <br/>cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </p>
      </div>
      <div className="leading-8 ">
      <h1 className="text-[23px] text-blue-950 ml-72 mt-7 font-bold">More Details.</h1>
      <p className="ml-72 text-[17px] text-para2 mt-5 ">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      <p className="ml-72 text-[17px] text-para2 ">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      <p className="ml-72 text-[17px] text-para2 ">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      <p className="ml-72 text-[17px] text-para2 ">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      </div>
      <div>
        <h1 className="text-[40px] text-blue-950 ml-72 font-bold mt-14  ">Related Products</h1>
        <div className="flex gap-10 justify-center mt-20">
            <div>
                <Image src="/Rectangle 128.png" alt="" width={270} height={340} />
                <div className="flex justify-between m-2 ">
                <p className="text-blue-950 text-[19px] font-semibold">Mens Fashion Wear</p>
                <p className="text-yellow-500">
            ★★★★★ </p>
                </div>
                <p className="text-[18px] text-blue-950 ml-2">$43.00</p>
            </div>
            <div>
                <Image src="/Rectangle 130.png" alt="" width={270} height={340} />
                <div className="flex justify-between m-2 ">
                <p className="text-blue-950 text-[19px] font-semibold">Mens Fashion Wear</p>
                <p className="text-yellow-500">
            ★★★★★ </p>
                </div>
                <p className="text-[18px] text-blue-950 ml-2">$43.00</p>
                
            </div>
            <div>
                <Image src="/Rectangle 131.png" alt="" width={270} height={340}/>
                <div className="flex justify-between m-2 ">
                <p className="text-blue-950 text-[19px] font-semibold">Mens Fashion Wear</p>
                <p className="text-yellow-500">
            ★★★★★ </p>
                </div>
                <p className="text-[18px] text-blue-950 ml-2">$43.00</p>
            </div>
            <div>
                <Image  src="/Rectangle 133.png" alt=""width={270} height={340} />
                <div className="flex justify-between mt-7 ">
                <p className="text-blue-950 text-[19px] font-semibold">Mens Fashion Wear</p>
                <p className="text-yellow-500">
            ★★★★★ </p>
                </div>
                <p className="text-[18px] text-blue-950 ml-2">$43.00</p>
            </div>
        </div>
      </div>
      <div className='flex justify-center mb-16 '>
        <img src="/image 1174.png" alt="" className="mt-24" />
     </div>
    </div>
  );
};

export default page;
