import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '../Pages/Landing'

const Approute = () => {  
  const router = createBrowserRouter([

    {
      path:  '/',
      element: <Landing/>
    }
  ])
  return (
  <RouterProvider router={router}/>
  )
}

export default Approute