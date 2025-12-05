import React from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className="max-w-screen min-h-screen bg-[#080808] text-white ">
     
      <MainRoutes/>
      <ToastContainer/>
     
    </div>
  )
}

export default App