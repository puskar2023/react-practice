import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate();
  const DetailsHandler = (name) => {
    navigate(`/products/details/${name}`);
  }
  return (
    <div>
      <h1 className='text-5xl mb-10'>Products</h1>
      <div className='mb-5'>
        <h1 className='text-3xl mb-3'>Product 1</h1>
        <button onClick={() => DetailsHandler("product1")} className='text-2xl bg-white text-gray-800 rounded px-3 py-2'>See details</button>
      </div>

      <div className='mb-5'> 
        <h1 className='text-3xl mb-3'>Product 2</h1>
        <button onClick={() => DetailsHandler("product2")} className='text-2xl bg-white text-gray-800 rounded px-3 py-2'>See details</button>
      </div>

      <div className='mb-5'>
        <h1 className='text-3xl mb-3'>Product 3</h1>
        <button onClick={() => DetailsHandler("product3")} className='text-2xl bg-white text-gray-800 rounded px-3 py-2'>See details</button>
      </div>
    </div>
  )
}

export default Products