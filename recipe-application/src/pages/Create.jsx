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
    setdata([...data, recipe]);
    reset();
    toast.success("Recipe successfully created!")
    navigate("/recipes");
  }

  return (
    <div className="w-full px-20 flex justify-center items-center">
      <form
      onSubmit={handleSubmit(SubmitHandler)} className=" w-[60%] flex flex-col gap-7 text-xl">
        <input
          {...register("image")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded"
          type="url"
          placeholder="Enter image URL"
        />
        <input
          {...register("title")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded"
          type="text"
          placeholder="Enter recipe title"
        />
        <textarea
          {...register("desc")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded"
          placeholder="Enter the description"
        ></textarea>
        <textarea
          {...register("inst")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded"
          placeholder="Enter the instruction"
        ></textarea>
        <textarea
          {...register("ingr")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded"
          placeholder="Enter the ingredience"
        ></textarea>
        <select
          {...register("cate")}
          className="bg-gray-900 px-3 py-2 outline-0 border rounded"
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
