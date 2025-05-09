import React from 'react'
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6"
import { AiFillInfoCircle } from "react-icons/ai";
import { MdSunny, MdHomeFilled } from "react-icons/md"
import { RxCross1 } from "react-icons/rx";;
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { day } from '../redux/darkMode';
import { menuOn } from '../redux/menuSide';
import { search } from '../redux/searchBar';

const Navbar = () => {

  const dispatch = useDispatch()
  const menu = useSelector((state) => state.menuSide.value)
  const mode = useSelector((state) => state.darkMode.value)
  const searchBar = useSelector((state) => state.searchBar.value)

  return (
    <div className={`z-10 w-full min-w-[350px] h-[10vh] min-h-[70px] ${mode ? 'bg-zinc-900' : 'bg-white'} grid grid-cols-2 px-7 py-1`}>

      <h1 className='text-amber-500 text-[2rem] font-bold self-center'>HS</h1>

      <div className='flex items-center gap-4 justify-self-end'>

        <div className='flex items-center gap-1 justify-self-center '>

          <input className='bg-zinc-100 rounded-3xl w-[20vw] p-3 px-5 text-sm hidden sm:inline' placeholder='Search for products' type="text" name="search" id="itemSerach" />

          <button className='sm:hidden' onClick={() => dispatch(search())}>
            {searchBar ? <RxCross1 className='w-10 h-10 bg-zinc-100 rounded-full p-3' />: <CiSearch className='w-10 h-10 bg-zinc-100 rounded-full p-2.5' />}
          </button>

          <button className='hidden sm:inline'>
            <CiSearch className='w-10 h-10 bg-zinc-100 rounded-full p-2.5' />
          </button>

        </div>

        <ul className=' gap-5 items-center pr-3 hidden lg:flex'>

          <NavLink to={'/'} className={`${mode ? 'text-white' : 'text-black'} hover:font-semibold`}>Home</NavLink>
          <NavLink to={'/shop'} className={`${mode ? 'text-white' : 'text-black'} hover:font-semibold`}>Shop</NavLink>
          <NavLink to={'/about'} className={`${mode ? 'text-white' : 'text-black'} hover:font-semibold`}>About</NavLink>
          <button onClick={() => dispatch(day())}>
            {mode ? <MdSunny className='text-white' /> : <IoMoon className='text-black' /> }
          </button>

        </ul>

        <NavLink className='hidden' to={'/cart'} >
          <IoCart className='w-10 h-10 bg-zinc-100 p-2.5 rounded-full' />
        </NavLink >

        <button className='bg-amber-400 px-3 py-1 rounded-3xl text-sm text-white md:text-md font-semibold'>Login</button>

        <button onClick={() => dispatch(menuOn())} className='lg:hidden'>
          {menu ? <RxCross1 className='text-amber-400 h-6 w-6' /> : <CiMenuKebab className='text-amber-400 h-6 w-6' />}
        </button>

        <div className={`${menu ? 'absolute' : 'hidden'} lg:hidden ${mode ? 'bg-zinc-800 text-white' : 'bg-white'} w-[50vw] md:w-[30vw] h-[90vh] min-h-[80vh] z-1 top-[10vh] right-0`}>

          <ul className='p-5 gap-2 flex flex-col md:text-lg font-normal text-left text-md '>

            <NavLink onClick={() => dispatch(menuOn())} to={'/'} className='hover:font-semibold flex items-center gap-2'>
              <MdHomeFilled className='text-amber-400' />
              <h1>Home</h1>
            </NavLink>

            <NavLink onClick={() => dispatch(menuOn())} to={'/shop'} className='hover:font-semibold flex items-center gap-2'>
              <FaBagShopping className='h-4 text-amber-400' />
              <h1>Store</h1>
            </NavLink>

            <NavLink onClick={() => dispatch(menuOn())} to={'/about'} className='hover:font-semibold flex items-center gap-2'>
              <AiFillInfoCircle className='text-amber-400' />
              <h1>About us</h1>
            </NavLink>

            <NavLink onClick={() => dispatch(menuOn())} className='flex items-center gap-2 hover:font-semibold' to={'/cart'} >
              <IoCart className='text-amber-400' />
              <h1>Your cart</h1>
            </NavLink >

            <button className='flex items-center gap-2 ' onClick={() => {
              dispatch(day()),
              dispatch(menuOn())
            }}>
              {mode ? <MdSunny className='text-amber-400' /> : <IoMoon className='text-amber-400' />}
              <h1 className='hover:font-semibold'><span>{mode ? 'Light' : 'Dark'}</span> mode</h1>
            </button>

          </ul>

        </div>

      </div>

      <div className={`sm:hidden ${searchBar ? 'flex' : 'hidden'} w-screen bg-amber-400 absolute left-0 top-[10vh] p-2  justify-around items-center`}>

        <input className={`${mode ?  'border-2 border-[#141414]' : 'bg-zinc-100'} rounded-4xl w-[80vw] p-3 px-5 text-sm`} placeholder='Search for products' type="text" name="search" id="itemSerach" />

        <button >
          <CiSearch className={` ${mode ? 'border-2 border-[#141414] w-11 h-11' : 'bg-zinc-100'} w-10 h-10 rounded-full p-2.5`} />
        </button>

      </div>

    </div>
  )
}

export default Navbar