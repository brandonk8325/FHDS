import { ImagePopup } from "../Components/img_button"
import {Component} from "../Components/Navbar"

function Events(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full bg-eggshell">
            <Component/>
            <div className={`pt-nav-height`}>
                <div className="py-10 flex lg:flex-row flex-col items-center justify-center md:w-300 gap-20 w-full px-5 md:px-0">
                    <div className="h-140 flex flex-col">
                        <img className="h-120" src = "/static/Event_1.png"/>
                        <div className="py-5 justify-evenly flex w-full">
                            <ImagePopup/>
                        </div>
                    </div>
                    <img  className="h-140" src = "/static/Event_2.jpg"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Events