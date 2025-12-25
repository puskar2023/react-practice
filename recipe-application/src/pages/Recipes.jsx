import React, { useContext } from "react";
import {recipecontext} from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [data] = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  return (
    <div className="w-[100%] px-19 grid grid-cols-3 gap-7 py-2">
      {renderrecipes}
    </div>
  )
}

export default Recipes