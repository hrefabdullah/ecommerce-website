import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const Home = () => {

  const mode = useSelector((state) => state.darkMode.value)

  return (
    <div className='w-full h-max overflow-x-hidden'>
        <Navbar />
        <div className={`${mode ? 'bg-zinc-900' : "bg-white"} h-[100vh] flex justify-center items-center`}>
            {/* <h1 className={`text-3xl font-semibold ${mode ? "text-white" : 'text-zinc-900'}`}>Home Section</h1> */}
            <div className='flex w-screen h-full'>
              <img className='w-screen h-[90%] object-cover' src="https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home interior"  />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home