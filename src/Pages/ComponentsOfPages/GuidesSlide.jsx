
import Image1 from '../../assets/6c9b2765-d1c4-42af-8d2d-575dfdb505a1.webp';
import Image2 from '../../assets/Boudha.webp';
import Image3 from '../../assets/Berlin.webp';
import Image4 from '../../assets/Phewa.webp';
import Image5 from '../../assets/Lumbini.webp';


import React, { useEffect, useState } from 'react'

const GuidesSlide = () => {
   
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Image1, Image2, Image3, Image4, Image5
    ];

  useEffect(() => {
    const setTimer = setInterval( () => {
        nextImg();
    }, 7000); 
  
    return () => {
      clearInterval(setTimer);
    }
  }, [])
  
    

    const prevImg = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1 ));
    }

    const nextImg = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1 ));
    }

  return (
    <>
    <div className='h-[500px] w-[60%] transition-transform duration-500 ease-in-out'>
        <img src={images[currentIndex]} alt=""  className='h-full w-full bg-cover object-cover '/>
        

        <div className='h-[50px] w-[90%] relative bottom-[150px] left-[70px] flex items-center justify-around'>
        <button onClick={() => {
            prevImg();
        }} className='h-10 w-40 text-white bg-black'>
            Prev

        </button>


        <button onClick={() => {
            nextImg();
        }} 
        className='w-40 h-10 text-white bg-black'>
            Next
            
        </button>
        </div>
        {/* Dots navigtion */}
        <div className=' bg-pink-500 w-[400px] h-[50px] flex items-center justify-evenly '>
           {images.map((image, index) => (
            <button key={index} className={`h-10 w-10 rounded-full ${index === currentIndex ? "bg-green-800 w-9 h-9 rounded-full" : "bg-gray-400"}`} onClick={() =>{
                setCurrentIndex(index);
            }}></button>
           ))}
        </div>
    </div>

    </>

  )
}

export default GuidesSlide