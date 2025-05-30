import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import ProductPage from './ProductPage'

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])


  const mode = useSelector((state) => state.darkMode.value)

  return (
    <div>
      <Navbar />
      <div className={`${mode ? 'bg-zinc-900' : "bg-white"} w-full mb-5 mt-[10vh]`}>
        {/* <h1 className={`text-3xl font-semibold ${mode ? "text-white" : 'text-black'}`}>Store Section</h1> */}
        {/* <h1 className='text-3xl font-semibold mb-5'>Featured Products</h1> */}
        <ProductPage />
        <div className='flex flex-wrap gap-2 overflow-x-auto whitespace-nowrap py-5 h-max'>
          {products.map((item) => (
            <div className='w-[200px] h-[30vh] border-2 rounded-[27px] border-amber-400 flex flex-col items-center justify-center' key={item._id}>
              <div className='w-full h-[80%] flex justify-center items-center '>
                <img src={item.url} className='w-full h-full rounded-3xl' alt="" />
              </div>
              <h1 className='text-black font-bold'>{item.name}</h1>
              <h1 className='text-black'>₹{item.price}</h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop