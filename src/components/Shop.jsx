import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Shop = () => {

  const mode = useSelector((state) => state.darkMode.value)

  return (
    <div>
        <Navbar />
        <div className={`${mode ? 'bg-zinc-900' : "bg-white"} w-full h-[90vh] flex justify-center items-center`}>
            <h1 className={`text-3xl font-semibold ${mode ? "text-white" : 'text-black'}`}>Store Section</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Shop