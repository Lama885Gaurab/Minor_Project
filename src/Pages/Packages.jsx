import React,{ useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import EverestImage from '../assets/a9b79e6f-d7ab-48ee-827e-bbd8474a5fb6.webp';
import AnnapurnaBaseCamp from '../assets/f38b4b85-8d6a-41f9-9cd8-4dd013a43aff.webp';
import ChitwanNp from '../assets/8c42fdc2-fa78-4f89-bebc-a3a5aba6b8ee.webp';
import PokharaVley from '../assets/Phewa.webp';
import KathmanduVley from '../assets/1bde7ef6-532a-46c3-a01b-1187592faaab.webp';    
   
   
    const Packages = () => {  

    const navigate = useNavigate();    
    const navigateToBookingForm = (id) => {
        navigate(`/booking-form/${id}`);
    };

    const tourPackages = [
        {
            id: 1, 
            name: "Everest Base Camp",
            image: EverestImage,
            price: "Rs20,000",
            description: "Everest",
        },
        {
            id: 2, 
            name: "Annapurna Base Camp",
            image: AnnapurnaBaseCamp,
            price: "Rs18,000",
            description: "Annapurna Base Camp",
        },
        {
            id: 3, 
            name: "Chitwan National Park",
            image: ChitwanNp,
            price: "Rs30,000",
            description: "Chitwan National Park",
        },
        {
            id: 4, 
            name: "Pokhara Valley",
            image: PokharaVley,
            price: "Rs100,000",
            description: "Pokhara",
        },
        {
            id: 5, 
            name: "Kathmandu Valley",
            image: KathmanduVley,
            price: "Rs200,000",
            description: "Kathmandu Valley",
        },
    ];

        

  return (
    <>
    {/* book your tour now  */}
   <div className='md:h-[60px] sm:h-[50px] h-[40px] bg-gray-700 flex items-center justify-center'>
    <p className='text-white md:text-2xl sm:text-xl text-lg font-semibold'> Select Package </p>
   </div>

    {/* packages */}
   <div className='h-[400px] bg-red-200 w-full flex items-center justify-evenly gap-4 overflow-x-auto px-4'>
    {
        tourPackages.map((pkg) => (
            <div key={pkg.id} className={`h-[90%] p-4 md:w-[350px] sm:w-[300px] group w-[280px] bg-white flex-shrink-0 rounded-md flex flex-col items-center justify-evenly`}>
                {/* IMAGES */}
                <div className='h-[65%] w-[85%] flex flex-col items-center justify-evenly'>
                 <img src={pkg.image} alt={pkg.name} className='h-full w-full object-cover bg-cover hover:opacity-90 transfrom transition-transform group-hover:scale-[1.03] ease-linear duration-300 cursor-pointer rounded-md '/>
                </div>
                    <p className='md:text-lg font-bold'>{pkg.description}</p>
                <div className='h-[10%] w-full flex items-center justify-around'>
                        <span className='font-mono'>{pkg.price}</span>
                        <button onClick={() => { navigateToBookingForm(pkg.id); }} className='h-[30px] w-[80px] bg-teal-500 px-2 py-1 rounded-sm hover:opacity-80 font-semibold focus:outline-none'> Select </button>
                </div>
                
            </div>
        ))
    }
   </div>

   </>

  )}


export default Packages