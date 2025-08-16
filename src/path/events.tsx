import Navbar from "../Components/Navbar"

function Events(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full bg-eggshell">
            <Navbar/>
            <div className={`pt-nav-height`}>
                <div className="py-10 flex lg:flex-row flex-col items-center justify-center md:w-300 gap-20 w-full px-5 md:px-0">
                    <img className="w-140" src = "/static/Event_1.jpeg"/>
                    <img  className="w-140" src = "/static/Event_2.png"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Events