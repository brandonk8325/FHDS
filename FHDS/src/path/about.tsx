//Our team
import { AboutCard } from "../Components/about_card"
import { ComTable } from "../Components/committee_table"
import Navbar from "../Components/Navbar"
import Timeline from "../Components/timeline"
import { Beige, navSpacing } from "../variables"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


function About(){
    return(
    <>
        <div className=" flex flex-col items-center justify-center bg-[#f6eee3] pb-10">
            <div className="h-screen items-center justify-center w-full bg-[#b7c3be]">
                <Navbar/>
                <div className="pt-nav-height justify-evenly items-center flex flex-row w-full h-full">
                <div className=''>
                    <img className="w-150 rounded-lg" src="../static/dog.jpg" alt="image description" />
                </div>
                <div className='w-150 '>
                    <h3 className="text-3xl text-center font-bold dark:text-black pb-10 ">About Us</h3>
                    <p className='text-center text-black'>Furever Home Dog Sanctuary (FHDS) is one of the few sanctuaries in the Midwest.  A sanctuary differs from shelters or other rescues because it is designed to accommodate dogs for long periods of time.  FHDS has behaviorists and trainers that will help provide the dogs with skills that will increase their chances of getting adopted.  Until they are adopted, our dogs will have more space, more stimulation, and more socialization than they were previously getting.  FHDS will meet each dog where they are, to ensure that they are thriving and living a beautiful life. </p>
                </div>
                </div>
            </div>
            <div className='flex flex-row py-10 items-center justify-evenly w-full bg-[#f6eee3]'>
                <div className='w-150 items-center justify-between'>
                    <h3 className="text-3xl text-center font-bold py-10 dark:text-black">Our Story</h3>
                    <p className='text-center text-black'> In 2022, we formed a nonprofit called Furever Home Dog Sanctuary with goal of creating a place where hope could finally flourish for dogs who need it most. Our mission is to rescue and rehabilitate dogs to improve their quality of life by preparing them to be adopted into their furever home. After searching for land for over a year, we now have 6 acres in Richmond, Illinois. We will be working with dogs who have been in shelters for extremely long periods or have found themselves on an euthanasia list. While in our care, whether it's months or the rest of their lives, dogs will have more space, increased time for socialization with people and other dogs, time dedicated to work with trainers/behaviorists, and 6 acres of land to enjoy exploring.<br/><br/> - David and Erin Kerpel</p>
                    <div className="-translate-y-3"><Timeline></Timeline></div>
                </div>
                <div className=''>
                    <img className="w-130 rounded-lg" src="../static/Our_Story.jpeg" alt="image description" />
                </div>
            </div>
            <div className="flex flex-row py-20 items-center justify-evenly w-full bg-[#b7c3be]">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9elqncC6oNs?si=urixhp-Bi_5z1wnd" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <hr className="border-1 w-full border-black"></hr>
            <h1 className={`text-black text-6xl font-serif font-bold py-10`}>Our Team</h1>
            <h1 className="text-black text-3xl font-bold">Board Members</h1>
            <div className=' py-10 flex flex-row items-center justify-evenly w-full px-10'>
                <AboutCard name = "David Kerpel" image = "../static/David_Kerpel.jpeg" company="Law Offices of David S. Kerpel" descriptor = "President"/>
                <AboutCard name = "Erin Kerpel" image = "../static/Erin_Kerpel.jpeg" company="Gratitude Generation" descriptor = "Vice-President"/>
                <AboutCard name = "Ryan Geudel" image = "../static/Ryan_Geudel.jpg" company = "CJBS" descriptor = "Treasurer"/>
                <AboutCard name = "Abhay Kanada" image = "../static/Abhay_Kanada.jpg" company="Big Ten Network" descriptor = "Director of Technology"/>
                <AboutCard name = "Zach Nesbit" image = "../static/dog.jpg" company = "K9 Resorts"/>
            </div>
            <h1 className="text-black text-3xl font-bold">Chair People</h1>
            <div className=' py-10 flex flex-row items-center justify-evenly w-full px-10'>
                <AboutCard name = "Heidi Benedict" image = "../static/Heidi_Sparacino.png" descriptor = "Construction Chair"/>
                <AboutCard name = "Irene Benedict" image = "../static/Irene_Benedict.jpg" descriptor = "Social Media Chair"/>
                <AboutCard name = "Robin Torch" image = "../static/Robin_Torch.jpeg" descriptor = "Outreach Chair"/>
                <AboutCard name = "Brandon Kerpel" image = "../static/dog.jpg" descriptor = "Website Manager Chair"/>
            </div>
            <h1 className="text-black text-3xl font-bold pb-5">Committee Members</h1>
            <ComTable/>
            <h1 className="text-black text-3xl font-bold py-5">Teen Committee Members</h1>
            <div className="overflow-x-auto bg-[#f6eee3]">
            <Table className="border-1 border-black ">
                <TableBody className="divide-y">
                <TableRow className=" text-black">
                    <TableCell className="whitespace-nowrap font-medium ">
                    Samantha Kerpel
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium ">
                    Eva Douvlis
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium ">
                    Yoonsey Kim
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Nora Mcclenahan
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Elie Stadelmann
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Brady Knutsen
                    </TableCell>
                </TableRow>
                <TableRow className=" text-black">
                    <TableCell className="whitespace-nowrap font-medium">
                    Dani Curry
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium ">
                    Clementine Lincoln
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Gisele Lincoln
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Dylan Gryll
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Ellis P.
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    Arunima G.
                    </TableCell>
                </TableRow>
                <TableRow className=" text-black">
                    <TableCell className="whitespace-nowrap font-medium">
                    Alexis Rosen
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium ">
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium ">
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium">
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </div>
        </div>
    </>
    )
}
export default About