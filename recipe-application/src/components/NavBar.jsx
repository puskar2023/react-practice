import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='text-2xl flex justify-center items-center gap-6 py-10 lg:gap-9'>
      <NavLink to='/' className={(e)=> e.isActive? "text-red-400": ""} >Home</NavLink>
      <NavLink to='/recipes' className={(e)=> e.isActive? "text-red-400": ""} >Recipes</NavLink>
      <NavLink to='/about' className={(e)=> e.isActive? "text-red-400": ""} >About</NavLink>
      <NavLink to='/create-recipe' className={(e)=> e.isActive? "text-red-400": ""} >Create</NavLink>
    </div>
  )
}

export default NavBar