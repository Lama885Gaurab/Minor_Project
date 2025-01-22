import React from 'react';
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
 const navigate = useNavigate();
 const handlePrev = () => {
  navigate(-1);
 }

  return (
    <div className='md:mt-[80px] mt-[65px] px-4 h-[40px] bg-gray-300 w-full flex items-center fixed'>
      <button onClick={handlePrev} className='h-[35px] w-[35px] hover:bg-gray-400 border-[1px] border-black rounded-full'><i className="fa-solid fa-arrow-left" /> </button>
    </div>
  )
}

export default BookingForm