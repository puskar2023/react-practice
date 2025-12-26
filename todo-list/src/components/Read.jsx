import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper';

const Read = () => {
    const [todos, settodos] = useContext(todocontext);


    const updatetodos = (id) => {
        const newtodos = todos.filter(todo => {
            return todo.id != id;
        })
        settodos(newtodos);
        toast.error("Todos deleted!")
    }
    const rendertasks = todos.map(todo => {
        return <li key={todo.id} className='p-3 flex justify-between bg-black'>
            <span>{todo.title}</span>
            <button onClick={()=>updatetodos(todo.id)} className='text-red-400'>Delete</button>
        </li>
    })
  return (
    <div className='w-[100%] h-[50%] overflow-auto px-6 py-3 border flex flex-col gap-1 lg:w-[35%] h-[90%] lg:px-15 py-10 lg:gap-10'>
        <h1 className='text-4xl'>All Pending Tasks</h1>
        <ol className='flex flex-col gap-2 mt-10 lg:mt-1 '>{rendertasks}</ol>
    </div>
  )
}

export default Read