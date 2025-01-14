import React, {useState} from 'react';


const ColorPicker = () => {
  
    const [color,setColor] =useState('#000000');
const handleChange = (e) => {
    setColor(e.target.value);
}

const [isOn, setIsOn] =useState(true);

 const toggleBtn = () => {
  setIsOn(!isOn);
 }

  return (
    <>
    <div className='h-screen w-screen flex flex-col items-center justify-evenly'>



      
      <div onClick={toggleBtn} className={` ${isOn ? "h-[30px] w-[60px] rounded-full border-2 flex items-center border-gray-700` justify-start bg-gray-700" : "h-[30px] w-[60px] rounded-full border-2 border-gray-500 flex items-center justify-end"}`}>
        <div className={`${isOn ? "h-[28px] w-[28px] bg-black rounded-full border-2 cursor-pointer" : "h-[28px] w-[28px] bg-black rounded-full border-2 cursor-pointer"}`}></div>
      </div>
      <div className={`h-[30px] w-[60px] rounded-full text-xl border-gray-400 border-2 items-center flex justify-center font-semibold`}>
        {isOn ? "on" : "off"}
      </div>


        <div className='h-[50%] w-[50%] rounded-2xl'style={{background: color, boxShadow: `4px 3px 5px ${color}`}}></div>
        <p className='font-semibold text-4xl'>Pick the color</p>
        <label className='h-[40px] w-[330px] flex items-center justify-evenly' htmlFor="">Selected color:<input className='h-full w-[100px] rounded-xl' type="color" onChange={handleChange} /> </label>
        <p>Color: {color}</p>
        </div>
    </>
  )
}

export default ColorPicker