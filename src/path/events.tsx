import { ImagePopup } from "../Components/img_button";
import { Component } from "../Components/Navbar";

function Events() {
  return (
    <>
      <Component />

      <div className="w-full bg-eggshell lg:h-[100svh] overflow-hidden">
        <div className="pt-nav-height h-full min-h-0">
          <div className="h-full lg:min-h-0 lg:grid flex flex-col lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-5 lg:overflow-y-auto">
            {/* LEFT */}
            <div className="lg:min-h-0 flex flex-col lg:grid lg:grid-rows-[auto,1fr,auto] items-center">
              <p className="text-black text-lg text-center pt-5">
                Please join us on <span className="font-semibold">October 4th</span> for our annual fall fundraiser!
              </p>
              <div className="lg:min-h-0 flex items-center justify-center py-5 lg:py-0">
                <div className="lg:mx-auto h-full w-full px-5 md:px-15 lg:px-0 lg:w-[min(38vw,22rem)] lg:max-w-full ">
                  <img
                    className="h-full w-full rounded-2xl shadow-md object-contain"
                    src="/static/Event_1.png"
                    alt="Fall fundraiser event flyer"
                  />
                </div>
              </div>
              <div className="lg:h-12 flex items-center justify-center gap-5">
                <ImagePopup />
                <div className="h-12 flex items-center justify-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.zeffy.com/en-US/ticketing/rock-for-rescues-furever-home-dog-sanctuary-fundraiser">
                    <button className="h-10 px-5 rounded-lg bg-darkgreen text-white hover:bg-green-700">
                        Register for this Event
                    </button>
                    </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:min-h-0 flex flex-col lg:grid lg:grid-rows-[auto,1fr,auto] items-center">
              <p className="text-black text-lg lg:text-sm text-center pt-5">
                Please join us on <span className="font-semibold">October 5th</span> to learn about FHDS and hear what we've been up to! There will be games and
                activities for kids and dogs — including a <span className="font-bold">dog costume contest!!</span>
              </p>

              <div className="lg:min-h-0 flex items-center justify-center py-5 lg:py-0">
                <div className="h-full w-full lg:mx-auto px-5 md:px-15 lg:px-0 lg:w-[min(38vw,22rem)] lg:max-w-full ">
                  <img
                    className="h-full w-full rounded-2xl shadow-md object-contain"
                    src="/static/Event_2.jpg"
                    alt="Family and dog activities event flyer"
                  />
                </div>
              </div>

              <div className="h-12 flex items-center justify-center pb-5 lg:pb-0">
                <a target="_blank" rel="noopener noreferrer" href="https://lp.constantcontactpages.com/sl/vvHZknH">
                  <button className="h-10 px-5 rounded-lg bg-darkgreen text-white hover:bg-green-700">
                    Register for this Event
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
