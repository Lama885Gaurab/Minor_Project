import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {

const location = useLocation();   
const currentYear = new Date().getFullYear();

  return (
     <footer className='h-[500px] w-full bg-[#000000c6] border-2 border-green-900'>

        <div className='h-[42%] w-full'>
         <p className='ml-6 mt-[17px] font-bold text-[#F5F5DC]'>Contact Us :</p>
          <ol className='h-[60%] gap-4 mt-[10px] w-full flex flex-col items-center font-semibold text-sm text-pink-700'>
            <li className='h-[30%] ml-[65px]'>Email: <a href="" className='border-transparent ml-3 text-white font-thin hover:text-green-600'>info@explorenepaltreks.com</a></li>           
            <li className='h-[40%] w-[200px] flex items-center'>Follow:
                <a href="" className='h-full w-[45px] ml-3 flex items-center justify-center'><i className="fa-brands fa-facebook text-2xl text-blue-800 cursor-pointer"></i></a>
                <a href="" className='h-full w-[45px] flex items-center justify-center'><i className="fa-brands fa-square-instagram text-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white cursor-pointer "></i></a> 
                <a href="" className='h-full w-[45px] flex items-center justify-center'><i className="fa-brands fa-square-x-twitter text-2xl text-black cursor-pointer"></i></a> </li>
            <li className='h-[30%]'>WhatsApp: <a href="" className='border-transparent ml-3 text-white '>+977 987 654 321</a></li>
         </ol>       

        </div>

        <div className='h-[42%] w-full border-t-2 border-green-700'>
         <p className='ml-6 mt-4 font-bold text-[#F5F5DC]'>Quick Links :</p>
         <ul className='h-[40%] w-full flex flex-col flex-wrap items-center mt-[14px] text-blue-600'>
            <li className='h-[50%]'><a href="" className='border-b-2 border-transparent hover:border-white'>Privacy & Policy</a></li>
            <li className='h-[50%]'><a href="" className='border-b-2 border-transparent hover:border-white'>FAQ</a></li>
            <li className='h-[50%]'><a href="" className='border-b-2 border-transparent hover:border-white'>Accessibility</a></li>

            {location.pathname !== "/aboutUs" && (
            <li className='h-[50%]'><Link to ="/aboutUs" href="" className='border-b-2 border-transparent hover:border-white'>About Us</Link></li>
            )}

            <li className='h-[50%]'><a href="" className='border-b-2 border-transparent hover:border-white'>Destinations</a></li>
            <li className='h-[50%]'><a href="" className='border-b-2 border-transparent hover:border-white'>Budget Friendly</a></li>
         </ul>
        </div>

        <div className='h-[16%] w-full bg-[#228B22] flex items-center justify-center text-sm font-bold lg:text-lg'>
          <p>© {currentYear} Explore Nepal Treks. All Rights Reserved.</p>
        </div>
     </footer>
        
                 
    
  )
}

export default Footer