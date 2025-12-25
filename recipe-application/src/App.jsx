import React from 'react'
import NavBar from "./components/NavBar"
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-800 text-white px-3'>
      <NavBar />
      <MainRoutes />
    </div>
  )
}

export default App