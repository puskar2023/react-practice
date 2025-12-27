import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const {id, image, title, desc} = props.recipe;
  return (
    <Link to={`/recipes/details/${id}`} className="h-100 border p-3 rounded flex flex-col gap-1">
      <img className="w-[100%] h-[65%] object-cover" src={image} alt="recipe image" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="">{desc?.slice(0,120) + "..." }<small className='text-blue-400'>more</small></p>
   </Link>
  )
}

export default RecipeCard