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
            <h1 className={`text-3xl font-semibold ${mode ? "text-white" : 'text-zinc-900'}`}>Home Section</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Home