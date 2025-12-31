import RecipeCard from "../components/RecipeCard";

const Favourite = () => {
  const data = JSON.parse(localStorage.getItem("fav")) || [];

  const renderrecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  return (
    <div className="w-[100%] pt-25 px-6 pb-3 grid grid-cols-1 gap-7 lg:px-19 lg:grid-cols-3">
      {data.length > 0 ? renderrecipes : "No favourites are found"}
    </div>
  )
}

export default Favourite