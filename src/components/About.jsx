import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const About = () => {

  const mode = useSelector((state) => state.darkMode.value)

  return (
    <div>
        <Navbar />
        <div className={`${mode ? 'bg-zinc-900' : "bg-white"} w-full h-max flex flex-col justify-start items-center mt-[10vh]`}>

           <div className='grid grid-rows-2 gap-5 lg:grid-rows-1 lg:grid-cols-2 w-screen bg-zinc-100 h-[400px]  items-start justify-center p-4'>
            <div className='lg:place-self-end w-[90%] h-full flex flex-col gap-1 justify-center'>
              <h1 className='text-4xl mb-1 lg:text-5xl font-semibold'>About us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloribus. Doloremque earum blanditiis, vero, ratione est.</p>
            </div>
            <div className='w-[100%] flex justify-center items-center h-full'>
              <img className='w-[100%] lg:w-[80%] h-full object-cover' src="https://images.unsplash.com/photo-1524084848619-1161d3c8501a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
           </div>

           <div className='grid grid-rows-2 gap-5 lg:grid-rows-1 lg:grid-cols-2 w-screen bg-white h-[400px]  items-start justify-center p-4'>
            <div className='w-[100%] flex justify-center items-center h-full'>
              <img className='w-[100%] lg:w-[80%] h-full object-cover' src="https://plus.unsplash.com/premium_photo-1680098058374-e580a9dbaeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvb2RlbiUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className='lg:place-self-end w-[90%] h-full flex flex-col gap-1 justify-center'>
              <h1 className='text-4xl mb-1 lg:text-5xl font-semibold'>Great Material</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloribus. Doloremque earum blanditiis, vero, ratione est.</p>
            </div>
           </div>

            <div className='grid grid-rows-2 gap-5 lg:grid-rows-1 lg:grid-cols-2 w-screen bg-zinc-100 h-[400px]  items-start justify-center p-4'>
            <div className='lg:place-self-end w-[90%] h-full flex flex-col gap-1 justify-center'>
              <h1 className='text-4xl mb-1 lg:text-5xl font-semibold'>Premium Quality</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloribus. Doloremque earum blanditiis, vero, ratione est.</p>
            </div>
            <div className='w-[100%] flex justify-center items-center h-full'>
              <img className='w-[100%] lg:w-[80%] h-full object-cover' src="https://images.unsplash.com/photo-1687889915133-dd0a0ddb7cc8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default About