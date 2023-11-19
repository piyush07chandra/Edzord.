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
        <img className="h-14 w-38 ml-16 " src="/src/images/headerImages/legal-rumble-2-logo.png"/>
      </a>
    </div>

    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>

    <div className="flex">
        <img className="h-8 w-8 mt-2" src="/src/images/headerImages/secure-icon-png-30.png"/>
        <a className="text-xl font-normal ">Premium+</a>
      </div>

      <div className="flex ">
        <a className="text-xl font-normal -ml-4">Blogs</a>
      </div>

      <div className="flex">
        <img className="h-8 w-8 mt-2 ml-2" src="/src/images/headerImages/Asset-144.png"/>
        <a className="text-xl font-normal -ml-2">Podcast</a>
      </div>

      <div className="login-signup flex ml-48 mr-28">
        <img className=" h-12 w-12 mr-6 p-2 hover:bg-gray-600 hover:rounded-full" src="/src/images/headerImages/pngegg-1.png"/>
        <img className="h-12 w-12 mr-6 p-2 hover:bg-gray-600 hover:rounded-full" src="/src/images/headerImages/pngegg.png"/>
        <button className="mr-6 px-6 text-xl text-black font-medium rounded-xl bg-yellow-500 hover:text-white">Login</button>
        <button className="mr-6 px-4 text-xl text-black font-medium rounded-xl bg-white  hover:text-yellow-500">Sign Up</button>
    </div>
      
    </div>

  </nav>

<div className="body-section flex">
  <div className=" text-white ml-36 pt-14 ">
  <h1 className="text-6xl font-semibold mt-3">Turn Your Judiciary<br/> Dream Into Reality</h1>
  <h1 className="text-2xl font-semibold mt-1 mb-5">Revolutionize Your Prelims + Mains + Interview<br/>
Preparation in an Integrated Manner.</h1>
<p className="MDJSA text-2xl bg-white text-black font-semibold mb-8 rounded-lg py-1 ">#1 Most Downloaded Judicial Services App</p>
<div className="flex mb-16">
  <a href="#"><img className="h-10 w-22" src="/src/images/headerImages/Asset-9.png"/></a>
  <a href="#"><img className="h-10 w-22 ml-7" src="/src/images/headerImages/Asset-8.png"/></a>
</div>
  </div>
</div>

<div className="para flex text-xl text-white  bg-black py-1">
<h1>Why</h1>
  <h1 className="para underline pl-1">Edzorb Law App is </h1><img className=" w-5  items-center" src="/src/images/headerImages/2764.svg"/>
  <h1> by Over 10,000+ Users.</h1><img className="h-5 mt-1" src="/src/images/headerImages/new-star2.png"/>
  <h1 className=" underline">Read Reviews</h1>
</div>

<div className="leaf-container">
  <h1 className="flex ">
    <img  src="/src/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-6xl font-semibold -ml-24 -mr-24">The Edzorb Law Difference</b>
    <img src="/src/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div>

</>
  )
}

export default Header
