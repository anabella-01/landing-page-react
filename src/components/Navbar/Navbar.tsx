import logo from "../../assets/images/logo/logo.png"
import { GrLanguage } from "react-icons/gr";
import { FaXmark,FaBars  } from "react-icons/fa6";
import { useState } from "react";


export function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); 

    };

    return(
        <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary-color fixed top-0 right-0 left-0">
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className=" flex space-x-24 items-center">
                    <a href="/" className="flex items-center space-x-3 text-primary-color text-2xl font-semibold">
                    <img src={logo} alt="image-logo" className="w-10 inline-block items-center"/><span>XYZ</span>
                    </a>
                    <ul className={`md:flex md:items-center md:space-x-12 items-center ${isOpen ? "block pt-4 space-y-2 " : "hidden"}`}>
                        <li><a href="#" className=" hover:text-heading-color">Overview</a></li>
                        <li><a href="#" className=" hover:text-heading-color">Feature</a></li>
                        <li><a href="#" className=" hover:text-heading-color">About</a></li>
                        <li><a href="#" className=" hover:text-heading-color">Pricing</a></li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center space-x-12">
                    <a href="#" className="hidden lg:flex items-center hover:text-heading-color"><GrLanguage className="mr-2"/>Language</a>
                    <a href="#" className="bg-heading-color py-2 px-4 rounded hover:text-white hover:bg-indigo-600 flex-shrink-0 transition-all duration-300">Sign in</a>
                </div>

            <div className="md:hidden sm:hidden space-y-4 px-4 pt-10 pb-5">
            <button onClick={toggleMenu} className="text-primary-color focus:outline-none">

             {isOpen ? (
                <FaXmark className="w-6 h-6 text-primary-color"/>
            ) : (
                <FaBars className="w-6 h-6 text-primary-color"/>  
            )}

          </button>
         </div>

       </div>
    </nav> 
    );
}