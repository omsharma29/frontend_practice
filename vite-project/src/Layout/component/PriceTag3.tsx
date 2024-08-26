import StartHereButton from "./StartHereButton";
import 'boxicons/css/boxicons.min.css';

export default function PriceTag({ isMonthly }: { isMonthly: boolean }) {
  return (
    <div className="w-80 h-[33rem] border border-darkgrey bg-white relative mx-[20px] my-[20px] p-5">
      <div className="pl-5 m-7">
        <h3 className="font-bold text-darkgrey text-[1.5rem]">Starter</h3>
        <p className="text-darkgrey text-[0.8rem]">Ideal for freelancers and contractors just starting out</p>
        <h1 className="font-bold text-darkgrey text-[2rem] inline-block mt-4">{isMonthly ? '$240' : '$24'}</h1>
        <h5 className="inline-block align-middle">/{isMonthly ? 'Yearly' : 'Monthly'}</h5>
      </div>
      <div className="flex flex-col gap-3 mx-[10px]">
        <div><i className='bx bx-check text-green'></i> All templates</div>
        <div><i className='bx bx-check text-green'></i> All templates</div>
        <div><i className='bx bx-check text-green'></i> All templates</div>
        <div><i className='bx bx-check text-green'></i> All templates</div>
        <div><i className='bx bx-check text-green'></i> All templates</div>
        <div><i className='bx bx-check text-green'></i> All templates</div>
        <div><i className='bx bx-check text-green'></i> All templates</div>
      </div>
      <div className="mt-4 flex justify-center">
        <StartHereButton />
      </div>
    </div>
  );
}
