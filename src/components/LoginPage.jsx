import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'


const LoginPage = () => {

  const mode = useSelector((state) => state.darkMode.value)

  return (
    <div>
      <Navbar />
      <div className={` ${mode ? 'bg-zinc-900 text-white' : 'bg-white text-black' } w-screen h-[70vh] md:h-[80vh] flex justify-center items-center py-10`}>
        <div className='h-[55vh] md:h-[60vh] w-[80vw] md:w-[40vw] border-2 border-amber-400 rounded-4xl grid grid-rows-4'>
          <div className='place-items-center self-center row-span-1'>
            <h1 className='font-bold text-4xl text-amber-400'>Login</h1>
          </div>
          <form className='row-span-2 flex flex-col gap-2 w-full p-7'>
            <label htmlFor="username">Username </label>
            <input type="text" id='username' className='bg-zinc-200 rounded-lg p-2 mb-3 text-lg w-[100%]' />
            <label htmlFor="pwd">Password</label>
            <input type="password" id='pwd' className='bg-zinc-200 rounded-lg p-2 text-lg w-[100%]' />
            <button className='bg-amber-400 mt-5 w-max h-max px-2 py-1 place-self-center-safe rounded-sm text-center text-black font-semibold'>Continue</button>
          </form>
          <div className='w-full flex flex-col items-center h-full pt-4'>
            <NavLink className='text-sm opacity-55 font-normal'>Forget password?</NavLink>
            <h1 className='text-sm opacity-55 font-normal'>Existing user? <NavLink className='underline-'>Register now</NavLink></h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage