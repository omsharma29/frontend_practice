import 'boxicons/css/boxicons.min.css';
import StartHereButton from './component/StartHereButton';

const Header = () => {
  return (
    <>
    <div className="flex justify-evenly pt-7  ">
        <div className="flex ">
            <img src="https://rb.gy/pngzb7" alt="Bonsai" />
        </div>
        <div className="flex gap-5  ">
            <div className="text-darkgrey text-[20px]">Product <i className='bx bx-chevron-down'></i></div>
            <div className="text-darkgrey text-[20px]">Template <i className='bx bx-chevron-down'></i></div>
            <div className="text-darkgrey text-[20px]">Pricing</div>
            <div className="text-darkgrey text-[20px]">Reviews</div>
        </div>
        <div className="flex gap-4 ">
            <button className='border-2 border-green px-6  text-green text-[13px] font-bold rounded hover:text-white hover:bg-green'>LogIn</button> <br/>
            <StartHereButton/>
        </div>
    </div>
    </>
  )
}

export default Header