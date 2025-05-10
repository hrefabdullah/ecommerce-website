import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const LoginPage = () => {
  return (
    <div>
        <Navbar />
        <div className='w-screen h-[90vh] flex justify-center items-center'>
            <div className='h-[50vh] md:h-[70vh] w-[80vw] md:w-[60vw] border-2 rounded-4xl flex flex-col items-center justify-around p-5'>
                <h1 className='font-semibold text-xl text-amber-400'>Login to continue</h1>
                <form className='flex flex-col gap-2 h-3/4'>
                    <label htmlFor="username">Username : </label>
                    <input type="text" id='username' className='bg-zinc-200 rounded-lg p-2 text-lg w-[100%]' />
                    <label htmlFor="pwd">Password : </label>
                    <input type="password" id='pwd' className='bg-zinc-200 rounded-lg p-2 text-lg w-[100%]' />
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LoginPage