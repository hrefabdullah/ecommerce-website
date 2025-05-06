import React from 'react'
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { day } from '../redux/darkMode';

const Navbar = () => {

  const dispatch = useDispatch()
  
  return (
    <div className='w-[100%] min-w-[350px] h-[10vh] min-h-[70px] bg-blue-400 grid grid-cols-2 px-7 py-1'>
      <h1 className='text-[2rem] font-bold self-center'>HS</h1>
      <div className='flex items-center gap-4 justify-self-end'>
        <div className='flex items-center gap-1 justify-self-center '>
          <input className='bg-white rounded-3xl w-[20vw] p-3 text-sm hidden sm:inline' placeholder='Search for products' type="text" name="search" id="itemSerach" />
          <CiSearch className='w-10 h-10 bg-blue-100 rounded-full p-2.5' />
        </div>
        <ul className=' gap-5 items-center pr-3 hidden lg:flex'>
          <NavLink to={'/'} className='hover:font-semibold'>Home</NavLink>
          <NavLink to={'/shop'} className='hover:font-semibold'>Shop</NavLink>
          <NavLink to={'/about'} className='hover:font-semibold'>About</NavLink>
          <button onClick={() => dispatch(day())}><IoMoon /></button>
        </ul>
        <IoCart className='w-10 h-10 bg-blue-100 p-2.5 rounded-full' />
        <button className='bg-blue-100 px-3 py-1 rounded-3xl text-sm md:text-md font-semibold'>Login</button>
        <button className='lg:hidden'>
          <CiMenuKebab className='h-6 w-6' />
        </button>
      </div>
    </div>
  )
}

export default Navbar