import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='left-bar h-screen w-[20%] bg-black'></div>
      <div className='right-bar h-screen w-[80%] bg-black/86'>
      <div className="nav h-15 flex items-center justify-between px-6 bg-gradient-to-r from-[#z4D2B8C] to-[#85409D]">
        <h1 className='text-2xl text-white/80'>ChatGPT</h1>
      </div>
      <div className="container"></div>
      <div className="input"></div>
      </div>
    </div>
  )
}

export default App