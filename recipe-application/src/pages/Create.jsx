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
    <div className="w-full px-3 flex justify-center items-center lg:px-20">
      <form
      onSubmit={handleSubmit(SubmitHandler)} className=" w-[100%] flex flex-col text-xl pb-3 lg:w-[50%]">
        <input
          {...register("image", {required : 'enter the image url'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-2"
          type="url"
          placeholder="Enter image URL"
        />
        <small className="mb-5">{errors?.image?.message}</small>
        <input
          {...register("title", {required : 'enter the title of the recipe'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-2"
          type="text"
          placeholder="Enter recipe title"
        />
        <small className="mb-5">{errors?.title?.message}</small>
        <textarea
          {...register("desc", {required : 'enter the description'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-2"
          placeholder="Enter the description"
        ></textarea>
        <small className="mb-5">{errors?.desc?.message}</small>
        <textarea
          {...register("inst", {required : 'enter the instruction'})}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-2"
          placeholder="Enter the instruction"
        ></textarea>
        <small className="mb-5">{errors?.inst?.message}</small>
        <textarea
          {...register("ingr")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-7"
          placeholder="Enter the ingredience"
        ></textarea>
        <select
          {...register("cate")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded mb-7"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className="px-3 py-2 bg-amber-400 text-gray-900 active:scale-97 rounded text-2xl font-bold">Create Recipe</button>
      </form>
    </div>
  );
};

export default Create;
