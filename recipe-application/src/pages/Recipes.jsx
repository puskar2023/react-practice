import React, { useContext } from "react";
import {recipecontext} from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [data] = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  return (
    <div className="w-[100%] min-h-screen pt-25 px-5 pb-3 bg-[url('https://images.unsplash.com/photo-1623129090933-f818be5272e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover grid grid-cols-1 gap-7 lg:px-19 lg:grid-cols-3">
      {renderrecipes}
    </div>
  )
}

export default Recipes