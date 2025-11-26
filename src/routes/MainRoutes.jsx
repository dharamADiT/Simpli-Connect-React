import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Overview from '../pages/Overview'
import LeadingBanks from '../pages/LeadingBanks'
import Login from '../pages/Login'
import Categori from '../pages/Categori'
import Help from '../pages/Help'
import FAQ from '../pages/FAQ'
import PageNotFound from '../pages/PageNotFound'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/leadingbanks' element={<LeadingBanks/>}></Route>
      <Route path='/overview' element={<Overview/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/categori' element={<Categori/>}></Route>
      <Route path='/faq' element={<FAQ/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>
  )
}

export default MainRoutes