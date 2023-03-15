
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Faq from '../pages/Faq'
import NotFound from '../pages/NotFound'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/faq' element={<Faq/>} />
    <Route path='/cars' element={<CarListing/>} />
    <Route path='/cars/:slug' element={<CarDetails/>} />
    <Route path='*' element={<NotFound/>} />
  </Routes>
}

export default Routers