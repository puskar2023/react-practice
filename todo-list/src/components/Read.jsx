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
    <div className='w-[30%] h-[90%] border p-10 flex flex-col gap-10'>
        <h1 className='text-4xl'>All Pending Tasks</h1>
        <ol className='flex flex-col gap-2'>{rendertasks}</ol>
    </div>
  )
}

export default Read