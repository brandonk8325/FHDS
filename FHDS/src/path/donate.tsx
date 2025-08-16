import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { DarkGreen, navSpacing } from "../variables"

function Donate(){
    return(
        <>
        <div className="h-screen bg-eggshell items-center justify-center w-full flex overflow-hidden">
            <Navbar />
            <div className="pt-nav-height flex flex-col justify-evenly items-center m-0 h-full">
                <div className={`w-320 h-130 scale-100`}>
                    {/* <iframe title='Donation form powered by Zeffy' className='rounded-4xl w-full h-130 ' src='https://www.zeffy.com/embed/donation-form/00fc8371-6d16-4d76-8344-2abeb2c922de'></iframe> */}
                    <iframe title='Donation form powered by Zeffy' className=' w-full h-full rounded-4xl' src='https://www.zeffy.com/en-US/donation-form/00fc8371-6d16-4d76-8344-2abeb2c922de'></iframe>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Link to="/ways-to-donate">
                        <div className="flex flex-row gap-1">
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