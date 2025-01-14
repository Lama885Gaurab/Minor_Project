import React , {useState} from 'react';

const BookNowComp = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const [name, setName] = useState("Guest");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const [payment, setPayment] = useState("");
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const [shipping, setShipping] = useState("delivery");
  const shippin = (e) => {
    setShipping(e.target.value);
    };

    const [choose, setChoose] =useState();
    const handleChoose = (e) => {
      setChoose(e.target.value);
    }

    const [color, setColor] = useState('#000000');
    const handleColorChange = (e) => {
      setColor(e.target.value);
    }
  
  return (
    <>
     <div className='h-[300px] w-[400px] flex flex-col'>
      <p className='h-[100%] flex-1 text-9xl bg-white flex items-center justify-center'>{count}</p>
      <div className='h-[150px] w-full flex items-center justify-evenly'>
        <button onClick={() =>{
          count === -10 ? setCount(0) : setCount(count - 1);
        }} className='p-2 w-28 bg-blue-500 text-white rounded-2xl'>Decrement</button>
        <button onClick={() =>{
          setCount(0);
        }} className='p-2 w-28 bg-blue-500 text-white rounded-2xl'>Reset</button>
        <button onClick={() => {
          count === 10 ? setCount(0) : setCount(count + 1);
        }} className='p-2 w-28 bg-blue-500 text-white rounded-2xl'>Increment</button>
      </div>
     </div>

     <br />
     <div className='h-[200px] w-full bg-red-300 '>
      <input value={name} onChange={handleChange}
       className='border-2 border-black' />
      <p>Name: {name}</p>
     </div>
      
      <div className=''>
        <textarea className='border-2 border-black' value={comment} onChange={handleCommentChange} placeholder='leave a comment'></textarea>
        <p>comment : {comment}</p>
      </div>

      <div>
        <select className='p-2'value={payment} onChange={handlePayment} name="" id="">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <p>payment : {payment}</p>
      </div>

      <div className='flex flex-col'>
        <label>
          <input type="radio" value="pick up" checked={shipping === "pick up"} onChange={shippin} />
          pick up
        </label>

        <label>
          <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={shippin} />
          delivery
        </label>
        <p>shipping : {shipping}</p>
      </div>

      <div className='h-[300px] w-full bg-gray-500 flex flex-col items-center justify-evenly'>
        <label htmlFor="">
          A <input type="radio" onChange={handleChoose} value="A" checked = {choose === "A"} />
        </label>

        <label htmlFor="">
          B <input type="radio" onChange={handleChoose} value="B" checked = {choose === "B"}  />
        </label>

        <label htmlFor="">
          C <input type="radio" onChange={handleChoose} value="C" checked = {choose === "C"} />
        </label>
        <p>Value : {choose}</p>
      </div> <br />

 <div className='h-[500px] border-2 border-black flex items-center justify-evenly flex-col'>
  <span className='text-4xl '>color picker</span>
  <div className='flex flex-col items-center relative justify-evenly h-[300px] w-[300px]'>
    <p className='h-[200px] w-[300px] rounded-lg flex items-center justify-center text-lg font-semibold shadow-lg shadow-black' style={{background: color}}>selected color:{color}</p>
    <label htmlFor="" className='font-bold relative top-4'>select a color: </label>
    <input className='relative top-4 h-[40px] w-[80px] placeholder:rounded-lg'  type="color" value={color} onChange={handleColorChange} />
  </div>
 </div>
     

    </>
  )}


export default BookNowComp