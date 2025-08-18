import { BlankCard } from "../Components/blank_card";
import { EventCard } from "../Components/events_card";
import {Component} from "../Components/Navbar";

export default function WaysToDonate(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full bg-eggshell">
            <Component/>
            <div className={`pt-nav-height flex flex-col w-300 `}>
                <div className="py-10 flex-row flex justify-evenly ">
                    <EventCard title="Zelle" description="Please send your donation to info@fhdsmail.org"/>
                    <EventCard title="Check" description="Please make payable to Furever Home Dog Sanctuary. You can send it to 655 Deerfield Road, Suite 100 #408 Deerfield, Illinois 60015"/>
                    <EventCard title="Employer Matching Gifts" description="Many employers sponsor matching gift programs and will match, double, triple, or even quadruple charitable contributions made by their employees. We encourage you to check with your HR department for your employer's policy."/>
                    <EventCard title = "IRA Donations" description="An individual retirement account (IRA), also known as IRA Charitable Distributions, is the savviest way for individuals aged 70.5 or older to maximize their charitable impact."/>
                </div>
                <div className="py-10 flex-row flex justify-evenly">
                    <EventCard title="Donor Advised Funds" description="EXPLAIN"/>
                    <EventCard title="Stocks and Other Securities" description="Donating individual stock may save you money. You avoid capital gains tax while deducting 100 percent of the value of the contribution. Please contact David Kerpel, FHDS Founder and President, at 773-520-3568 or info@fhdsmail.org"/>
                    <EventCard title="Bequests and Legacy Gifting" description="Designate FHDS as part of your estate. For more information, please contact: David Kerpel, FHDS Founder and President, at 773-520-3568 or info@fhdsmail.org."/>
                    <EventCard title="Insurance" description="Designate FHDS as the beneficiary of a life insurance policy. For more information, please contact: David Kerpel, FHDS Founder and President, at 773-520-3568 or info@fhdsmail.org"/>
                </div>
                <div className="py-10 flex-row flex justify-evenly">
                    <EventCard title="Cryptocurrency" description="When you donate appreciated cryptocurrency to Furever Home Dog Sanctuary, you don't owe capital gains tax on those earnings, neither do we."/>
                    <BlankCard/>
                    <BlankCard/>
                    <BlankCard/>
                </div>
            </div>
        </div>
        </>
    );
}