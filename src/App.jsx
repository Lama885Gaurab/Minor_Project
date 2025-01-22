import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Navbar/Header.jsx";
import Login from "./Pages/Login.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import HeroIMG from "./HeroIMG.jsx"
import GuidesNature from "./Pages/GuidesNature.jsx";
import BookNow from "./Pages/BookNow.jsx";
import BookingForm from "./Pages/BookingForm.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
   
    return (
   
   <Router>
      <Header />
        <Routes>
            <Route path = "/" element = {< HeroIMG/>} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/about-us" element = {<AboutUs />} />
            <Route path = "/guides" element = {<GuidesNature />} />
            <Route path = "/book-now" element = {<BookNow />} />
            <Route path = "/booking-form/:id" element = {<BookingForm />} />
      </Routes>
      <Footer />
   </Router>
   
     

    );
}

export default App;
