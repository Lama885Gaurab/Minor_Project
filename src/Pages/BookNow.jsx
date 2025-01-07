import React, { useEffect, useState } from 'react';
import Image from '../assets/ae90c633-3a89-426f-9dde-1962b9e238c2.webp';
import Image1 from '../assets/33b08644-d4da-4e02-a4be-d0e9ce24711b.webp';
import Image2 from '../assets/ecca77c6-0e91-4cd8-aa44-dad305648103.webp';
import Image3 from '../assets/imgForMd.webp';
import Image4 from '../assets/Phewa.webp';
import Image5 from '../assets/33b08644-d4da-4e02-a4be-d0e9ce24711b.webp';


const BookNow = () => {

  const [currentIndx, setCurrentIndx] = useState(0);
  
  const Images = [
    Image, Image1, Image2, Image3, Image4, Image5
  ];

  // useEffect(() => {
  //   const setTimer = setInterval(() => {
  //     nextImg();
  //   }, 8000)
  
  //   return () => {
  //     clearInterval(setTimer);
  //   }
  // }, []);
  

  const nextImg = () => {
   setCurrentIndx(currentIndx => (currentIndx == Images.length - 1 ? 0 : currentIndx + 1));
  };

  const prevImg = () => {
    setCurrentIndx(currentIndx => (currentIndx == 0 ? Images.length - 1 : currentIndx - 1));
  };



  return (
    <>
    <div className='md:h-[700px] h-[450px] mt-14 md:mt-20 flex items-center justify-center w-full bg-[#F5F5DC]'>

      {/* pictures will repeatedly come for sliding which are stored in an array */}
        <div className='md:h-[80%] md:w-[70%] sm:w-[75%] w-[98%] h-[80%] shadow-custom rounded-lg'>
            <img src={Images[currentIndx]} alt="slideShow" className='h-full w-full object-cover bg-cover rounded-lg' />
        </div>

        {/* used col reverse property and it contains the dots and arrow navigation of pictures */}
        <div className='h-[300px] w-[90%] sm:h-[300px] sm:w-[95%] md:h-[450px] md:w-[90%] md:top-[330px] top-[205px] sm:top-[205px] absolute flex flex-col-reverse items-center justify-between'>

          {/* dots navigation */}
          <div className='md:h-[70px] md:w-[60%] sm:w-[60%] sm:h-[45px] h-[45px] shadow-custom bg-[#F5F5DC] flex items-center justify-evenly w-[90%] rounded-lg '>
            {Images.map((image, indx) => (
              <button key={indx} className={`h-5 w-5 cursor-pointer rounded-full ${indx === currentIndx ? "bg-indigo-500" : "bg-purple-900"}`} onClick={() => {
                setCurrentIndx(indx);
              }} ></button>
            ))}
          </div>
          <div className='md:h-[50px] w-full sm:h-[50px] h-[45px] flex justify-between'>

            {/* arrow navigation */}
            <div
             onClick={() => {
              prevImg();
            }}
             className='h-full md:w-[80px] cursor-pointer sm:w-[60px] w-[50px] active:bg-red-100 bg-[#ffffff58] flex items-center justify-start rounded-lg'>
              <div className='h-0 w-0 border-t-[23px] border-t-transparent border-b-[23px] border-b-transparent border-r-[29px] border-2 border-black '></div>
            </div>


            <div
            onClick={() => {
              nextImg();
            }}
            
            className='h-full md:w-[80px] sm:w-[60px] cursor-pointer w-[50px] active:bg-red-100 bg-[#ffffff58] flex justify-end items-center rounded-lg'>
            <div className='h-0 w-0 border-t-[23px] border-t-transparent border-b-[23px] border-b-transparent border-l-[29px] border-2 border-black '></div>
            </div>
          </div>
        </div>
        {/* end of navigation */}

    </div>
    {/* end of the whole slider */}


     {/* Title */}
    <div className='md:h-[80px] h-[50px] w-full bg-[#228B22] flex items-center justify-center'>
      <p className='h-[80%] w-[90%] md:text-3xl sm:text-xl text-md font-semibold text-[#F5F5DC] flex items-center justify-center'>" Book Your Tour Now "</p>
    </div>

    {/* Information detail */}
    <div className='h-[40px] w-full border-2 border-black'></div>


    <div className='h-[900px] w-full border-2 border-black flex  '>
      <section className='h-[250px] w-[45%] bg-red-900 border-2 border-black '></section>
      <section className='h-[250px] w-[45%] bg-red-900 border-2 border-black '></section>
    </div>

    

   
    </>
  )
}

export default BookNow