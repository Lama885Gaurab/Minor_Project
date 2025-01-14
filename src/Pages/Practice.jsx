

import { useState } from "react";

const Practice = () => {

   const [isHovered, setIsHovered] = useState(false);

  return (
                                                       
    <div className='w-full'>
        <div 
        onMouseEnter={() => {
            setIsHovered();
        }}
        
        onMouseLeave={() => {
            setIsHovered();
        }}  

        className='group cursor-pointer'>
            <p className="text-lg group relative  text-center p-2 bg-gray-300">Destinations <i className="fa-solid fa-chevron-down group-hover:rotate-[-180deg] duration-500 " /></p>
            <div className='h-[5px] scale-x-0 mx-auto mt-3 mb-[2px] group-hover:scale-x-100 transition-transform duration-400 ease-linear opacity-0 group-hover:opacity-100 w-[150px] bg-green-800 '></div>
            <div className={`bg-[#228B22] relative flex items-center justify-evenly transition-all duration-400 ease-linear ${isHovered ? "h-[250px] opacity-100 " : "h-0 opacity-0"} `}>

                <ul className="h-[85%] w-[35%] flex flex-col text-[#F5F5DC] md:text-xl font-mono justify-around items-center mb-8">
                    <li className="border-b-2 border-transparent hover:border-white cursor-pointer">Pokhara</li>
                    <li className="border-b-2 border-transparent hover:border-white cursor-pointer">Everest Region</li>
                    <li className="border-b-2 border-transparent hover:border-white cursor-pointer">Lumbini</li>
                </ul>

                <ul className="h-[85%] w-[35%] flex flex-col justify-around text-[#F5F5DC] md:text-xl font-mono items-center mb-8">
                    <li className="border-b-2 border-transparent hover:border-white cursor-pointer">Kathmandu</li>
                    <li className="border-b-2 border-transparent hover:border-white cursor-pointer">Annapurna Region</li>
                    <li className="border-b-2 border-transparent hover:border-white cursor-pointer">Chitwan N.P</li>
                </ul>

                <div className="h-[15%] w-full bg-black absolute bottom-0 flex items-center justify-center">
                    <div 
                    onClick={() => {
                        setIsHovered(false);
                    }}
                    className="h-[80%] w-[30px] flex items-center justify-center rounded-sm active:border-[1px] cursor-pointer">
                    <div className="h-[1.5px] absolute w-6 border-white bg-white rotate-45"></div>
                    <div className="h-[1.5px] w-6 border-white bg-white rotate-[-45deg]"></div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Practice