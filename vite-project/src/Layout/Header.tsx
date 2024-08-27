// import 'boxicons/css/boxicons.min.css';
// import StartHereButton from './component/StartHereButton';

// const Header = () => {
//   return (
//     <>
//     {/* <div className="flex justify-evenly pt-7  ">
//         <div className="flex ">
//             <img src="https://rb.gy/pngzb7" alt="Bonsai" />
//         </div>
//         <div className="flex gap-5  ">
//             <div className="text-darkgrey text-[20px]">Product <i className='bx bx-chevron-down'></i></div>
//             <div className="text-darkgrey text-[20px]">Template <i className='bx bx-chevron-down'></i></div>
//             <div className="text-darkgrey text-[20px]">Pricing</div>
//             <div className="text-darkgrey text-[20px]">Reviews</div>
//         </div>
//         <div className="flex gap-4 ">
//             <button className='border-2 border-green px-6  text-green text-[13px] font-bold rounded hover:text-white hover:bg-green'>LogIn</button> <br/>
//             <StartHereButton/>
//         </div>
//     </div> */}
    
//     </>
//   )
// }

// export default Header

import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import StartHereButton from './component/StartHereButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" sticky top-0 bg-white z-50 shadow-b flex justify-between items-center pt-7 px-4 md:px-8 py-4">
        <div className="flex">
          <img src="https://rb.gy/pngzb7" alt="Bonsai" />
        </div>
        <div className="hidden md:flex gap-5">
          <div className="text-darkgrey text-[20px]">Product <i className='bx bx-chevron-down'></i></div>
          <div className="text-darkgrey text-[20px]">Template <i className='bx bx-chevron-down'></i></div>
          <div className="text-darkgrey text-[20px]">Pricing</div>
          <div className="text-darkgrey text-[20px]">Reviews</div>
        </div>
        <div className="hidden md:flex gap-4">
          <button className='border-2 border-green px-6 text-green text-[13px] font-bold rounded hover:text-white hover:bg-green'>LogIn</button>
          <StartHereButton />
        </div>
        <div className="md:hidden">
          <i className='bx bx-menu text-3xl cursor-pointer' onClick={toggleSidebar}></i>
        </div>
      </div>

      {/* Sidebar for medium screens */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
         
          <i className='bx bx-x text-3xl cursor-pointer' onClick={toggleSidebar}></i>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="text-darkgrey text-[20px]">Product <i className='bx bx-chevron-down'></i></div>
          <div className="text-darkgrey text-[20px]">Template <i className='bx bx-chevron-down'></i></div>
          <div className="text-darkgrey text-[20px]">Pricing</div>
          <div className="text-darkgrey text-[20px]">Reviews</div>
          <button className='border-2 border-green px-6 text-green text-[13px] font-bold rounded hover:text-white hover:bg-green'>LogIn</button>
          <StartHereButton />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Header;
