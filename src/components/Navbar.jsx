import React from 'react'
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='w-[100%] h-[10vh] min-h-[70px] bg-blue-400 grid grid-cols-3 px-7 py-1'>
      <h1 className='text-[2rem] font-bold self-center'>HS</h1>
      <div className='flex items-center gap-1 justify-self-center'>
        <input className='bg-white rounded-3xl w-[20vw] p-3 text-sm hidden sm:inline' placeholder='Search for products' type="text" name="search" id="itemSerach" />
        <CiSearch className='w-10 h-10 bg-blue-100 rounded-full p-2.5' />
      </div>
      <div className='flex items-center gap-4 justify-self-end'>
        <ul className=' gap-5 items-center pr-3 hidden lg:flex'>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
        </ul>
        <IoCart className='w-10 h-10 bg-blue-100 p-2.5 rounded-full' />
        <button className='bg-blue-100 px-3 py-1 rounded-3xl text-sm md:text-md font-semibold'>Login</button>
      </div>
    </div>
  )
}

export default Navbar