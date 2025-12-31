import React, { useContext } from "react";
import {recipecontext} from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [data] = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  return (
    <div className="w-[100%] pt-25 px-5 pb-3 grid grid-cols-1 gap-7 lg:px-19 lg:grid-cols-3">
      {renderrecipes}
    </div>
  )
}

export default Recipes