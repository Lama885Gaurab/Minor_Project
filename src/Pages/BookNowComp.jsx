import { useState } from "react";


const BookNowComp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
    }
  return (
    <>
    <div className='w-full bg-pink-500'>
        <div>
        <div className="group">A</div>       
        <div className="hidden group-hover:block">B</div>
        <div>C</div>
        </div>
    </div>
    <div className="h-[200px] w-ful"></div>
    </>
  )
}

export default BookNowComp