import Footer from "./Components/Footer";
import Header from "./Navbar/Header.jsx";
import HeroImage from "./assets/2941e0cf-81a0-4e2f-99f0-0f7e8d761913.webp";
import HeroImage2 from "./assets/heroimage.webp";
import HeroImage3 from ".//assets/imgForMd.webp";


function HeroIMG() {
    return(
        <>
        <Header />
        <div className="h-[600px] w-full border-2 border-green-700">    
            <img src={HeroImage} alt="Hero Section Image" className="h-full w-full hidden lg:block "/> 
            <img src={HeroImage2} alt="IMG for smaller devices" className="h-full w-full bg-cover lg:hidden md:hidden"/>
            <img src={HeroImage3} alt="IMG for medium devices" className="h-full w-full bg-cover object-center hidden md:block lg:hidden"/>           
        </div>

        <div className="h-[60px] w-full bg-[#228B22] flex items-center justify-center">
            <p className="text-[#F5F5DC] md:text-sm lg:text-xl text-[10px] italic">" Explore Nepal's breathtaking landscapes, vibrant cultures and unforgettable adventure with us ". 
               <a href="" className="text-blue-800 border-b-2 border-b-transparent border-blue-800 hover:border-blue-800"> learn more</a>
            </p>            
        </div>

        <Footer />
        </>
    );
}

export default HeroIMG