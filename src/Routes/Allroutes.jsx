import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipes from '../Pages/Recipes'
import RecipeDetails from '../Pages/RecipeDetails'
import CreateRecipe from '../Pages/CreateRecipe'
import NotFound from '../Pages/NotFound'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeDetails />} />
        <Route path='/create' element={<CreateRecipe />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Allroutes
