import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Receive = () => {

    const {roomId} = useParams()
    const location = useLocation()
    const fileData = location.state?.fileData;

    console.log(fileData)
  return (
    <div>Receive</div>
  )
}

export default Receive