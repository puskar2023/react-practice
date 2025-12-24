import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { listcontext } from '../Wrapper';

const Create = () => {
  const [list, setlist] = useContext(listcontext);
  const{
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }=useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid();
    setlist([...list, data]);
    reset();
  }
  return (
    <div>
      <h1 className='text-3xl'>Enter Details</h1>
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex gap-4'>
        <input {...register('name',{required: "Name should be entered"})} type="text" className='text-3xl text-white border-b outline-0'/>
        <button className='border text-xl py-2 px-3'>Submit</button>
      </form>
    </div>
  )
}

export default Create