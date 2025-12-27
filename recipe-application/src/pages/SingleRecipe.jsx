import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setdata] = useContext(recipecontext);
  const recipe = data.find((r) => r.id == params.id);
  const index = data.findIndex((r) => r.id == params.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: recipe.image,
      title: recipe.title,
      desc: recipe.desc,
      inst: recipe.inst,
      ingr: recipe.ingr,
      cate: recipe.cate,
    },
  });

  const SubmitHandler = (newdata) => {
    const copydata = data;
    copydata[index] = {...recipe, ...newdata};
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated!");
  }
  const DeleteHandler = () => {
    const newdata = data.filter(r => r.id != recipe.id);
    setdata(newdata);
    localStorage.setItem("recipes", JSON.stringify(newdata));
    navigate('/recipes');
    toast.success("Recipe deleted!")
  }

  return (
    <div className=" w-full px-1 py-2 flex flex-col gap-15 lg:flex-row lg:px-6 lg:gap-1">
      <div className="w-[100%] px-2 py-1 flex flex-col gap-4 lg:w-1/2 lg:px-10 lg:border-r">
        <h1 className="text-center text-3xl font-bold">{recipe.title}</h1>
        <img
          className="w-[100%] h-80 object-cover rounded"
          src={recipe.image}
          alt=""
        />
        <p className="text-xl">{recipe.desc? recipe.desc : ""}</p>
        <p className="text-xl">{recipe.ingr? recipe.ingr : ""}</p>
        <p className="text-xl">{recipe.inst? recipe.inst : ""}</p>
        <h2 className="text-xl font-bold">Category : {recipe.cate}</h2>
      </div>
      <div className="h-[1px] w-full bg-white lg:hidden"></div>
      <form onSubmit={handleSubmit(SubmitHandler)} className=" w-[100%] px-3 py-3 flex flex-col lg:w-1/2 lg:border-l lg:px-10">
        <input
          {...register("image", {required : 'enter the image url'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-1"
          type="url"
          placeholder="Enter image URL"
        />
        <small className="mb-5">{errors?.image?.message}</small>
        <input
          {...register("title", {required : 'enter the title of the recipe'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-1"
          type="text"
          placeholder="Enter recipe title"
        />
        <small className="mb-5">{errors?.title?.message}</small>
        <textarea
          {...register("desc", {required : 'enter the description'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-1"
          placeholder="Enter the description"
        ></textarea>
        <small className="mb-5">{errors?.desc?.message}</small>
        <textarea
          {...register("inst", {required : 'enter the instruction'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-1"
          placeholder="Enter the instruction"
        ></textarea>
        <small className="mb-5">{errors?.inst?.message}</small>
        <textarea
          {...register("ingr")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-6"
          placeholder="Enter the ingredience"
        ></textarea>
        <select
          {...register("cate")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-6"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <div className="w-full flex gap-4">
          <button className="w-1/2 px-3 py-2 bg-amber-400 text-gray-900 transition duration-150 ease-in-out active:scale-97 rounded text-xl font-bold lg:text-2xl">
            Update Recipe
          </button>
          <button onClick={DeleteHandler} className="w-1/2 px-3 py-2 bg-red-800 text-amber-200 transition duration-150 ease-in-out active:scale-97 rounded text-xl font-bold lg:text-2xl">
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleRecipe;
