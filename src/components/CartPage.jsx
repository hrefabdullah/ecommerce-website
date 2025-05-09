import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const CartPage = () => {

    const mode = useSelector((state) => state.darkMode.value)

  return (
    <div>
        <Navbar />
        <div className={`${mode ? 'bg-zinc-900' : 'bg-white'} w-screen h-[90vh] flex justify-center items-center`}>
            <h1 className={` ${mode ? 'text-white' : 'text-[#101010]'} text-3xl font-semibold`}>Your Cart</h1>
        </div>
    </div>
  )
}

export default CartPage