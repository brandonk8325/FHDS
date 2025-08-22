import { CardsGrid } from "../Components/card_grid";
import DAFDirectReact from "../Components/DAF";
import {Component} from "../Components/Navbar";

export default function WaysToDonate(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full bg-eggshell text-white">
            <Component/>
            <div className={`pt-nav-height w-full px-10 md:px-30`}>
                <CardsGrid cards={[
                    {name: "Zelle", descriptor: "Please send your donation to info@fhdsmail.org"},
                    {name: "Check", descriptor:["Please make payable to Furever Home Dog Sanctuary", <br/>, "655 Deerfield Road,",<br/>," Suite 100 #408", <br/>,"Deerfield, Illinois 60015"]},
                    {name: "Insurance", descriptor: "Designate FHDS as the beneficiary of a life insurance policy."},
                    {name: "Legacy Gifting", descriptor: "Designate FHDS as part of your estate. "},
                    {name: "Donor Advised Fund", descriptor: [ <div className=""><DAFDirectReact/></div>]},
                    {name: "IRA Donations", descriptor: "An individual retirement account (IRA), also known as IRA Charitable Distributions, is the savviest way for individuals aged 70.5 or older to maximize their charitable impact." },
                    {name: "Stocks & Securities", descriptor: "Donating individual stock may save you money. You avoid capital gains tax while deducting 100% of the value of the contribution. "},
                    {name: "Employer Matching", descriptor: "Many employers sponsor matching gift programs and will match, double, triple, or even quadruple charitable contributions made by their employees. We encourage you to check with your HR department for your employer's policy."},
                    // {name: "Cryptocurrency", descriptor:"When you donate appreciated cryptocurrency to Furever Home Dog Sanctuary, you don't owe capital gains tax on those earnings, neither do we." }
                ]} perRow={4} type="ways_to_donate" className=""/>
                <div className="px-10 pb-10 justify-center w-full flex">
                    <p className="text-black">For more information, please contact David Kerpel, FHDS Founder and President, at 773-520-3568 or info@fhdsmail.org</p>
                </div>
            </div>
        </div>
        </>
    );
}