
import React, { useState } from 'react';
import Image1 from '../assets/bg-image-loginpage.webp';
import Image2 from '../assets/Phewa.webp';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const submitHandler = (e) => {
  e.preventDefault();
  console.log("Email:", email);
  console.log("Password:", password)

  setEmail("");
  setPassword("");
}


  return (
    <>
      {/* This height and width are for the entire center page */}
      <div className='lg:h-[800px] w-full md:h-[900px] h-[700px]'>

        {/* background images for different sizes */}
        <img src={Image1} alt="picture for lg devices" loading='lazy' className='h-full w-full bg-center bg-cover hidden md:block' />
        <img src={Image2} alt="picture for sm devices" loading='lazy' className='h-full w-full bg-center bg-cover object-center md:hidden lg:hidden' />

        {/* the actual login div */}
        <div className=' md:h-[650px] h-[550px] w-full absolute top-[100px] lg:top-[120px] md:top-[150px] flex justify-center items-center '>
          <form onSubmit={(e) => {
            submitHandler(e);
          }} action="" className='h-full md:w-[600px] w-[90%]  bg-[#e8f1f889] rounded-2xl border-2 shadow-inner shadow-black flex flex-col items-center justify-center'>

            {/* text of the top */}
            <div className='h-[20%] w-full flex flex-col items-center justify-center'>
              <span className='font-semibold h-[40%] w-[70%] flex items-center justify-center'>Welcome back</span>
              <span className='font-serif h-[40%] w-[70%] flex text-sm md:text-lg items-center justify-center'>Please enter your details to sign in</span>
              <hr className='w-full border-2 border-black'/>
            </div>
            
            {/* Two input boxes */}
            <div className='h-[20%] w-full flex flex-col gap-4 items-center justify-center'>
              <input type="email"
              value={email}
              onChange={(e) => {
              setEmail(e.target.value);
              }}
               required placeholder='type your email adress here' className='bg-black placeholder:text-white outline-none focus:border-2 border-black focus:border-pink-700 placeholder:opacity-50 placeholder:text-sm md:pl-4 pl-2 lg:w-[80%] px-1 py-1 md:w-[60%] w-[85%] rounded-full border-2 text-[#F5F5DC] ' />

              <input type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required placeholder='type your password here' className='bg-black placeholder:text-white outline-none border-black focus:border-2 focus:border-pink-700 placeholder:opacity-50 placeholder:text-sm md:pl-4 pl-2 lg:w-[80%] px-1 py-1 md:w-[60%] w-[85%] rounded-full border-2 text-[#F5F5DC] ' />
            </div>
            
            {/* Sign in and forgot password */}
            <div className='h-[20%] w-[60%] flex flex-col items-center justify-evenly'>
              <input type="submit" value="sign in" className='border-2 h-[35px] w-[120px] rounded-full font-bold bg-blue-800 text-[#F5F5D7] hover:bg-blue-700' />
              <p className='h-[30px] w-[180px] font-thin hover:text-blue-800 text-center'>forgot password ?</p>
            </div>

            {/* continue with and logos */}
            <div className='h-[20%] w-full flex flex-col items-center justify-center'>
              <p className='h-50% w-full flex items-center justify-center gap-2'>
                <span className='border-2 w-[20%] border-black'></span>
                <span>continue with</span>
                <span className='border-2 border-black w-[20%]'></span>
              </p>

              {/* logos */}
              <div className='h-[50%] w-[70%] flex justify-evenly'>
                <article className='h-[50px] w-[50px] hover:border-2 border-blue-800 flex items-center justify-center hover:rounded-lg'> <i className="fa-brands fa-square-facebook active:text-3xl text-blue-800 text-4xl cursor-pointer"/> </article>
                <article className='h-[50px] w-[50px] hover:border-2 border-purple-800 flex items-center justify-center hover:rounded-lg'> <i className="fa-brands fa-square-instagram cursor-pointer text-4xl active:text-3xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45]"/> </article>
                <article className='h-[50px] w-[50px] hover:border-2 border-black flex items-center justify-center hover:rounded-lg'> <i className="fa-brands fa-square-x-twitter text-4xl cursor-pointer active:text-3xl"/> </article>
              </div>
            </div>

            {/* last section create account */}
            <div className='h-[20%] w-[70%] flex flex-col items-center justify-center'>
              <p className='h-[40%] w-full flex items-center justify-center'>Do not have an account ?</p>
              <p className='h-[40%] w-full hover:text-blue-800 font-thin flex items-center relative bottom-3 justify-center'>Create</p>
            </div>
          </form>
        </div>
      </div>
  
   </>
  )
}

export default Login