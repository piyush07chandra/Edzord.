import { useState } from "react";
import './Navbar.css'
const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="navbar">

    <div className="navbar-brand">
      <span className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </span>
      <a href="/" className="navbar-logo">
       <div>
        <img className="h-14 w-38 lg:ml-16 " src="/images/headerImages/legal-rumble-2-logo.png"/>
        </div>
        </a>
        <div className=" calllogin text-sm">
        <div>
          <img className="h-8" src="/images/headerImages/call.png"/>
          <h3>Call</h3>
          </div>
          <div>
          <img className="h-8" src="/images/headerImages/login.png"/>
          <h1>Login</h1>
          </div>
        </div>
     
    </div>

    <div className={` lg:mr-32 navbar-links ${isOpen ? 'active' : ''}`}>
 
 <div className="lg:flex ">
    <div className="flex ">
        <img className="h-8 w-8 mt-2" src="/images/headerImages/secure-icon-png-30.png"/>
        <a className=" text-lg font-normal">Premium+</a>
      </div>

      <div className="flex ">
        <a className="text-lg font-normal">Blogs</a>
      </div>

      <div className="flex">
        <img className="h-8 w-8 mt-2 " src="/images/headerImages/Asset-144.png"/>
        <a className="text-lg font-normal ">Podcast</a>
      </div>
    </div>

      <div className="login-signup flex lg:ml-40">
        <img className=" h-12 w-12 mr-1 p-2 hover:bg-gray-600 hover:rounded-full" src="/images/headerImages/pngegg-1.png"/>
        <img className="h-12 w-12 mr-1 p-2 hover:bg-gray-600 hover:rounded-full" src="/images/headerImages/pngegg.png"/>
        <button className=" login  text-md text-black font-medium rounded-xl bg-yellow-500 hover:text-white">Login</button>
        <button className=" signup  text-md text-black font-medium rounded-xl bg-white  hover:text-yellow-500">Sign Up</button>
    </div>
      
    </div>

  </nav>


</>
  )
}

export default Header
