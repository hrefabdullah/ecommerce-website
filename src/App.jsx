import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/shop',
      element: <Shop />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App