import { useState } from "react";
import PriceTag from "./component/PriceTag"
import PriceTag2 from "./component/PriceTag2"
import PriceTag3 from "./component/PriceTag3"
import ToggelBtn from "./component/ToggelBtn"
// import './Styles/Global.css'
import 'boxicons/css/boxicons.min.css';
import AddOn from "./component/AddOn";


function Pricing() {
    const   [isMonthly, setIsMonthly] = useState(false);
    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <div className="relative">
            {/* <div className="blue-shape _12"></div> */}
            <div className="flex flex-row justify-center gap-5 mx-6 mt-15 p-3">
                <div className="mb-2 font-semibold text-darkgrey text-[3rem] font-serif">Plan & Pricing</div>
                <div className="flex items-center text-darkgrey space-x-2 text-[1.2rem]">
                    <span>Montly</span>
                    <ToggelBtn isOn={isMonthly} onToggle={handleToggle} />
                    <span>Yearly</span>
                    <p className="text-green"> <i className='bx bxs-right-top-arrow-circle'></i> 2 month free</p>
                </div>
            </div>

            <div className="grid grid-cols-3 justify-items-start">
                <PriceTag isMonthly={isMonthly} />
                <PriceTag2 isMonthly={isMonthly} />
                <PriceTag3 isMonthly={isMonthly}/>
            </div>

            

        </div>
    )
}

export default Pricing