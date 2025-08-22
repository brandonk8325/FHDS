import { ImagePopup } from "../Components/img_button";
import { Component } from "../Components/Navbar";

function Events() {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-eggshell">
        <Component />
        <div className="pt-nav-height w-full">
          <div className="py-5 flex flex-col lg:flex-row items-stretch justify-center gap-12 md:gap-20 max-w-6xl mx-auto px-5">
            
            {/* Left Section */}
            <div className="flex flex-col flex-1 items-center text-center">
              <p className="text-black text-lg mb-4">
                Please join us on <span className="font-semibold">October 4th</span> for our annual fall fundraiser!
              </p>
              <img
                className="h-120 w-auto rounded-2xl shadow-md object-cover"
                src="/static/Event_1.png"
                alt="Fall fundraiser event flyer"
              />
              <div className="py-5 flex justify-center w-full">
                <ImagePopup />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col flex-1 items-center text-center">
              <p className="text-black text-md mb-4">
                Please join us to learn about FHDS and hear about what we've been up to! There will be games and
                activities for kids and dogs — including a <span className="font-bold">dog costume contest!!</span>
              </p>
              <img
                className="h-120 w-auto rounded-2xl shadow-md object-cover"
                src="/static/Event_2.jpg"
                alt="Family and dog activities event flyer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
