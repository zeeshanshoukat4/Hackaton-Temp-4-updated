/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <nav className="bg-white shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-[32px] font-bold text-black">Hekto</div>

          {/* Links */}
          <div className="hidden md:flex  space-x-6 text-[16px] font-medium text-gray-700">
            <Link href="/" className="hover:text-pink-500">
              Home
            </Link>
            <div className="relative group">
              <span className="hover:text-pink-500 cursor-pointer">Pages ▼</span>
              {/* Dropdown */}
              <div className=" absolute px-20 left-0 top-full mt-1 whitespace-nowrap hidden group-hover:block bg-white shadow-md rounded-md py-2">
                <Link href="/shopGridDefault" className="block  py-2 hover:text-pink-500  text-gray-700 hover:bg-gray-100">
                  Shop Grid Default
                </Link>
                <Link href="/shopList" className="block  hover:text-pink-500 py-2 text-gray-700 hover:bg-gray-100">
                  Shop List
                </Link>
                
                <Link href="/shopLeftSlider" className="block hover:text-pink-500  py-2 text-gray-700 hover:bg-gray-100">
                  Shop Left Sidebar
                </Link>
                <Link href="/productDetails" className="block hover:text-pink-500  py-2 text-gray-700 hover:bg-gray-100">
                  Product Details
                </Link>
                <Link href="/shoppingCurt" className="block hover:text-pink-500 py-2 text-gray-700 hover:bg-gray-100">
                  Shopping Curt
                </Link>
                <Link href="/orderedComplete" className="block hover:text-pink-500  py-2 text-gray-700 hover:bg-gray-100">
                  Ordered Completed
                </Link>
                <Link href="/myAccount" className="block hover:text-pink-500 py-2 text-gray-700 hover:bg-gray-100">
                  My Account
                </Link>
                <Link href="/blogPage" className="block hover:text-pink-500  py-2 text-gray-700 hover:bg-gray-100">
                  Blog Page
                </Link>
                <Link href="/singleBlogPage" className="block hover:text-pink-500  py-2 text-gray-700 hover:bg-gray-100">
                 Single  Blog Page
                </Link>
                <Link href="/aboutus" className="block hover:text-pink-500   py-2 text-gray-700 hover:bg-gray-100">
                  About Us
                </Link>
                <Link href="/contact" className="block  hover:text-pink-500  py-2 text-gray-700 hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link href="/notFound" className="block hover:text-pink-500 py-2 text-gray-700 hover:bg-gray-100">
                  page Not Found
                </Link>
                <Link href="/faq" className="block hover:text-pink-500 py-2 text-gray-700 hover:bg-gray-100">
                  FAQ
                </Link>
              </div>
            </div>
            <Link href="#" className="hover:text-pink-500">
              Products
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Blog
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Shop
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-l-md px-4 py-1 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-1 rounded-r-md">
              🔍
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
