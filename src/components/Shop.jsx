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
        <ProductPage />
      </div>
      <Footer />
    </div>
  )
}

export default Shop