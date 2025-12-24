import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate();
  return (
      <div className='mb-5'>
        <h1 className='text-3xl mb-3'>Service</h1>
        <button onClick={() => navigate("/service/details")} className='text-2xl bg-white text-gray-800 rounded px-3 py-2 mb-5'>See details</button>

        <hr />
        <Outlet />
       
      </div>
  )
}

export default Service