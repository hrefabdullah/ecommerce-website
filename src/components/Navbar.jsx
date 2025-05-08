import React from 'react'
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6"
import { AiFillInfoCircle } from "react-icons/ai";
import { MdSunny, MdHomeFilled } from "react-icons/md";
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { day } from '../redux/darkMode';
import { menuOn } from '../redux/menuSide';

const Navbar = () => {

  const dispatch = useDispatch()
  const menu = useSelector((state) => state.menuSide.value)
  const mode = useSelector((state) => state.darkMode.value)


  return (
    <div className='z-10 w-[100%] min-w-[350px] h-[10vh] min-h-[70px] bg-blue-400 grid grid-cols-2 px-7 py-1'>
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
        <NavLink className='hidden' to={'/cart'} >
          <IoCart className='w-10 h-10 bg-blue-100 p-2.5 rounded-full' />
        </NavLink >
        <button className='bg-blue-100 px-3 py-1 rounded-3xl text-sm md:text-md font-semibold'>Login</button>
        <button onClick={() => dispatch(menuOn())} className='lg:hidden'>
          <CiMenuKebab className='h-6 w-6' />
        </button>
        <div className={`${menu ? 'absolute' : 'hidden'} lg:hidden bg-blue-400 w-[50vw] md:w-[30vw] h-[90vh] min-h-[80vh] z-1 top-[10vh] right-0`}>
          <ul className='p-5 gap-2 flex flex-col md:text-xl font-normal text-left text-md '>
            <NavLink to={'/'} className='hover:font-semibold flex items-center gap-2'>
            <MdHomeFilled />
            <h1>Home</h1>
            </NavLink>
            <NavLink to={'/shop'} className='hover:font-semibold flex items-center gap-2'>
            <FaBagShopping className='h-4' />
            <h1>Store</h1>
            </NavLink>
            <NavLink to={'/about'} className='hover:font-semibold flex items-center gap-2'>
            <AiFillInfoCircle />
            <h1>About us</h1>
            </NavLink>
            <NavLink className='flex items-center gap-2' to={'/cart'} >
              <IoCart />
              <h1>Your cart</h1>
            </NavLink >
            <button className='flex items-center gap-2' onClick={() => dispatch(day())}>
              {mode ? <MdSunny /> : <IoMoon />}
              <h1><span>{mode ? 'Light' : 'Dark'}</span> mode</h1>
              </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar