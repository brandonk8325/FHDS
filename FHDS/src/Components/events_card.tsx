
import { Card } from "flowbite-react";

export function EventCard({title = "title", description = "description", image = "../static/dog.jpg", link = ""}) {
  return (
    <div className= {`max-w-3xs border-1 border-black rounded-lg bg-darkgreen`}>
        <div className="p-5">
            <h5 className="align-top items-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{title}</h5> 
            <hr className="pb-5"/>
            <p className="font-normal text-neutral-300 ">{description}</p>
        </div>
    </div>
  );
}