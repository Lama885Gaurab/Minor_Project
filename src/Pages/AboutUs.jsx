




import React from 'react';
import Image1 from '../assets/17cecda5-17eb-49c6-8c70-a62aaa11c5d4.webp';
import Image2 from '../assets/746095ca-890d-49fc-b079-23d13378f075.webp';

const AboutUs = () => {
  return (
    <>
    {/* Image background */}
    <div className='h-[500px] w-full flex flex-col items-center justify-center relative top-[50px]'>
      <img src={Image1} alt="Background Image" loading='lazy' className='h-full w-full object-center bg-cover' />
      <p className='h-[50px] w-full text-green-700 bg-[#f5f5dc90]  md:text-lg text-sm font-semibold capitalize flex items-center justify-center absolute'>" Connecting adventures with unforgettable experiences in Nepal "</p>      
    </div>     
    
    <h1 className='text-xl h-[50px] w-full font-semibold mt-[50px] flex items-center justify-center text-purple-700'>About Our Team</h1>

    {/* about us texts */}
     <div className='lg:h-[800px] h-[1000px] sm:h-[750px] w-full bg-gray-300'>

      {/* first sectionn of two divs */}
      <section className='lg:h-[400px] sm:h-[380px] h-[500px] w-full sm:flex sm:items-center sm:justify-evenly md:flex md:items-center md:justify-evenly flex flex-wrap items-center justify-center'>

        {/* first div section-1 */}
        <div className='lg:h-[340px] lg:w-[450px] sm:h-[300px] sm:w-[300px] w-[90%] h-[45%] bg-[#F5F5DC] rounded-2xl shadow-sm shadow-sky-600 flex flex-col items-center justify-center'>
          <h2 className='h-[30px] w-full font-bold flex items-center justify-center'> Who Are We </h2>
          <p className='h-[80%] w-[95%] text-green-700 leading-tight font-mono'>
          Welcome to <span className='font-semibold text-black'>Tourism Nepal</span>, your trusted partner in exploring the breathtaking beauty of Nepal. With a passion for creating unforgettable travel experiences, we specialize in offering personalized tourism and trekking services that showcase Nepal's rich culture<span className='hidden md:block'>diverse landscapes, and majestic mountains.</span> 
          </p>
        </div>
        
        {/* second div section-1 */}
        <div className='lg:h-[340px] lg:w-[450px] sm:h-[300px] sm:w-[300px] w-[90%] h-[45%] shadow-sm shadow-sky-600 bg-[#F5F5DC] rounded-2xl flex flex-col items-center justify-center '>
          <h2 className='h-[30px] w-full font-bold flex items-center justify-center'>Our Mission & Vision</h2>
          <p className='h-[80%] w-[95%] text-green-700 leading-tight font-mono'>To inspire and guide travelers in discovering Nepal’s unparalleled beauty, culture, and adventure, while ensuring sustainable tourism that benefits local communities and preserves nature. To become the leading tourism and trekking provider in Nepal, known for exceptional experiences <span className='hidden lg:block'> personalized services and a commitment to cultural and environmental preservation.</span></p>
        </div>
      </section>

        {/* second section */}
      <section className='lg:h-[400px] sm:h-[380px] h-[500px] w-full sm:flex sm:items-center sm:justify-evenly md:flex md:items-center md:justify-evenly flex flex-wrap items-center justify-center'>

        {/* first div section-2 */}
        <div className='lg:h-[340px] lg:w-[450px] sm:h-[300px] sm:w-[300px] w-[90%] h-[45%] bg-[#F5F5DC] shadow-sm shadow-sky-600 rounded-2xl flex flex-col items-center justify-center '>
          <h2 className='h-[30px] w-full font-bold flex items-center justify-center'>Commitment and Sustainability</h2>
          <p className='h-[80%] w-[95%] text-green-700 leading-tight font-mono'>We are dedicated to preserving Nepal's natural beauty and culture through eco-friendly practices and community support. By employing local guides and minimizing our environmental impact, we ensure responsible tourism that benefits everyone.</p>
        </div>

        {/* second div section-2 */}
        <div className='lg:h-[340px] lg:w-[450px] sm:h-[300px] sm:w-[300px] w-[90%] bg-[#F5F5DC] flex flex-col items-center justify-center shadow-sm shadow-sky-600 h-[45%] rounded-2xl'>
          <h2 className='h-[30px] w-full font-bold flex items-center justify-center'>Meet Our Guides</h2>
          <p className='h-[80%] w-[95%] text-green-700 leading-tight font-mono'>Our local guides are experts in Nepal’s trails and culture, ensuring safe and memorable experiences for every traveler.</p>
        </div>
      </section>      
     </div>


     {/* about me */}
    <div className='h-[400px] w-[100%] bg-gray-300 flex items-center justify-center '>
      <div className='h-[100%] md:w-[50%] sm:w-[65%] w-[90%] bg-[#F5F5DC] shadow-sm shadow-sky-600 rounded-xl flex flex-col items-center justify-center'>
        <section className='lg:h-[50%] sm:w-[70%] h-[35%] md:w-[45%] flex items-center justify-center '>
          <div className='h-[95%] md:w-[90%] sm:w-[70%] w-[85%] rounded-3xl flex items-center justify-center '>
            <img src={Image2} alt="" className='h-full w-auto bg-cover object-cover rounded-2xl' />
          </div>
        </section>
        <section className='h-[50%] w-[95%]'>
          <p className='font-bold flex items-center justify-center '>The Founding Director</p>
          <p className='h-[65%] leading-tight relative top-6 font-mono text-green-700'>Our founding member is a passionate leader dedicated to showcasing Nepal's beauty through sustainable tourism, blending authentic local experiences with a commitment to preserving heritage and nature.</p>
        </section>
      </div>
     </div> 

     <div className='h-[30px] w-full bg-gray-300'></div>

          
    </>
    
  )
}

export default AboutUs