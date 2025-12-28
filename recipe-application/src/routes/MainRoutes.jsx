import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import Favourite from '../pages/Favourite'
import PageNotFound from '../pages/PageNotFound'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/recipes/details/:id' element={<SingleRecipe />} />
      <Route path='/favourite' element={<Favourite />} />
      <Route path='/create-recipe' element={<Create />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes