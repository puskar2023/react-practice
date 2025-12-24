import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-5 mb-10'>
      <NavLink to="/" className={(e)=>e.isActive ? "text-red-400" : "text-white"}>Home</NavLink>
      <NavLink to="/products" className={(e)=>e.isActive ? "text-red-400" : "text-white"}>Products</NavLink>
      <NavLink to="/service" className={(e)=>e.isActive ? "text-red-400" : "text-white"}>Service</NavLink>
      <NavLink to="/about" className={(e)=>e.isActive ? "text-red-400" : "text-white"}>About</NavLink>
      <NavLink to="/create" className={(e)=>e.isActive ? "text-red-400" : "text-white"}>Create</NavLink>
    </div>
  )
}

export default Nav