import { Link } from "react-router-dom"
import {Component} from "../Components/Navbar"

function Donate(){
    return(
        <>
        <div className="lg:h-screen bg-eggshell items-center justify-center w-full flex overflow-hidden">
            <Component />
            <div className="pt-nav-height flex flex-col justify-evenly items-center m-0 lg:h-full md:h-300 h-280">
                <div className={`lg:w-320 lg:h-130  md:w-180 md:h-190 w-90 h-215 `}>
                    {/* <iframe title='Donation form powered by Zeffy' className='rounded-4xl w-full h-130 ' src='https://www.zeffy.com/embed/donation-form/00fc8371-6d16-4d76-8344-2abeb2c922de'></iframe> */}
                    <iframe title='Donation form powered by Zeffy' className=' w-full h-full rounded-4xl' src='https://www.zeffy.com/en-US/donation-form/00fc8371-6d16-4d76-8344-2abeb2c922de'></iframe>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Link to="/ways-to-donate">
                        <div className="flex flex-row gap-1 md:text-xl lg:text-sm px-5 md:px-0">
                            <p className="text-black font-serif" >Click </p><p className="text-blue-800 font-serif underline">here</p><p className="text-black font-serif"> to learn more about other ways to donate</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Donate