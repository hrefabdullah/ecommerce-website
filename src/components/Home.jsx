import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const Home = () => {

  const mode = useSelector((state) => state.darkMode.value)

  return (
    <div className='mt-[10vh] w-full h-max overflow-x-hidden'>
        <Navbar className='' />
        <div className={`${mode ? 'bg-zinc-900' : "bg-white"} `}>
            <div className='relative flex w-screen h-max'>
              <img className='w-screen h-[90vh] rounded-b-4xl object-cover' src="https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home interior"  />
              <div className='absolute left-0 top-[20vh] w-[60%] md:w-[40%] lg:[10%] flex flex-col gap-3'>
                <h1 className={`md:text-5xl text-3xl pl-5 p-2 mr-8 ${mode ? 'bg-zinc-900' : "bg-white"} font-bold text-amber-500`}>THE BEST <span className='font-normal'>YOU CAN GET</span></h1>
              </div>
            </div>

            <div className='w-screen flex flex-col items-center mt-10'>

              <h1 className={`${mode ? "text-white" : "text-black" } md:text-4xl text-2xl font-semibold`}>Decor your house with the <span className='text-amber-400 font-bold'>BEST</span></h1>

              <div className='h-[300px] w-screen bg-amber-400 mt-8 flex gap-10 justify-between p-7 pr-12 overflow-x-auto lg:overflow-hidden'>
                <div className={`min-w-[200px] h-[100%] w-[30%] ${mode ? 'bg-zinc-900' : "bg-white"} p-2 rounded-3xl flex items-center justify-center`}>
                    <img className='w-full h-full object-cover object-[0%_100%] rounded-3xl hover:scale-105 hover:-rotate-12 transition-all ease-in-out duration-150' src="https://images.unsplash.com/photo-1565374395542-0ce18882c857?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={`min-w-[200px] h-[100%] w-[30%] bg-white p-2 rounded-3xl ${mode ? 'bg-zinc-900' : "bg-white"}`}>
                  <img className='w-full h-full object-cover object-[0%_100%] rounded-3xl hover:scale-105 hover:-rotate-12 transition-all ease-in-out duration-150' src="https://images.unsplash.com/photo-1613276017109-fe84a32d55d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className={`${mode ? 'bg-zinc-900' : "bg-white"} min-w-[200px] h-[100%] w-[30%] bg-white p-2 rounded-3xl`}>
                  <img className='w-full h-full object-cover object-[0%_10%] lg:object-[0%_30%] rounded-3xl hover:scale-105 hover:-rotate-12 transition-all ease-in-out duration-150' src="https://plus.unsplash.com/premium_photo-1677331152846-59db101e9124?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>

            </div>

            <div className='h-[500px] w-screen flex flex-col items-center gap-3 p-5 lg:pr-10 mt-6'>
              <h1 className='text-3xl text-amber-500 font-semibold'>Best Sellers!</h1>
              <div className='w-screen h-[90%] border-2 border-amber-400 p-4 rounded-2xl flex overflow-x-auto gap-3 mt-5'>
                <div className='min-w-[300px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[300px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[300px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[300px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[300px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
              </div>
            </div>

             <div className='h-[400px] w-screen flex flex-col items-center gap-3 p-5 lg:pr-10'>
              <h1 className='text-3xl text-amber-500 font-semibold'>Featured Products</h1>
              <div className='w-screen h-[90%] border-2 border-amber-400 p-4 rounded-2xl flex overflow-x-auto gap-3 mt-5'>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
                <div className='min-w-[200px] w-[400px] h-[100%] bg-amber-500 rounded-2xl'></div>
              </div>
            </div>

            
        </div>
        <Footer />
    </div>
  )
}

export default Home