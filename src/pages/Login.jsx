import { Link, useNavigate } from 'react-router-dom'
import loginBanner from '/public/login_Banner.avif'
import logo from '/public/logo3.png'
import { FaArrowLeftLong } from "react-icons/fa6";


const Login = () => {
  const navigate = useNavigate()
  return (
      <div className="w-full relative">
 
  <img
    src={loginBanner}
    className="w-full h-screen object-cover overflow-hidden"
    alt=""
  />

  <div className="absolute inset-0 flex flex-col lg:flex-row w-full py-6 px-4 lg:px-10">

    
    <div className="w-full lg:w-1/2 flex flex-col items-start justify-between mb-6 lg:mb-0">
      <div className='flex w-full justify-between'>
        <img src={logo} onClick={()=>navigate("/")} className="w-32 cursor-pointer" alt="" />
      <Link to="/" className="flex items-center gap-2 active:gap-4 text-white font-semibold">
        <FaArrowLeftLong />
        Back to Website
      </Link></div>
      <div>
        <h3>Team out of the box</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus tenetur cum sit ea quos nesciunt temporibus accusamus fugit commodi. Ipsa modi, officia quia non eveniet repellat facere tempore. Ipsam, libero.</p>
      </div>
    </div>

   
    <div className="w-full lg:w-1/2 flex justify-end">
    
        <form className="w-full flex flex-col gap-10 max-w-md bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className='text-center text-3xl text-blue-700 '>Login</h2>
        <input
          type="email"
          placeholder="Enter username / email"
          className="w-full p-3 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="*********"
          className="w-full p-3 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:border-blue-500"
        />
        <button className='p-4 bg-blue-600  cursor-pointer hover:bg-blue-800 rounded-2xl'>Login</button>
        <p className='text-black'>Don't have Account <Link to={"/register"} className='text-blue-600 underline'>Register</Link></p>
      </form>
    </div>

  </div>
</div>
  
   

  )
}

export default Login