import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Navbar/Header.jsx";
import Login from "./Pages/Login.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import HeroIMG from "./HeroIMG.jsx"
import GuidesNature from "./Pages/GuidesNature.jsx";


function App() {
   
    return (
   
   <Router>
    <Header />

    <Routes>
     <Route path = "/" element = {< HeroIMG/>} />
     <Route path = "/login" element = {<Login />} />
     <Route path = "/aboutUs" element = {<AboutUs />} />
     <Route path = "/guides" element = {<GuidesNature />} />
    </Routes>
   </Router>
   
     

    );
}

export default App;
