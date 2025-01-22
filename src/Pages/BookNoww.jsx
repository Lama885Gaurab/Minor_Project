import React,{useState, useEffect, useRef} from 'react';
import Image0 from '../assets/c9ca263b-6953-479a-bfca-a85d225ce6af.webp';

const BookNoww = () => {
  return (
   <div className="md:mt-[80px] mt-[60px] h-[450px] bg-teal-300 w-full relative ">
    <img src={Image0} alt="bg-image" className='object-cover bg-cover h-full w-full'/>    
    <div className='h-full w-full bg-[#ffffff10] absolute top-0 flex items-center flex-col justify-evenly'>
      <p className='md:text-3xl w-full h-[50px] text-lg bg-[#f5f5dc45] flex items-center justify-center'>" plan your adventure now! "</p>
      <a href="" className='relative group bottom-8'>start booking
       <p className='h-[2px] w-[105px] absolute bg-blue-600 opacity-0 group-hover:opacity-100 transform transition-all duration-400 ease-linear scale-x-0 group-hover:scale-x-100'></p>
      </a>
      
    </div>

   </div>

  )
}

export default BookNoww