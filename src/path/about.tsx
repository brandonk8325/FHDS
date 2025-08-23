import AbtTimeline from "../Components/about_timeline";
import { CardsGrid } from "../Components/card_grid";
import { ComTable } from "../Components/committee_table"
import {Component} from "../Components/Navbar"
import { useState, useEffect } from "react";


function About(){

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // run once on mount and whenever screen is resized
    const check = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

    return(
    <>
        <div className=" flex flex-col items-center justify-center bg-[#f6eee3] pb-5">
            <div className="lg:h-screen md:p-10 items-center justify-center w-full bg-[#b7c3be]">
                <Component/>
                <div className="pt-nav-height justify-evenly items-center flex lg:flex-row w-full h-full md:gap-20 flex-col-reverse">
                <div className='px-5 py-10 md:px-0 md:py-0'>
                    <img className=" w-full md:w-150 rounded-lg " src="/static/About_Us.jpg" alt="image description" />
                </div>
                <div className='w-full md:w-150 '>
                    <h3 className="text-3xl text-center font-bold text-black pb-10 pt-10 md:pt-10">About Us</h3>
                    <p className='text-center text-black px-5 md:px-0'>Furever Home Dog Sanctuary (FHDS) is one of the few dog sanctuaries in the Midwest.  A sanctuary differs from shelters or other rescues because it is designed to accommodate dogs for long periods of time.  We have behaviorists and trainers that will help provide the dogs with skills that will increase their chances of recieving adopted.  Until they are adopted, our dogs will have more space, more stimulation, and more socialization than they will ever receive in their lives.  We will work with each dog's individual needs in order to ensure that they are thriving and living a beautiful life. </p>
                </div>
                </div>
            </div>
            <div className='flex lg:flex-row pb-10 md:py-10 items-center justify-evenly w-full bg-[#f6eee3] md:p-10 md:gap-20 flex-col'>
                <div className='w-full md:w-150 items-center justify-between'>
                    <h3 className="text-3xl text-center font-bold py-10 text-black">Our Story</h3>
                    <p className='text-center text-black px-5 md:px-0'> In 2022, we formed a nonprofit called Furever Home Dog Sanctuary with a goal of creating a place where hope could finally flourish for dogs who need it most. Our mission is to rescue and rehabilitate dogs to improve their quality of life by preparing them to be adopted into their furever home. After searching for land for over a year, we now have 6 acres in Richmond, Illinois. We will be working with dogs who have been in shelters for extremely long periods or have found themselves on an euthanasia list. While in our care, whether it's months or the rest of their lives, dogs will have more space, increased time for socialization with people and other dogs, time dedicated to work with trainers/behaviorists, and 6 acres of land to enjoy exploring.<br/><br/> - David and Erin Kerpel</p>
                    <div className="-translate-y-3 pt-5 md:pt-10 px-5 md:px-5">
                        <AbtTimeline steps={[
                            { year: "2022", text: ["Became a ",<br className="hidden md:block"/>, "501(c)(3) ", <br className="hidden md:block"/>, "non-profit"] },
                            { year: "2023", text: "Purchased 6-acres to become future home of FHDS" },
                            { year: "2024", text: "Completed architectural and engineering plans" },
                            { year: "2025", text: "Selected contractor and will obtain approval for permits." },
                        ]}/>
                    </div>
                </div>
                <div className='px-5 md:px-0'>
                    <img className="w-full md:w-130 rounded-2xl" src="/static/Our_Story.jpeg" alt="image description" />
                </div>
            </div>
            <div className="flex flex-row py-20 items-center justify-evenly w-full bg-[#b7c3be] px-5 md:px-0 ">
                <iframe width="560" height="315" className="rounded-2xl md:rounded-none" src="https://www.youtube.com/embed/9elqncC6oNs?si=urixhp-Bi_5z1wnd" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <hr className="border-1 w-full border-black"></hr>
            <h1 className={`text-black text-6xl font-serif font-bold py-10`}>Our Team</h1>
            <h1 className="text-black text-3xl font-bold">Board Members</h1>
            <div className="w-full px-5 md:px-0">
                <CardsGrid cards={
                [{ name: "David Kerpel", image: "/static/David_Kerpel.jpeg", company: "Law Offices of David S. Kerpel", descriptor: "President" },
                { name: "Erin Kerpel", image: "/static/Erin_Kerpel.jpeg", company: "Gratitude Generation", descriptor: "Vice-President" },
                { name: "Ryan Geudel", image: "/static/Ryan_Geudel.jpg", company: "CJBS", descriptor: "Treasurer" },
                { name: "Abhay Kanada", image: "/static/Abhay_Kanada.jpg", company: "Big Ten Network", descriptor: "Director of Technology" },
                { name: "Zach Nesbit", image: "/static/Zach_Nesbit.jpg", company: "K9 Resorts", descriptor: "Board Member At Large" },
                ]} 
                perRow={5} type="about" className="w-full justify-evenly"/>
            </div>
            <h1 className="text-black text-3xl font-bold">Chair People</h1>
            <div className="w-full px-5 md:px-0"><CardsGrid cards={
                [{ name: "Heidi Sparacino", image: "/static/Heidi_Sparacino.png", descriptor: "Construction Chair" },
                { name: "Irene Benedict", image: "/static/Irene_Benedict.jpg",  descriptor: "Social Media Chair" },
                { name: "Robin Torch", image: "/static/Robin_Torch.jpeg", descriptor: "Outreach Chair" },
                { name: "Brandon Kerpel", image: "/static/Brandon_Kerpel.jpg",  descriptor: "Website Manager Chair" },
                ]} 
            perRow={4} type="about" className="w-full justify-evenly"/>
            </div>
            <h1 className="text-black text-3xl font-bold pb-5 ">Committee Members</h1>
            <div className="md:w-150 lg:w-auto px-5 md:px-0">
                <ComTable  names={[
                    "Angela Redman","Bonnie Kanner","Jenny DuHamel","Rachel Bankier","Linsey Patten","Nicole Moritz",
                    "John Wilkenson","Lynn Caroll","Peg Morrisroe","Adrienne Driessen","Hannah Wolod","Amanda Alvarez",
                    "Tom Van Winkle",   "Brittany Eisenberg", "Susie Cutler", "Joe Cohen", "Michele Cochara", "Jordin Jewel", 
                    "Andy Frankel",  "Johnny Guarnieri", "Brian Thibaut", "J.P. Veillon",  "Sheila Collins", "Kelly Cooper", 
                    "Kelly Collins", "Lindsey Petlak", "Chase Rowars",  "Jeff Steybe", "Christine Mihovilovich", "Mike Lee",
                    "Lisa Curry", "Erika Jones", "Lauren Schwartz", "Dawne Pohlman", "Sue Violet", "Belinda Veillon"
                    ]}
                    rows={isMobile? 18 : 6}
                    cols={isMobile? 2: 6}/>
            </div>
            <h1 className="text-black text-3xl font-bold py-5">Teen Committee Members</h1>
            <div className="overflow-x-auto bg-[#f6eee3] md:w-150 lg:w-auto px-5 md:px-0">
                <ComTable names={[
                    "Samantha Kerpel", "Eva Douvlis", "Yoonsey Kim", "Nora Mcclenahan", "Elie Stadelmann",
                    "Brady Knutsen", "Dani Curry",	"Clementine Lincoln", "Gisele Lincoln",	"Dylan Gryll",
                    "Ellis Platzbecker",	"Arunima Ganguli", "Alexis Rosen"
                ]}
                rows = {isMobile? 7 : 3}
                cols = {isMobile? 2: 6}/>
            </div>
            <p className="text-black pt-5">If you're interested in joining our team, please contact David at david@fureverhomedogsanctuary.org or 773-520-3568</p>
        </div>
    </>
    )
}
export default About