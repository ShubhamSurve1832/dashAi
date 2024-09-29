

const CustomerProgressbar = ({ steps }) => {


  return (
    <div className="2xl:mt-12 mt-6 flex flex-col">
      <div className="flex justify-between">
        <span className="text-[#150C0B]">Customer information</span>
        <span className="text-[#150C0B]">TAGS.VERIFICATION</span>
      </div>
      <div className="mt-4 flex items-center xl:px-12 px-4">
        <div className={`flex h-4 w-4 items-center justify-center rounded-full ${steps >= 1 ? 'border-4 bg-[#A9180A]' : 'border'} border-[#A9180A] `}>
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <div className="relative mx-1 flex-grow">
          <div className={`border-t-2 ${steps > 1 ? 'border-[#A9180A]' : 'border-[#E8E7E7]'} ${steps >= 1 && steps < 2 ? 'custom-dashed-border' : ''}`}></div>
        </div>
        <div className={`flex h-4 w-4 items-center justify-center rounded-full ${steps >= 2 ? 'border-4 bg-[#A9180A]' : 'border'} border-[#A9180A] `}>
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProgressbar;
