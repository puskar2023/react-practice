import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const navigate = useNavigate()
    const params = useParams();
  return (
    <div>
        <h1 className='text-3xl mb-5'>{params.name}</h1>
        <button onClick={()=>navigate(-1)} className='text-2xl bg-white text-gray-800 px-3 py-2 rounded'>Go back</button>
    </div>
  )
}

export default ProductDetails