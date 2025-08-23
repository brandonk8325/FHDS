import { ImagePopup } from "../Components/img_button";
import { Component } from "../Components/Navbar";

function Events() {
  return (
    <>
      <Component />

      <div className="w-full bg-eggshell h-[100svh] overflow-hidden">
        <div className="pt-nav-height h-full min-h-0">
          <div className="h-full min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-5 overflow-y-auto">
            {/* LEFT */}
            <div className="min-h-0 grid grid-rows-[auto,1fr,auto] items-center">
              <p className="text-black text-lg text-center pt-5">
                Please join us on <span className="font-semibold">October 4th</span> for our annual fall fundraiser!
              </p>

              {/* Poster: same box on both sides, narrower width */}
              <div className="min-h-0 flex items-center justify-center">
                <div className="mx-auto w-[min(38vw,22rem)] max-w-full ">
                  <img
                    className="h-full w-full rounded-2xl shadow-md object-contain"
                    src="/static/Event_1.png"
                    alt="Fall fundraiser event flyer"
                  />
                </div>
              </div>

              {/* CTA: fixed height so both buttons align */}
              <div className="h-12 flex items-center justify-center gap-5">
                {/* If ImagePopup renders its own button, this still centers it */}
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
            <div className="min-h-0 grid grid-rows-[auto,1fr,auto] items-center">
              <p className="text-black text-sm text-center pt-5">
                Please join us to learn about FHDS and hear what we've been up to! There will be games and
                activities for kids and dogs — including a <span className="font-bold">dog costume contest!!</span>
              </p>

              <div className="min-h-0 flex items-center justify-center">
                <div className="mx-auto w-[min(38vw,22rem)] max-w-full ">
                  <img
                    className="h-full w-full rounded-2xl shadow-md object-contain"
                    src="/static/Event_2.jpg"
                    alt="Family and dog activities event flyer"
                  />
                </div>
              </div>

              <div className="h-12 flex items-center justify-center">
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
