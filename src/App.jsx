import React from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="max-w-screen min-h-screen bg-[#080808] text-white px-6">
     
      <MainRoutes/>
     
    </div>
  )
}

export default App