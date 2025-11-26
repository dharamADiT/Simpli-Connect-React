import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Overview from '../pages/Overview'
import LeadingBanks from '../pages/LeadingBanks'
import Login from '../pages/Login'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/leadingbanks' element={<LeadingBanks/>}></Route>
      <Route path='/overview' element={<Overview/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default MainRoutes