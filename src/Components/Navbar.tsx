/*When this is real add:
Adopt
*/
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
function Navbar({page=""}) {
    const [navSize, setnavSize] = useState("h-nav-height");
    const [navColor, setNavColor] = useState("bg-darkgreen");
    useEffect(() => {
    if (page === "home") {
      setNavColor("bg-*");

    } else {
      setNavColor("bg-darkgreen");
    }
  }, [page]);
    const [imgSize, setimgSize] = useState("h-12");
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    const listenScrollEvent = () => {
        if(window.scrollY > 20){
            setNavColor(" bg-[#1C4436]/90 backdrop-blur-lg" );
        } else{
            if (page == "home"){
                setNavColor("bg-*");
            }
            else{
                setNavColor("bg-darkgreen");
            }
        }


        window.scrollY > 20 ? setnavSize("h-16") : setnavSize("h-nav-height");
        window.scrollY > 20 ? setimgSize("h-8") : setimgSize("h-12");
    };

    return (
    <>
        <nav className={`${navColor} ${navSize} z-90 items-center fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600`}>
        <div className={` h-full max-w-screen-xl flex flex-wrap items-center justify-between m-auto z-90`}>
            <Link to="/" className={`flex items-center space-x-3`}>
                <img src="/static/navbar_logo.png" className={imgSize} alt="Logo" />
            </Link>
            <div className="flex invisible md:order-2 space-x-3 md:space-x-0 ">
                <Link to="/" className={`flex items-center space-x-3`}>
                    <img src="/static/navbar_logo.png" className={imgSize} alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center" id="navbar-sticky">
                <ul className="flex items-center flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                    <li>
                        <Link to="/" className="block  px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-white">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 px-3 text-white bg-white rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-white">About</Link>
                    </li>
                    <li>
                        <Link to="/events" className="block py-2 px-3 text-white md:text-white md:p-0 md:dark:text-white">Events</Link>
                    </li>
                    <li>
                        <Link to="/donate" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-white">Donate</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </>
    )
}
export default Navbar