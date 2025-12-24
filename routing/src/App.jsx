import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'


const App = () => {
  return (
    <div className='h-screen w-screen bg-gray-800 text-white py-5 px-30'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App