function AddOn({ title, Discription, value }: { title: String, Discription: String, value: String }) {
    return (
      <div className="relative left-[12rem] top-[3rem] py-3">
        <div className="h-[10rem] w-[60rem] bg-white border border-white shadow-lg flex justify-between">
          <div className="flex-col ml-10 mt-10 ">
            <div className="font-bold text-[2.1rem] text-darkgrey">{title}</div>
            <div className="text-[1rem]">{Discription}</div>
          </div>
          <div className="flex-row mr-10 mt-10 ">
            <div className="font-bold text-[2.1rem] text-darkgrey">{value}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddOn;
  