

import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';


const Hamburger = ( {setIsHamburger} ) => {

  
   // on clicking outside the dropdown box it makes it disappear
   const hamburgerRef = useRef(null);  //initializing the dropdownRef as null
   function clickOutside(e){
    if(hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {  //this line is for checking if the clicked element is outside of the refrenced element
      setIsHamburger(false);
    };
};

 useEffect(() => {
   

 //adding event listener to detect the click
 document.addEventListener("mousedown", clickOutside);

 return () => {
 document.removeEventListener("mousedown", clickOutside);
 }
}, []);

const location = useLocation();
  const bgColor = {
    "/login" : "bg-[#006400]"
  } [location.pathname];

  return (
    
    
    <div ref={hamburgerRef} className={` ${bgColor} text-[#F5F5DC] bg-[#228b22ab] shadow-black rounded-md h-[350px] w-[200px] top-[80px] right-0 absolute hidden md:block lg:hidden shadow-sm transition-all duration-500`}>
         
      <ul className="h-[350px] w-full flex flex-col justify-evenly ">
        <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">Book Now</a></li>
        <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">Guides</a></li>
        <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><Link to = "/aboutUs">About Us</Link></li>
        <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">FAQ</a></li>
      </ul>
    </div>
    
    
  );
}

export default Hamburger