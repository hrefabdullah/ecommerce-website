import React from 'react'
import { NavLink } from 'react-router'
import { FaInstagram, FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { darkMode } from '../redux/darkMode';


const Footer = () => {

    const mode = useSelector((state) => state.darkMode.value)

    return (
        <div className={` ${mode ? 'bg-zinc-900 text-zinc-300' : 'bg-white text-zinc-700'} h-[25vh] w-screen text-[#515151]  grid grid-cols-6 grid-rows-2 text-[12px] pb-8 p-4 md:text-[15px] lg:text-[16px] border-t-[1px] border-zinc-700 pt-8`}>
            <div className='px-3 md:px-5 lg:px-6 col-span-2'>
                <h1 className='text-5xl md:text-6xl font-bold text-amber-400'>HS</h1>
                <p className='font-semibold text-md lg:text-xl'>Illuminating your Ideas</p>
            </div>
            <div className='grid grid-cols-4 col-span-4 px-3 md:px-5 lg:px-6'>
                <div className='flex flex-col text-start col-span-1'>
                    <h1 className='text-md md:text-xl font-semibold text-amber-400'>Socials</h1>
                    <ul className='flex flex-col pt-1'>
                        <NavLink>Instagram</NavLink>
                        <NavLink>Facebook</NavLink>
                        <NavLink>Telegram</NavLink>
                        <NavLink>Youtube</NavLink>
                    </ul>
                </div>
                <div className='flex flex-col text-start col-span-1 px-2'>
                    <h1 className='text-md md:text-xl font-semibold text-amber-400'>Service</h1>
                    <ul className='flex flex-col pt-1'>
                        <NavLink>Return Policy</NavLink>
                        <NavLink>Feedback</NavLink>
                        <NavLink>Customer Care</NavLink>
                    </ul>
                </div>
                <div className='col-span-2 ml-3 px-3'>
                    <h1 className='text-md md:text-xl font-semibold pb-2 text-amber-400'>Contact Us</h1>
                    <div>
                        <h1>123 Main Street, Suite 400, Anytown, USA 12345</h1>
                        <h1>+94 (555) 123-4567</h1>
                    </div>
                    <h1 className='hidden sm:inline font-semibold mt-4 text-amber-400 text-md md:text-xl'>Payment Methods</h1>
                        <div className='hidden sm:flex gap-3 mt-2'>
                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className='h-6' />
                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className='h-6' />
                            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className='h-6' />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer