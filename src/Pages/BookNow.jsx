import React, { useEffect, useState, useRef } from 'react';
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

   
    <div className='h-[80px] w-full border-2 border-black'>
      <p className='h-full font-semibold text-sm md:text-xl pl-10 pt-8'>Please fill out this form before submission</p>
    </div>

     {/* Information detail */}
    <div className='h-[800px] w-full border-2 border-black flex'>
       
       <div className='h-[210px] w-full '>
      <section className='h-[100px] w-full border-2 border-black mt-2'>
        <form action="" className='h-full flex flex-col md:flex-row justify-evenly items-center '>

          <div className='h-[50%] md:w-[450px] w-full flex items-center md:justify-evenly md:gap-0 gap-3'>
          <label className='md:text-lg md:pl-0 pl-4' htmlFor="">Name : </label>
          <input type="text" placeholder='your full name' className='border-2 border-black focus:border-blue-900 pl-4 md:w-[70%] w-[75%] md:h-[35px] rounded-sm' />
          </div>

          <div className='h-[50%] md:w-[450px] w-full flex items-center md:justify-evenly justify-start md:gap-0 gap-4'>
          <label className='md:text-lg md:pl-0 pl-4' htmlFor="">Email : </label>
          <input type="email" placeholder="your e-mail" className='border-2 border-black pl-4 md:h-[35px] rounded-sm md:w-[70%] w-[75%] '/>
          </div>       
          
        </form>
      </section>

      <div className='h-[100px] w-full flex mt-2 items-center justify-center border-b'>
      <section className='h-[100px] w-[200px] group flex items-center justify-center'>
       <div className='h-full w-[150px] flex flex-col justify-end'>
          <div className='h-[55px] w-full group cursor-pointer flex flex-col items-center justify-between'>
             <p className='text-lg'>Destinations  <i className="fa-solid fa-chevron-down group-hover:rotate-[-180deg] duration-500 " /> </p>
             <div className='h-[5px] w-full bg-green-700 scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 transition-transform duration-600 ease-linear'></div>
          </div>

          {/* dropdown contents */}
          <div  className='hidden group-hover:block'>                    
          <div className='md:h-[310px] h-[220px] w-full left-0 md:top-[1157px] flex top-[854px] bg-red-300 group-hover:block absolute '>
            <section className='h-full w-full flex flex-col'>
              
              <div className='h-[80%] w-full flex font-mono md:text-xl border-t-2 text-[#F5F5DC] '>
              <div className='h-full w-[50%] bg-[#228B22] flex items-center flex-col justify-around'>
                <a className='border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in' href="">Pokhara</a>
                <a className='border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in' href="">Everest Region</a>
                <a className='border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in' href="">Lumbini</a>
              </div>   

              <div className='h-full w-[50%] bg-[#228B22] flex items-center flex-col justify-around'>
                <a className='border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in' href="">Kathmandu Valley</a>
                <a className='border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in' href="">Chitwan N.P</a>
                <a className='border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in' href="">Annapurna Region</a>
             </div>    
             </div> 
             
             {/* cross */}
             <section className=' h-[20%] bg-black flex flex-col items-center justify-center'>
              <div className='cursor-pointer h-[60%] w-[45px] rounded-sm active:border-[2px] flex items-center justify-center'>
              <div className='h-[3px] absolute w-[27px] border-2 bg-white rotate-45'></div>
              <div className='h-[3px] w-[27px] border-2 bg-white rotate-[-45deg]'></div>
              </div>
             </section>       

            </section> 

            </div> 
            </div>    
          </div>
       
         </section>
      </div>      
    </div>    
  </div>
    
      

    

   
    </>
  )
}

export default BookNow