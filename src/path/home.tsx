import Navbar from "../Components/Navbar"
import AbtTimeline from "../Components/about_timeline"
import { Link } from "react-router-dom"
function Home(){
return(
<>
    <div className={`relative bg-[url('/static/main_bg.jpg')] bg-cover bg-center h-screen w-full
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-b before:from-[#08415c]/50 before:to-[#1c110a]/60
  before:z-0`}>
      <div className="">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar page="home" />
        </div>
        <div className="pt-60 flex flex-col items-center justify-center relative z-10">
          <div className='pt-5'>
            <h1 className="mb-4 text-4xl font-extrabold font-serif leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white z-10">Furever Home Dog Sanctuary </h1>
          </div>
          <div className='pt-5'>
            <h3 className="text-l font-serif font-bold z-50 dark:text-white">Rescuing and rehabilitating dogs to prepare them to be adopted into their furever home</h3>        
          </div>
          <div className='flex flex-row pt-15'>
            <div className='px-10'>
              <Link to="/donate">
              <button className={` inline-flex items-center justify-center mb-2 me-2 overflow-hidden text-md font-medium text-white rounded-lg  hover:text-white `}>
                  <span className={` px-20 py-5 transition-all ease-in duration-175 border-4 border-gold hover:text-lg hover:cursor-pointers rounded-lg`}>
                  Donate
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center bg-[#b7c3be] w-full">
    <h1 className=" text-black font-bold py-5 text-3xl">Upcoming Events</h1>
    <div className={`flex flex-row pb-10 gap-30`}>
        <img className="h-150" src = "/static/Event_1.jpeg"/>
        <img className="h-150" src = "/static/Event_2.png"/>
    </div>
    </div>
    <div className={`flex flex-row py-15 -z-10 items-center justify-evenly bg-[#f6eee3]`}>
      <div className=''>
        <img className="h-auto max-w-lg rounded-lg " src="/static/dog.jpg" alt="image description" />
      </div>
      <div className='flex flex-col w-150 text-black items-center'>
        <p className='text-center text-lg pt-5 pb-10'>Furever Home Dog Sanctuary (FHDS) is a non-profit organization that will provide second chances to dogs in need.  By providing elevated care, behavior modification and increased socialization and stimulation, FHDS will provide dogs who have been overlooked, the opportunity to thrive.  Whether the dogs that we support are on the path to adoption or remain with us long-term, every dog will experience what it means to be cherished and cared for, every single day.</p>
        <Link to="/about" className="">
        <button className={` inline-flex items-center justify-center mb-2 me-2 overflow-hidden text-md font-medium text-white rounded-lg hover:text-white `}>
          <span className={` px-10 py-5 transition-all ease-in duration-175 bg-[#a37521] hover:cursor-pointer hover:text-lg rounded-lg`}>
            Read More
          </span>
        </button>
        </Link>
      </div>
    </div>
    <div className={`flex flex-col pt-15 pb-15 items-center  bg-[#b7c3be]`}>
      <div className='flex flex-col items-center  text-black z-5 w-full'>
        <h3 className="text-4xl text-center font-bold ">What We're Up To</h3>
        <div className="w-180">
          <p className='pt-5 pb-0 text-lg text-center'>We are in the process of turning the property we purchased into the facility we have designed. Our General Contractor has submitted our plans to the McHenry County board to be granted construction permits.  Once we receive our permits we will be able to begin construction on our brand new, state-of-the-art 19,000 square-foot sanctuary that we estimate will be completed in the summer of 2026.</p>
        </div>
        <AbtTimeline/>
      </div>
      <div className='flex flex-row items-center justify-evenly pt-10'>
        <div className='px-10'>
          <img className=" max-w-lg rounded-lg h-80 w-180 border-2 border-black" src="/static/Old_Building.jpg" alt="image description" />
        </div>
        <div className='px-10'>
          <img className=" max-w-lg rounded-lg h-80 w-180 border-2 border-black" src="/static/new_building.png" alt="image description" />
        </div>
      </div>
    </div>
</>
)
}
export default Home