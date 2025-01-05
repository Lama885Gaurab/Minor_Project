
import Image1 from '../assets/6c9b2765-d1c4-42af-8d2d-575dfdb505a1.webp';
import Image2 from '../assets/d0f89726-c575-407d-86cb-cbd4bfaa7c50.webp';
import Image3 from '../assets/82e3887a-1cd8-429b-8c49-e26c353d1b54.webp';
import Image4 from '../assets/ba92d38e-1234-4242-8c6b-22640272c2b8.webp';
import Image5 from '../assets/caea7a34-ad77-4f7f-a98d-91bbe04f3dc1.webp'

import Footer from '../Components/Footer.jsx';
import GuidesSlide from './ComponentsOfPages/GuidesSlide.jsx';



import React from 'react'

const GuidesNature = () => {
  return (

    <>
    
    // Hero section
    <div className='h-[650px] w-full bg-black mt-14'>
        <img src={Image1} alt="background image for hero section" className='h-full w-full bg-cover object-cover blur-[2px]' />
        <div className='h-[510px] w-full absolute top-32 flex items-center justify-center'>

            {/* info about guides */}
            <section className='h-[500px] md:w-[75%] lg:w-[55%] sm:w-[80%] w-[90%] shadow-lg shadow-black bg-[#ffffff87] rounded-xl flex flex-col justify-evenly'>
                <p className='h-[50px] shadow-sm rounded-lg shadow-black text-green-800 flex items-center justify-center font-semibold text-sm md:text-xl lg:text-2xl md:capitalize'>key features of our nature guides</p>
                <section className='h-[70%] w-full flex justify-center'>

                  {/* list items */}
                    <ul className='list-disc h-full lg:w-[80%] text-sm md:text-lg md:pl-6 pl-10 lg:pl-14 w-[330px] flex flex-col justify-evenly '>
                       <li className=''>Expertise in flora & fauna</li>
                       <li>Knowledge of eco-friendly practices</li>
                       <li>Navigation skills for your nature trails</li>
                       <li>Story telling about local natural wonders</li>
                       <li>Safety and first-aid training</li>
                       <li>Photography and observation</li>
                       <li>Animal handling</li>
                       <li>Language skills</li>
                   </ul>
               </section>
            </section>
        </div>        
    </div>

     <h1 className='text-xl h-[50px] w-full font-semibold flex items-center justify-center bg-[#000000e4] text-purple-700 relative'>Meet Our Expert Guides</h1>

     {/* guides */}
     <div className='md:h-[700px] h-[1100px] w-full flex items-center justify-center'>
      {/* box for boxes */}
      <div className='h-full w-[95%] bg-white flex flex-col items-center justify-evenly md:flex md:justify-evenly md:items-center md:flex-wrap'>

        {/* box-1 */}
        <section className='md:h-[48%] md:w-[45%] h-[23%] w-[90%] bg-[#f5f5dc90] shadow-sm shadow-black rounded flex sm:flex-row items-center justify-evenly flex-col md:flex-col '>
          <div className='md:h-[65%] md:w-[95%] sm:h-[90%] sm:w-[40%] h-[60%] w-[90%] flex items-center justify-center'>
            <div className='md:h-[95%] md:w-[50%] bg-black shadow-xl shadow-black sm:h-[90%] sm:w-[90%] rounded h-full w-[65%]'>
              <img src={Image2} alt="guuide-1" className='h-full w-full rounded object-cover bg-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer' />
            </div>
          </div>
          <div className='md:h-[20%] md:w-[80%] sm:relative sm:top-12 md:top-0 sm:h-[40%] sm:w-[50%] h-[30%] w-[80%] bg-white shadow-sm shadow-black rounded flex items-center justify-around '>
            <span>Dawa Sherpa</span>
            <p className='h-[50%] rounded w-[40%] gap-2 flex items-center justify-center active:bg-gray-200 hover:border-2 font-semibold group cursor-pointer'> <span className=' hidden sm:block'>View</span> Profile  <i className="fa-solid fa-chevron-right group-hover:text-xl"/></p>
          </div>
        </section>

        {/* box-2 */}
        <section className='md:h-[48%] md:w-[45%] h-[23%] w-[90%] bg-[#f5f5dc90] shadow-sm shadow-black rounded flex sm:flex-row items-center justify-evenly flex-col md:flex-col '>
        <div className='md:h-[65%] md:w-[95%] sm:h-[90%] sm:w-[40%] h-[60%] w-[90%] flex items-center justify-center'>
        <div className='md:h-[95%] md:w-[50%] md:bg-white shadow-xl bg-black shadow-black sm:h-[90%] sm:w-[90%] rounded h-full w-[65%] '>
          <img src={Image3} alt="guide-2" className='h-full w-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'/>
        </div>
        </div>
        <div className='md:h-[20%] md:w-[80%] sm:relative sm:top-12 md:top-0 sm:h-[40%] sm:w-[50%] h-[30%] w-[80%] bg-white shadow-sm shadow-black rounded flex items-center justify-around'>
        <span>Lakpa Sherpa</span>
        <p className='h-[50%] rounded w-[40%] gap-2 hover:border-2 flex items-center justify-center active:bg-gray-200 font-semibold group cursor-pointer'><span className='hidden sm:block'>View</span> Profile  <i className="fa-solid fa-chevron-right group-hover:text-xl"/></p>
        </div>
        </section>

        {/* box-3 */}
        <section className='md:h-[48%] md:w-[45%] h-[23%] w-[90%] bg-[#f5f5dc90] shadow-sm shadow-black rounded flex sm:flex-row items-center justify-evenly flex-col md:flex-col '>
        <div className='md:h-[65%] md:w-[95%] sm:h-[90%] sm:w-[40%]  h-[60%] w-[90%] flex items-center justify-center'>
        <div className='md:h-[95%] md:w-[50%] bg-black sm:h-[90%] shadow-xl shadow-black sm:w-[90%] rounded h-full w-[65%]'>
          <img src={Image4} alt="guide-3" className='h-full w-full object-cover bg-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer' />
        </div>
        </div>
        <div className='md:h-[20%] md:w-[80%] sm:relative sm:top-12 md:top-0 sm:h-[40%] sm:w-[50%] h-[30%] w-[80%] bg-white shadow-sm shadow-black rounded flex items-center justify-around'>
        <span>Dawa Sherpa</span>
        <p className='h-[50%] rounded w-[40%] gap-2 hover:border-2 flex items-center justify-center active:bg-gray-200 font-semibold group cursor-pointer'><span className='hidden sm:block'>View</span>  Profile  <i className="fa-solid fa-chevron-right group-hover:text-xl"/></p>
        </div>
        </section>

        {/* box-4 */}
        <section className='md:h-[48%] md:w-[45%] h-[23%] w-[90%] bg-[#f5f5dc90] shadow-sm shadow-black rounded flex sm:flex-row items-center justify-evenly flex-col md:flex-col '>
        <div className='md:h-[65%] md:w-[95%] sm:h-[90%] sm:w-[40%] h-[60%] w-[90%] flex items-center justify-center'>
        <div className='md:h-[95%] md:w-[50%] md:bg-white sm:h-[90%] shadow-xl shadow-black sm:w-[90%] rounded h-full w-[65%] bg-black'>
          <img src={Image5} alt="guide-4" className='h-full w-full object-cover bg-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer' />
        </div>
        </div>
        <div className='md:h-[20%] md:w-[80%] sm:relative sm:top-12 md:top-0 sm:h-[40%] sm:w-[50%] h-[30%] w-[80%] bg-white shadow-sm shadow-black rounded flex items-center justify-around'>
        <span>Dawa Sherpa</span>
        <p className='h-[50%] rounded w-[40%] gap-2 hover:border-2 flex items-center justify-center active:bg-gray-200 font-semibold group cursor-pointer'><span className='hidden sm:block'>View</span> Profile  <i className="fa-solid fa-chevron-right group-hover:text-xl"/></p>
        </div>
        </section>

      </div>
     </div>


     {/* slider */}
     <GuidesSlide />

     <Footer />
</>
  )
}

export default GuidesNature