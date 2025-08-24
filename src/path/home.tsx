/*https://www.theasherhouse.com/ */
import {Component} from "../Components/Navbar"
import AbtTimeline from "../Components/about_timeline"
import { Link } from "react-router-dom"
import { ImagePopup } from "../Components/img_button"
function Home(){
return(
<>
    <div className={`relative sm:bg-[url('/static/main_bg.jpg')] bg-[url('/static/vert_dog.jpeg')] bg-cover bg-center lg:h-screen h-150 w-full
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#08415c]/20 before:to-[#1c110a]/80  sm:before:from-[#08415c]/50  sm:before:to-[#1c110a]/60 before:z-0`}>
      <div className="">
        <div className="fixed top-0 left-0 w-full z-50">
          <Component page = "home"/>
        </div>
        <div className="pt-40 md:pt-60 flex flex-col items-center justify-center relative z-10 px-5 md:px-0">
          <div className='pt-5'>
            <h1 className="mb-4 font-extrabold font-serif leading-none text-center tracking-tight  text-5xl lg:text-6xl text-white z-10">Furever Home Dog Sanctuary </h1>
          </div>
          <div className='pt-3'>
            <h3 className="text-md tracking-wide font-serif font-bold z-50 text-center text-white">Rescuing and rehabilitating dogs to prepare them to be adopted into their furever home</h3>        
          </div>
          <div className='flex flex-row pt-15'>
            <div className='px-10'>
              <Link to="/donate">
              <button className={`bg-[#a37521] md:bg-gold inline-flex items-center justify-center mb-2 me-2 overflow-hidden md:text-md font-medium text-white rounded-lg  hover:text-white `}>
                  <span className={`px-15 md:px-15 py-5 md:py-3 tracking-wider transition-all ease-in duration-175 border-6 md:border-gold border-[#a37521] hover:md:text-2xl text-xl md:text-xl hover:cursor-pointers rounded-lg`}>
                  <p className=" ">Donate</p>
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center bg-[#b7c3be] w-full">
    <h3 className=" text-black font-bold pt-10 md:pb-8 text-center lg:text-4xl text-6xl font-serif">Upcoming Events</h3>
    <div className={`flex lg:flex-row pt-5 pb-10 lg:gap-30 flex-col gap-10 `}>
        <div className="h-140 flex md:flex-col flex-col">
            <img className="h-120 rounded-2xl shadow-md object-cover px-5 md:px-0" src = "/static/Event_1.png"/>
            <div className="pt-5 md:py-5 justify-evenly flex w-full">
                <ImagePopup/>
                <a target="_blank" rel="noopener noreferrer" href="https://www.zeffy.com/en-US/ticketing/rock-for-rescues-furever-home-dog-sanctuary-fundraiser">
                  <button className="h-10 px-5 rounded-lg bg-darkgreen text-white hover:bg-green-700">
                    Register for this Event
                  </button>
                </a>
            </div>
        </div>
        <div className="h-140 flex md:flex-col flex-col">
            <img className="h-120 rounded-2xl shadow-md object-cover px-5 md:px-0" src = "/static/Event_2.jpg"/>
            <div className="pt-5 md:py-5 justify-evenly flex w-full">
                <a target="_blank" rel="noopener noreferrer" href="https://lp.constantcontactpages.com/sl/vvHZknH">
                  <button className="h-10 px-5 rounded-lg bg-darkgreen text-white hover:bg-green-700">
                    Register for this Event
                  </button>
                </a>
            </div>
        </div>
    </div>
    </div>
    <div className={`flex lg:flex-row py-15 -z-10 items-center justify-evenly bg-[#f6eee3] flex-col gap-10`}>
      <div className='px-5 md:px-0'>
        <img className="md:w-2xl w-sm rounded-lg " src="/static/About_Us.jpeg" alt="image description" />
      </div>
      <div className='flex flex-col w-90 md:w-150 text-black items-center'>
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
    <div className={`flex flex-col pt-10 pb-15 items-center  bg-[#b7c3be]`}>
      <div className='flex flex-col items-center  text-black z-5 w-full'>
        <h3 className="text-4xl text-center font-bold font-serif px-5">What We're Up To</h3>
        <div className=" w-90 md:w-180">
          <p className='pt-5 pb-0 text-lg text-center'>Our General Contractor has submitted architectural and engineering plans to McHenry County for construction permit approval.  Once we obtain our construction permits, we will start the construction process to build our brand new, state-of-the-art 19,000-square-foot building, which we estimate will be completed by summer 2026.</p>
        </div>
        <div className="pt-5 w-full flex justify-center px-8 md:px-70">
          <AbtTimeline
            steps={[
              { year: "2022", text: "Became a 501(c)(3) non-profit" },
              { year: "2023", text: "Purchased 6-acres to become the future home of FHDS" },
              { year: "2024", text: "Completed architectural and engineering plans" },
              { year: "2025", text: "Selected contractor and will obtain approval for construction permits" },
            ]}
            stepWidth="10rem"
          />
        </div>
      </div>
      <div className='flex lg:flex-row items-center justify-evenly pt-10 flex-col gap-10'>
        <div className=''>
          <img className=" rounded-lg w-80 h-40 md:h-80 md:w-auto border-2 border-black" src="/static/Old_Building.jpg" alt="image description" />
        </div>
        <div className=''>
          <img className="rounded-lg w-80 h-40 md:h-80 md:w-auto border-2 border-black" src="/static/new_building.png" alt="image description" />
        </div>
      </div>
    </div>
</>
)
}
export default Home