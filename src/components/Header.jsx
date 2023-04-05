import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div>
          

          <div className="navbar bg-base-100 container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" btn bg-red-300  btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to ="/" className={({isActive})=> isActive ? "active" : "default" }>Home</NavLink>

      <NavLink to ="/about" className={({isActive})=> (isActive ? "active" : "default")}>Books</NavLink> 

      <NavLink to ="/about" className={({isActive})=> isActive ? "active" : "default"}>About Us</NavLink> 
      </ul>
    </div>
     
    <Link to= '/' className='flex items-center space-x-2' >
        <BoltIcon className="h-6 w-6 text-blue-500" />
       <span className=" text-gray-800 tracking-wide font-bold  normal-case text-2xl">NextPage</span> 
        </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-8">
   
      
      <NavLink to ="/" className={({isActive})=> isActive ? "active" : "default" }>Home</NavLink>

      <NavLink to ="/about" className={({isActive})=> (isActive ? "active" : "default")}>Books</NavLink> 

      <NavLink to ="/about" className={({isActive})=> isActive ? "active" : "default"}>About Us</NavLink> 
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;