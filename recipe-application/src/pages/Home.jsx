import React, { useEffect } from 'react'
import axios from '../utils/axios'

const Home = () => {

  const getproduct = async() => {
    try {
      const response = await axios.get("/products");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getproduct();
  },[]);

  return (
    <div className='text-center'>
      <h1 className='text-5xl mb-9'>Home</h1>
      <button onClick={getproduct} className='text-3xl px-4 py-1 bg-red-400 text-white rounded'>Get Product Data</button>
    </div>
  )
}

export default Home