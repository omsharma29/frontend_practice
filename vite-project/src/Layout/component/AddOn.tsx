function AddOn({ title, Discription, value }: { title: String, Discription: String, value: String }) {
  return (
    <div className="py-3 px-4">
      <div className="w-full bg-white border border-gray-200 shadow-lg flex justify-between p-6 rounded-lg">
        <div className="flex flex-col">
          <div className="font-bold text-[1.5rem] text-darkgrey">{title}</div>
          <div className="text-[1rem] text-gray-600 mt-2">{Discription}</div>
        </div>
        <div className="flex items-center">
          <div className="font-bold text-[1.5rem] text-darkgrey">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default AddOn;
