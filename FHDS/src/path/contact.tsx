import { Button, Textarea } from "flowbite-react";
import { EmailForm } from "../Components/email_form";
import { PhoneForm } from "../Components/phone_form";
import Navbar from "../Components/Navbar";
import { ButtonClr, DarkGreen, GoldText, navSpacing, } from "../variables";

function Contact(){
    return(
        <>
        <div className={`flex flex-col items-center justify-center  py-10 h-screen bg-[#f6eee3]`} >
            <div>
                <Navbar/>
            </div>
                <form className={`pt-nav-height flex flex-col justify-evenly text-black`}>
                    <div className={`${DarkGreen} px-15 py-8 rounded-4xl w-fit`}>
                        <h1 className="text-3xl pb-2 text-white">Contact Us</h1>
                        <div >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-white">Your Name *</legend>
                                <input type="text" className="input bg-[#f6eee3] placeholder-neutral-600 opacity-100"  placeholder="Your Name" required/>
                            </fieldset>
                        </div>
                        <div>
                            <EmailForm/>
                        </div>
                        <div>
                            <PhoneForm/>
                        </div>
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-white">Your Message *</legend>
                                <textarea id="comment" className="bg-[#f6eee3] rounded-md" placeholder="Leave a comment..." required rows={4} />
                            </fieldset>
                        </div>
                        <div className="flex items-center justify-center w-full pt-4">
                            <button type="submit" className={`border-gold border-4 px-5 rounded-md py-2 text-white`}>Submit</button>
                        </div>
                    </div>
                </form>
        </div>
        </>
    )
}
export default Contact;