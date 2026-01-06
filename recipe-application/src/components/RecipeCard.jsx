import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const {id, image, title, desc} = props.recipe;
  return (
    <Link to={`/recipes/details/${id}`} className="h-100 border p-3 rounded-2xl flex flex-col gap-1">
      <div className='w-[100%] h-[65%] overflow-hidden rounded-2xl'>
      <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={image} alt="recipe image" /> </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="">{desc?.slice(0,120) + "..." }<small className='text-blue-400'>more</small></p>
   </Link>
  )
}

export default RecipeCard