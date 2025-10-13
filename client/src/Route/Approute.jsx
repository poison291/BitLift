import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '../Pages/Landing'
import Test from '../Pages/Test'

const Approute = () => {  
  const router = createBrowserRouter([

    {
      path:  '/',
      element: <Landing/>
    },
    {
      path: '/test',
      element: <Test />
    },
    ])
  return (
  <RouterProvider router={router}/>
  )
}

export default Approute