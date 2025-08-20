import { CardsGrid } from "../Components/card_grid";
import DAFDirectReact from "../Components/DAF";
import {Component} from "../Components/Navbar";

export default function WaysToDonate(){
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full bg-eggshell">
            <Component/>
            <div className={`pt-nav-height w-full pl-5`}>
                <CardsGrid cards={[
                    {name: "Zelle", descriptor: "Please send your donation to info@fhdsmail.org"},
                    {name: "Check", descriptor:["Please make payable to Furever Home Dog Sanctuary. You can send it to:", <br/>, "655 Deerfield Road,",<br/>," Suite 100 #408", <br/>,"Deerfield, Illinois 60015"]},
                    {name: "Insurance", descriptor: "Designate FHDS as the beneficiary of a life insurance policy."},
                    {name: "IRA Donations", descriptor: "An individual retirement account (IRA), also known as IRA Charitable Distributions, is the savviest way for individuals aged 70.5 or older to maximize their charitable impact." },
                    {name: "Donor Advised Funds", descriptor: ["A donor-advised fund, or DAF, is like a charitable investment account for the sole purpose of supporting charitable organizations you care about. When you contribute cash, securities, or other assets to a donor-advised fund, you are generally eligible to take an immediate tax deduction. Then those funds can be invested for tax-free growth, and you can recommend grants to any eligible IRS-qualified public charity.", <div className="pt-5"><DAFDirectReact/></div>]},
                    {name: "Stocks and Other Securities", descriptor: "Donating individual stock may save you money. You avoid capital gains tax while deducting 100% of the value of the contribution. "},
                    {name: "Bequests and Legacy Gifting", descriptor: "Designate FHDS as part of your estate. "},
                    {name: "Employer Matching Gifts", descriptor: "Many employers sponsor matching gift programs and will match, double, triple, or even quadruple charitable contributions made by their employees. We encourage you to check with your HR department for your employer's policy."},
                    {name: "Cryptocurrency", descriptor:"When you donate appreciated cryptocurrency to Furever Home Dog Sanctuary, you don't owe capital gains tax on those earnings, neither do we." }
                ]} perRow={4} type="ways_to_donate"/>
                <div className="px-10 py-10 justify-evenly">
                    <p className="text-black">For more information, please contact David Kerpel, FHDS Founder and President, at 773-520-3568 or info@fhdsmail.org</p>
                </div>
                
            </div>
        </div>
        </>
    );
}