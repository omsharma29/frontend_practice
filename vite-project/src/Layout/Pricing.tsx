import { useState } from "react";
import AddOn from "./component/AddOn";
import PriceTag from "./component/PriceTag";
import PriceTag2 from "./component/PriceTag2";
import PriceTag3 from "./component/PriceTag3";
import ToggelBtn from "./component/ToggelBtn";

function Pricing() {
    const [isMonthly, setIsMonthly] = useState(false);
    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <div className="relative max-w-screen-lg mx-auto">
            {/* U-shaped background */}
            {/* <div className="blue-shape"></div> */}

            <div className="flex flex-row justify-center gap-5 mx-6 mt-15 p-3 relative z-10">
                <div className="mb-2 font-semibold text-darkgrey text-[3rem] font-serif">Plan & Pricing</div>
                <div className="flex items-center text-darkgrey space-x-2 text-[1.2rem]">
                    <span>Monthly</span>
                    <ToggelBtn isOn={isMonthly} onToggle={handleToggle} />
                    <span>Yearly</span>
                    <p className="text-green"><i className='bx bxs-right-top-arrow-circle'></i> 2 months free</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center relative z-10">
                <PriceTag isMonthly={isMonthly} />
                <PriceTag2 isMonthly={isMonthly} />
                <PriceTag3 isMonthly={isMonthly} />
            </div>

            <div className="relative z-10">
                <div className="relative text-center font-serif font-bold text-darkgrey text-[2rem] pt-10">
                    Supercharge your work with add-ons
                </div>
                <AddOn 
                    title={isMonthly ? 'Accounting & Tax Assistant' : 'Collaborators'} 
                    Discription={isMonthly ? 'Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.' : 'Invite other users to specific projects for limited access and functionality.'} 
                    value={isMonthly ? '$100/year' : 'Free'} 
                />
                <AddOn 
                    title="Partners" 
                    Discription="Invite other users for full account access and company management." 
                    value={isMonthly ? '$90/year' : '$9/month'} 
                />
                <AddOn 
                    title="Bonsai Tax" 
                    Discription="Track expenses, identify write-offs, and estimate quarterly taxes easily." 
                    value={isMonthly ? 'Free' : '$10/month'} 
                />
            </div>
        </div>
    );
}

export default Pricing;
