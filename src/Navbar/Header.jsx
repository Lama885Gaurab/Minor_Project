
import { useRef, useState, useEffect } from "react";
import ImageLogo from "../assets/NavLogo.webp";
import Hamburger from "./Nav_Components/Hamburger";
import ThreeeVdots from "./Nav_Components/ThreeeVdots";
import { Link, useLocation } from "react-router-dom";


 function Header() {

    // toggling the hamburger icon
 const [isHamburger, setIsHamburger] = useState(false);
 const toggleHamburger = (e) => {
    e.preventDefault(); 
    setIsHamburger(prevState => !prevState);
  };
    
    // toggling the 3 dots icon
    const [isThreeVdotsOpen, setIsThreeVdotsOpen] = useState(false);
    const toggleThreeVdots = (e) => {
        e.preventDefault();
        setIsThreeVdotsOpen((prevState) => !prevState);
    };

    // using the location for navigating and for other purposes
    const location = useLocation();

    // changing the color of the certain div of the particular element
    const logIn = {
        "/login" : "bg-green-800"
    }[location.pathname];

    const aboutUs = {
        "/aboutUs" : "bg-green-800"
    }[location.pathname];

    // on clicking outside the dropdown box it makes it disappear
       const hamburgerRef = useRef(null);  //initializing the dropdownRef as null

       useEffect(() => {
        const clickOutside = (e) => {
            if(hamburgerRef.current && hamburgerRef.current.contains(e.target)) {  //this line is for checking if the clicked element is outside of the refrenced element
              setIsHamburger(false);
            };
        };
       

     //adding event listener to detect the click
     document.addEventListener("mousedown", clickOutside);

     return () => {
     document.removeEventListener("mousedown", clickOutside);
     }
    }, []);




    return(
    
        <header>
            <nav className="h-[60px] z-10 md:h-[80px] lg:[80px] w-full bg-[#228B22] text-[#F5F5DC] fixed top-0">
               
                <ul className="h-full flex justify-around items-center">
                    
               {/* Nav-logo */}
                    <Link to = "/" >
                        <li className="h-[50px] w-[50px] md:h-[65px] md:w-[65px] border-2 rounded-full ">                    
                            <img src = {ImageLogo} alt="" className="h-full w-full bg-cover object-cover rounded-full"/>                        
                        </li>
                    </Link>


                    {/* Home */}
                    <li className="border-b-2 border-transparent hover:border-b-white"><Link to ="/"><i className="fa-solid fa-house"/> Home</Link></li>                    

                    {/* Destinations */}
                    <li className="hidden md:block group border-b-2 border-transparent transition-all ease-linear duration-500 hover:border-white"> <a href="#">Destinations <i className="fa-solid fa-angle-down group-hover:rotate-180 duration-500"></i></a>
                        <div className="h-[335px] w-[200px] hidden group-hover:block absolute top-[46px] "> 
                           <div className={`${logIn} ${aboutUs} h-[300px] w-[200px] shadow-sm shadow-black bg-[#228b22ab] rounded-lg absolute top-[35px]`}>
                                <ul className="h-[300px] w-[200px] flex flex-col justify-evenly">
                                    <li className="h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className="pl-10 ">Pokhara</a></li>
                                    <li className="h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className="pl-10">Everest Region</a></li>
                                    <li className="h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className="pl-10 ">Lumbini</a></li>
                                    <li className="h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className="pl-10 ">Kathmandu Valley</a></li>
                                    <li className="h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className="pl-10 ">Chitwan N.P</a></li>
                                    <li className="h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className="pl-10 ">Annapurna Region</a></li>
                                </ul>
                           </div>
                        </div>
                    </li>
                    {/* End Destinations */}


                    {/* Tours and Packages */}
                    <li className="hidden md:block border-b-2 border-transparent transition-all duration-500 ease-linear hover:border-white group"> <a href="#">Tours and Packages <i className="fa-solid fa-angle-down group-hover:rotate-180 duration-500"></i></a> 
                       <div className="h-[335px] w-[200px] absolute top-[45px] hidden group-hover:block">
                           <ul className={` ${logIn} ${aboutUs} h-[300px] w-[200px] bg-[#228b22ab] mt-[36px] flex flex-col justify-evenly rounded-md shadow-sm shadow-black`}>
                                <li className=" h-[50px] w-full hover:bg-[#000] hover:font-bold transition-all flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className=" pl-8">Trekking Tours</a></li>
                                <li className=" h-[50px] w-full hover:bg-[#000] hover:font-bold transition-all flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className=" pl-8">Cultural Tours</a></li>
                                <li className=" h-[50px] w-full hover:bg-[#000] hover:font-bold transition-all flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className=" pl-8">Wildlife Tours</a></li>
                                <li className=" h-[50px] w-full hover:bg-[#000] hover:font-bold transition-all flex items-center border-2 border-transparent hover:border-white rounded-md"><a href=""className=" pl-8">Luxury Tours</a></li>
                                <li className=" h-[50px] w-full hover:bg-[#000] hover:font-bold transition-all flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="" className=" pl-8">Family Tours</a></li>
                            </ul>
                       </div>                             
                    </li>                       
                    
                    {/* End Tours and Packages */}


                    {/* Guides */}
                    <li className="hidden lg:block group border-b-2 border-transparent transition-all duration-500 ease-linear hover:border-white"> <a href="#"> Guides <i className="fa-solid fa-angle-down group-hover:rotate-180 duration-500"></i></a> 
                        <div className="h-[335px] w-[150px] absolute top-[46px] hidden group-hover:block">
                            <ul className={ `${logIn} ${aboutUs} h-[300px] w-[150px] mt-[35px] bg-[#228b22ab] shadow-sm shadow-black rounded-sm flex flex-col justify-evenly`}>

                                {location.pathname !== "/guides" && (
                                <li className=" h-[45px] w-full hover:bg-[#228b22e3] flex items-center border-2 border-transparent hover:border-green-800"><Link to= "/guides" className="pl-2">Nature</Link></li>
                                )}
                                <li className=" h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="#" className="pl-2">Cultural</a></li>
                                <li className=" h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="#" className="pl-2">Trekking</a></li>
                                <li className=" h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="#" className="pl-2">Adventure</a></li>
                                <li className=" h-[45px] w-full hover:bg-[#000] hover:font-bold transition-all duration-500 ease-in-out flex items-center border-2 border-transparent hover:border-white rounded-md"><a href="#" className="pl-2">History</a></li>
                            </ul>
                        </div>
                    </li>
                    {/* End Guides */}


                    {/* Book Now */}
                    {location.pathname !== "/bookNow" && (
                    <li className="hidden lg:block  border-b-2 border-transparent transition-all duration-900 ease-in-out hover:border-b-white"> <Link to="bookNow"><li className="fa-regular fa-calendar-check"/> Book Now</Link> </li> 
                    )}           


                    {/* About Us */}
                    {location.pathname !== "/aboutUs" && (
                    <li className="lg:block md:hidden border-b-2 border-transparent transition-all duration-900 ease-in-out hover:border-b-white"> <Link to = "/aboutUs"> About Us</Link> </li>                   
                    )}

                    {/* Login for larger devices */}
                    {location.pathname !== "/login" && (
                    <li className="hidden lg:block border-2 bg-white text-green-700 border-green-900 px-2 py-1 rounded-2xl font-semibold hover:bg-green-100 active:text-black cursor-pointer"><Link to ="/login">Login</Link></li>
                    )}


                    {/* Login for md and sm */}
                    {location.pathname !== "/login" && (
                    <li className="lg:hidden border-b-2 border-transparent transition-all duration-600 ease-in-out hover:border-b-white"> <Link to = "/login"><i className="fa-solid fa-user" /> Login</Link></li>
                    )}

                    
                    {/* Hamburger Menu that appears in md */}
                    <li onClick = {(e) => toggleHamburger(e)} className="hidden md:block lg:hidden">                                 
                      <a href="" className="hover:text-green-100" > <i className="fa-solid fa-bars"></i></a> 
                      {isHamburger && <Hamburger

                    //   passing the state / we can also pass the state to another file
                    
                      setIsHamburger = {setIsHamburger}
                      />}
                                                         
                    </li>
                    
                    {/* Vertical three dots that appear in sm */}
                    <li onClick={(e) => toggleThreeVdots(e)} className="md:hidden h-[30px] w-[30px] flex items-center justify-center"><a href="" className="hover:text-green-100"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                    {isThreeVdotsOpen && <ThreeeVdots 
                    setIsThreeVdotsOpen ={setIsThreeVdotsOpen}
                    />}
                    </li>

                </ul>
                
            </nav>            
        </header>
        
    );
 }

 export default Header