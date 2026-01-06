import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {recipecontext} from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {

  const [data, setdata] = useContext(recipecontext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data, recipe];
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    reset();
    toast.success("Recipe successfully created!")
    navigate("/recipes");
  }

  return (
    <div className="w-full min-h-screen pt-15 lg:pt-25 px-6 pb-3 bg-[url('https://images.unsplash.com/photo-1623129090933-f818be5272e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex justify-center items-center lg:px-20">
      <form
      onSubmit={handleSubmit(SubmitHandler)} className=" w-[100%] flex flex-col text-xl pb-3 lg:w-[60%] bg-black/50 px-6 lg:px-15 py-6">
        <input
          {...register("image", {required : 'enter the image url'})}
          className="bg-black/70 border-b border-orange-400 px-3 py-2 outline-0 rounded mb-2"
          type="url"
          placeholder="Enter image URL"
        />
        <small className="mb-5">{errors?.image?.message}</small>
        <input
          {...register("title", {required : 'enter the title of the recipe'})}
          className="bg-black/70 border-b border-orange-400 px-3 py-2 outline-0 rounded mb-2"
          type="text"
          placeholder="Enter recipe title"
        />
        <small className="mb-5">{errors?.title?.message}</small>
        <textarea
          {...register("desc", {required : 'enter the description'})}
          className="bg-black/70 border-b border-orange-400 px-3 py-2 outline-0 rounded mb-2"
          placeholder="Enter the description"
        ></textarea>
        <small className="mb-5">{errors?.desc?.message}</small>
        <textarea
          {...register("inst", {required : 'enter the instruction'})}
          className="bg-black/70 border-b border-orange-400 px-3 py-2 outline-0 rounded mb-2"
          placeholder="Enter the instruction"
        ></textarea>
        <small className="mb-5">{errors?.inst?.message}</small>
        <textarea
          {...register("ingr")}
          className="bg-black/70 border-b border-orange-400 px-3 py-2 outline-0 rounded mb-7"
          placeholder="Enter the ingredience"
        ></textarea>
        <select
          {...register("cate")}
          className="bg-black/70 border-b border-orange-400 px-3 py-2 outline-0 rounded mb-7"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className="px-3 py-2 bg-black/30 border-3 border-orange-400 text-orange-400 active:scale-97 hover:bg-gray-400/20 rounded-full text-2xl font-bold">Create Recipe</button>
      </form>
    </div>
  );
};

export default Create;
