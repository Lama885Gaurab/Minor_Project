import React from 'react';
import Image from '../assets/ae90c633-3a89-426f-9dde-1962b9e238c2.webp';


const BookNow = () => {
  return (
    <>
    <div className='md:h-[700px] h-[450px] mt-14 md:mt-20 flex items-center justify-center w-full border-2 border-black '>

      {/* pictures will repeatedly come for sliding which are stored in an array */}
        <div className='md:h-[80%] md:w-[70%] sm:w-[75%] border-2 border-black w-[98%] h-[80%] '>
            <img src="" alt="slideShow" className='h-full w-full object-cover bg-cover' />
        </div>

        {/* used col reverse property and it contains the dots and arrow navigation of pictures */}
        <div className='h-[300px] w-[90%] sm:h-[300px] sm:w-[95%] md:h-[450px] md:w-[90%] md:top-[330px] top-[205px] sm:top-[205px] border-2 border-black absolute flex flex-col-reverse items-center justify-between'>

          {/* dots navigation */}
          <div className='md:h-[70px] md:w-[60%] sm:w-[60%] bg-red-300 sm:h-[45px] h-[45px] w-[90%] border-2 border-black '></div>
          <div className='md:h-[50px] w-full sm:h-[50px] h-[45px] border-2 border-black flex justify-between'>

            {/* arrow navigation */}
            <div className='h-full md:w-[80px] sm:w-[60px] w-[50px] bg-pink-500 flex items-center justify-start rounded-lg'>
              <div className='h-0 w-0 border-t-[23px] border-t-transparent border-b-[23px] border-b-transparent border-r-[29px] border-2 border-black '></div>
            </div>
            <div className='h-full md:w-[80px] sm:w-[60px] w-[50px] bg-pink-500 flex justify-end items-center rounded-lg'>
            <div className='h-0 w-0 border-t-[23px] border-t-transparent border-b-[23px] border-b-transparent border-l-[29px] border-2 border-black '></div>
            </div>
          </div>
        </div>
        {/* end of navigation */}

    </div>
    {/* end of the whole slider */}

    <div className='h-[200px]'></div>

    

   
    </>
  )
}

export default BookNow