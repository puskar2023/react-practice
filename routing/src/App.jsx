import React from 'react'
import { UserPlus, MessageCircleDashed } from 'lucide-react';
const App = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='left-bar h-screen w-[20%] bg-black'></div>
      <div className='right-bar h-screen w-[80%] bg-black/86'>
      <div className="nav h-15 flex items-center justify-between px-6 bg-gradient-to-r from-[#z4D2B8C] to-[#85409D]">
        <h1 className='text-2xl text-white/80'>ChatGPT</h1>
        <div className='flex items-center gap-10 text-white px-7'>
          <UserPlus className='text-xl' />
          <MessageCircleDashed className='text-xl'/>
        </div>
      </div>
      <div className="container"></div>
      <div className=" w-[70%] bg-gray-600/60">
        <input type="text" placeholder='Ask anything'/>
      </div>
      </div>
    </div>
  )
}

export default App