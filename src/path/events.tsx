import Navbar from "../Components/Navbar"

function Events(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full bg-eggshell">
            <Navbar/>
            <div className={`pt-nav-height`}>
                <div className="py-10 flex flex-row w-300 gap-20">
                    <img className="w-140" src = "../static/Event_1.jpeg"/>
                    <img  className="w-140" src = "../static/Event_2.png"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Events