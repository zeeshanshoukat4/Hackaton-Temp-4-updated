/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
       <div className='bg-bag h-[286px] w-[1920px]'>
        <h1 className='text-[40px] font-bold text-blue-950 pt-[125px] ml-52'>Shop Left Side bar</h1>
     </div>
     <div><Image src="/page sort by.png" alt=""width={1171} 
                 height={44} className='ml-[310px] mt-[140px]' /></div>

     <div className='mt-20 ml-[185px]'>
        {/* card1 */}
        <div className='flex gap-28 ml-11'>
            <div>
                <h1 className='text-[32px] font-bold text-blue-950 underline  '>Product Brand</h1>
                <ul className='mt-4 leading-10 text-[20px]'>
                    <li> <input type="checkbox" /> Coaster Furniture</li>
                    <li> <input type="checkbox" /> Fusion Dot High Fashion</li>
                    <li><input type="checkbox" />Unique Furnitture Restor</li>
                    <li><input type="checkbox" />Dream Furnitture Flipping</li>
                    <li><input type="checkbox"  />Young Repurposed</li>
                    <li><input type="checkbox"  />Green DIY furniture</li>
                </ul>
            </div>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (13).png" alt="" width={284} height={197} className=' mt-10'/></div>
                <div>
                <div className='flex gap-16 mt-10'>
                    <div><h1 className='text-[23px] font-bold'>Dictum morbi</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
            </div>
    {/* card2 */}
            <div className='flex gap-28 ml-11 mt-6'>
            <div>
                <h1 className='text-[32px] font-bold text-blue-950 underline'>Discount Offer</h1>
                <ul className='mt-4 leading-10 text-[20px]'>
                    <li> <input type="checkbox"  /> Coaster Furniture</li>
                    <li> <input type="checkbox" /> Fusion Dot High Fashion</li>
                    <li><input type="checkbox" />Unique Furnitture Restor</li>
                    <li><input type="checkbox" />Dream Furnitture Flipping</li>
                    <li><input type="checkbox"  />Young Repurposed</li>
                    <li><input type="checkbox"  />Green DIY furniture</li>
                </ul>
            </div>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (7).png" alt="" width={284} height={197}  /></div>
                <div>
                <div className='flex gap-10'>
                    <div><h1 className='text-[23px] font-bold'>Sodales sit</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
            </div>
                 {/* card3 */}
            <div className='flex gap-28 ml-11 mt-6'>
            <div>
                <h1 className='text-[32px] font-bold text-blue-950 underline'>Rating item</h1>
                <ul className='mt-4 leading-10 text-[18px]'>
                    <li className='flex gap-3'> <input type="checkbox"/> <p className='text-yellow-500'>★★★★</p>(2341)</li>
                    <li className='flex gap-3'> <input type="checkbox" /> <p className='text-yellow-500'>★★★★★</p>(1726)</li>
                    <li className='flex gap-3'><input type="checkbox" /><p className='text-yellow-500'>★★★★★</p>(258)</li>
                    <li className='flex gap-3'><input type="checkbox" /><p className='text-yellow-500'>★★★★★</p>(2341)</li>
                

                </ul>
            </div>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (8).png" alt=""  width={310} height={200}className=' mt-5 ml-5'/></div>
                <div>
                <div className='flex gap-10'>
                    <div><h1 className='text-[23px] font-bold'>Nibh varius</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
            </div>
                {/* card 4 */}
            <div className='flex gap-28 ml-11 mt-6'>
            <div>
                <h1 className='text-[32px] font-bold text-blue-950 underline'>Categories</h1>
                <ul className='mt-4 leading-10 text-[20px]'>
                    <li> <input type="checkbox"  />Prestashop</li>
                    <li> <input type="checkbox" /> Magento</li>
                    <li><input type="checkbox" />Bigcommerce</li>
                    <li><input type="checkbox" />osCommerce</li>
                    <li><input type="checkbox"  />3dcart</li>
                    <li><input type="checkbox"  />Bags</li>
                    <li>Accessories</li>
                    <li>Jewellery</li>
                    <li><input type="checkbox"  />Watches</li>
                </ul>
            </div>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (9).png" alt="" width={310} height={200}className='w-[310px] h-[200px]  mt-16 ml-7' /></div>
                <div>
                <div className='flex gap-10 mt-14'>
                    <div><h1 className='text-[23px] font-bold'>Mauris quis</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
                  {/* card 5 */}
            </div>
            <div className='flex gap-20 ml-11 mt-6'>
            <div>
                <h1 className='text-[32px] font-bold text-blue-950 underline'>Price filter</h1>
                <ul className='mt-4 leading-10 text-[18px]'>
                    <li> <input type="checkbox"  /> $0.00 - $150.00</li>
                    <li> <input type="checkbox" /> $150.00 - $350.00</li>
                    <li><input type="checkbox" />$150.00 - $504.00</li>
                    <li><input type="checkbox" />$450.00 +</li>
                    </ul>
                  <input type="text" placeholder='$10.00 - 20000$' className='py-2 px-5 mt-4 border-2 rounded-md' />

                    
            </div>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (10).png" alt=""width={284} height={197} /></div>
                <div>
                <div className='flex gap-10'>
                    <div><h1 className='text-[23px] font-bold'>Morbi sagittis</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
            </div>
              {/* card 6*/}
            <div className='flex gap-10 ml-11 mt-6'>
            <div>
                <h1 className='text-[32px] font-bold text-blue-950 underline'>Filter by Color</h1>
                <div className='grid grid-cols-4  gap-2 mt-10'>
                <p className="w-5 h-5 bg-blue-800 rounded-full flex "> </p>
                <p className='text-[19px]'>Blue</p>
                <p className="w-5 h-5 bg-orange-700 rounded-full"></p>
                <p className='text-[19px]'>Orange</p>
                <p className="w-5 h-5  bg-red-600 rounded-full"></p>
                <p className='text-[19px]'>Red</p>
                <p className="w-5 h-5  bg-green-600 rounded-full"></p>
                <p className='text-[19px]'>Green</p>
                <p className="w-5 h-5  bg-purple-600 rounded-full"></p>
                <p className='text-[19px]'>purple</p>
                <p className="w-5 h-5  bg-black rounded-full"></p>
                <p className='text-[19px]'>black</p>
            </div>
            </div>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (11).png" alt="" width={284} height={197}/></div>
                <div>
                <div className='flex gap-10'>
                    <div><h1 className='text-[23px] font-bold'>Ultricies venenatis</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
            </div>
              {/* card 7 */}
            <div className='flex gap-28 ml-[350px] mt-14'>
            <div className='flex gap-10'>
                <div> <Image src="/Rectangle 32 (12).png" alt="" width={284} height={197}/></div>
                <div>
                <div className='flex gap-10'>
                    <div><h1 className='text-[23px] font-bold'>Scelerisque dignissim</h1></div>
                    <div></div>
                </div>
                <div className='flex gap-6'>
                    <div><p className='text-[17px] font-semibold text-blue-950 '>$26.00 <span> <del className='text-pink-600 text-[17px] font-semibold'>$43.00</del></span>
                    </p></div>
                    <div>
                        <p className='text-yellow-500'>★★★★★</p><br/>
                        <p className='-ml-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eos, eligendi ducimus. Omnis, vero consequatur.</p>
                    </div>
                </div>
                <ul className='flex gap-6 mt-7 ml-4 cursor-pointer'>
                    <li> <Image src="/Group (2).png" alt="" width={20} height={20} /></li>
                    <li> <Image src="/Vector (2).png" alt=""width={20} height={20}/></li>
                    <li> <Image src="/Vector (3).png" alt=""width={20} height={20}/></li>
                </ul>
            </div>
           
                </div>
            </div>
        </div>
     </div>
     
  )
}

export default page
