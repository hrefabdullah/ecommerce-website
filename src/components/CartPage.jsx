import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const CartPage = () => {

    const mode = useSelector((state) => state.darkMode.value)

  return (
    <div>
        <Navbar />
        <div className={`${mode ? 'bg-zinc-900' : 'bg-white'} w-screen h-max flex justify-center items-start p-5`}>
            {/* <h1 className={` ${mode ? 'text-white' : 'text-[#101010]'} text-3xl font-semibold`}>Your Cart</h1> */}
            <div className='w-[90%] h-[95%] rounded-4xl grid md:grid-cols-6 grid-rows-7 grid-cols-0 border-2 border-amber-400 mb-8'>
              <div className='row-span-4 md:row-span-7 md:col-span-4'>
                  
              </div>
              <div className={`row-span-3 md:row-span-7 md:col-span-2 p-15 flex flex-col items-center justify-center gap-1 ${mode ? 'text-white' : 'text-black'} `}>
                <h1 className='text-4xl font-semibold mb-6'>HERE IS YOUR <span className='text-amber-400'>BILL</span></h1>
                <div className='flex w-full justify-between border-t-2 border-zinc-800 pt-10'>
                  <h1>Products total</h1>
                  <h1>$99</h1>
                </div>
                <div className='flex w-full justify-between'>
                  <h1>GST</h1>
                  <h1>$1</h1>
                </div>
                <div className='flex w-full justify-between'>
                  <h1>Shipping charges</h1>
                  <h1>$5</h1>
                </div>
                <div className='flex w-full justify-between text-xl font-semibold border-b-2 border-zinc-800 pb-10'>
                  <h1>Estimated Total</h1>
                  <h1>$105</h1>
                </div>
                <div className='grid grid-cols-7 grid-rows-4 w-full mt-8 '>
                  <h1 className='row-span-1 col-span-full text-sm'>ENTER PROMO CODE</h1>
                  <input className='px-2 py-1 row-span-2 col-span-5 text-md text-zinc-700 border-y-2 border-l-2 border-amber-400' type="text" placeholder='Promo code' />
                  <button className='col-span-2 row-span-2 bg-amber-400 text-zinc-900'>Submit</button>
                </div>
                <button className='flex items-center gap-2 bg-amber-400 px-3 py-2 rounded-md font-semibold mb-4 mt-3'>
                  <MdOutlineShoppingCartCheckout /> Checkout
                </button>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CartPage