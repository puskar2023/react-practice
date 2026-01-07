import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'
import Home from './components/Home'
import Products from './components/Products'
import Service from './components/Service'
import About from './components/About'


const App = () => {
  return (
    <div className='min-h-screen w-full bg-black'>
      <Nav />
      <Home />
      <Products />
      <Service />
      <About />
    </div>
  )
}

export default App