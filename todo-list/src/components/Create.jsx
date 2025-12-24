import { nanoid } from "nanoid";
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from '../Wrapper';


const Create = () => {
  const [todos, settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    settodos([...todos, data]);
    reset();
    toast.success('Todos created!');
  }


  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className="w-[65%] h-[90%] border p-10 flex flex-col gap-10">
      <h1 className="text-6xl">Register Pending Tasks</h1>
      <input
      {...register("title",{required: "Title can not be empty"})}
        type="text"
        placeholder="title"
        className="p-3 text-2xl border-b outline-0"
      />
      <small>{errors?.title?.message}</small>
      <button className="p-2 w-[fit-content] text-xl rounded border bg-white text-gray-800">
        Add tasks
      </button>
    </form>
  );
};

export default Create;
