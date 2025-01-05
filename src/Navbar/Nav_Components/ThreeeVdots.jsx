

import { useState, useEffect, useRef } from "react";




const ThreeeVdots = ({setIsThreeVdotsOpen}) => {

  const ThdotsRef = useRef(null);
   function handleClick (e) {
    if(ThdotsRef.current && !ThdotsRef.current.contains(e.target)) {
      setIsThreeVdotsOpen(false);
    };
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
  
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, []);
  


  return (
    <div ref={ThdotsRef} className="text-[#F5F5DC] bg-[#228b22ab] shadow-sm transition-all duration-500 ease-linear shadow-black rounded-md h-[350px] w-[200px] right-[0px] top-[60px] absolute md:hidden lg:hidden ">
    <ul className="h-[350px] w-full flex flex-col justify-evenly ">
      <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">Tours and Packages</a></li>
      <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">Destinations</a></li>
      <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href=""></a>Book Now</li>
      <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">Guides</a></li>
      <li className='h-[45px] w-full hover:bg-[#228b22e3] flex items-center justify-center border-2 border-transparent hover:border-green-800'><a href="">FAQ</a></li>
    </ul>
  </div>
  )
}

export default ThreeeVdots