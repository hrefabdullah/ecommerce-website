import React from 'react'
import { useSelector } from 'react-redux'
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const ProductPage = () => {

    const mode = useSelector((state) => state.darkMode.value)

    return (
        <div className={` ${mode ? "text-white bg-zinc-900" : "text-zinc-950 bg-white"} w-screen h-[105vh] grid grid-rows-9 lg:grid-rows-1 lg:grid-cols-9`}>
            <div className='row-span-4 lg:col-span-4 p-5 gap-5 flex flex-col items-end '>
                <img className='w-[100%] lg:w-[80%] rounded-xl h-[70%] object-cover' src="https://images.unsplash.com/photo-1550535424-bf6a1352f2c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHdvb2RlbiUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className='flex w-full justify-between md:justify-end gap-4'>
                    <img className='w-[80px] h-[80px] rounded-xl object-cover' src="https://images.unsplash.com/photo-1708623895643-ceb64a36c656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvb2RlbiUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img className=' w-[80px] h-[80px] rounded-xl object-cover' src="https://plus.unsplash.com/premium_photo-1680098057218-070cf9a653f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdvb2RlbiUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img className=' w-[80px] h-[80px] rounded-xl object-cover' src="https://images.unsplash.com/photo-1613940512699-fc9150817bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHdvb2RlbiUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img className=' w-[80px] h-[80px] rounded-xl object-cover' src="https://plus.unsplash.com/premium_photo-1661425776498-0c7151ffcf13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvb2RlbiUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>

            <div className='row-span-5 lg:col-span-5 p-5 lg:p-20 lg:w-[80%]'>
                <h1 className='opacity-50 text-sm'>Wooden material</h1>
                <h1 className='text-4xl lg:text-5xl  font-semibold'>Desinger Tray</h1>
                <div className='flex m-1 mt-2 text-amber-400'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                </div>
                <p className='mt-3 lg:mt-5 text-sm lg:text-lg  opacity-65'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta vero ut dolorem, amet maiores magnam autem porro adipisci nobis minus, pariatur aperiam, eum dolorum placeat natus reprehenderit delectus similique voluptatum est rem necessitatibus enim!</p>
                <div className='flex gap-3 h-max items-center p-2'>
                    <h1 className='text-3xl font-semibold mt-2'>$499</h1>
                    <h1 className='bg-amber-500 px-2 mt-2 text-sm'>30% OFF</h1>
                </div>
                <div className='flex mt-4 justify-center lg:justify-start gap-2 items-center  w-full px-3 py-1 rounded-lg'>
                    <FaArrowRight />
                    <button className='text-3xl bg-amber-500 px-3 py-1 rounded-lg font-semibold'>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage