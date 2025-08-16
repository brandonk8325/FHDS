/*
TO-ADD WHEN SANCTUARY IS UP AND RUNNING:
Volunteer options
Upcoming events? - Do we want this now?
Adoption options

https://www.animalhouseshelter.com/
https://www.sarasanctuary.org/
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './Components/Footer';
import Home from './path/home';
import About from "./path/about";
import Events from "./path/events";
import Donate from "./path/donate";
import Contact from "./path/contact";
import ScrollToTop from "./Components/scroll_to_top";
import WaysToDonate from "./path/ways_to_donate";

function App() {
  return(
    <>
    <Router>
      <ScrollToTop/>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/events" element={<Events />} />
             <Route path="/donate" element={<Donate />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/ways-to-donate" element={<WaysToDonate/>}/>
         </Routes>
     </Router>
     <Footer/>
    </>
  )
}
export default App;