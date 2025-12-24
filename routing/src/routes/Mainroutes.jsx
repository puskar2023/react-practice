import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import Service from '../components/Service'
import About from '../components/About'
import Create from '../components/Create'
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/details/:name' element={<ProductDetails />} />
        <Route path='/service' element={<Service />} >
        <Route path='/service/details' element={<ServiceDetails />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default Router