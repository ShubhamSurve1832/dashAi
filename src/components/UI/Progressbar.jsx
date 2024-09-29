

const Progressbar = ({ steps }) => {

  return (
    <>
      {/* <div className="my-12 flex flex-col"> */}
      {/* <div className="flex justify-between">
        <span className="text-[#150C0B]">1</span>
        <span className="text-[#150C0B]">2</span>
        <span className="text-[#150C0B]">3</span>
        <span className="text-[#150C0B]">4</span>
      </div> */}
      < div className="flex items-center xl:px-12 px-4 my-12" >
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${steps >= 1 ? 'border-4 bg-[#572E91]' : 'border'} border-[#572E91] `}>
          1
        </div>
        <div className="relative mx-1 flex-grow">
          <div className={`border-t-2 custom-dashed-border ${steps > 1 ? 'border-[#572E91] ' : 'border-[#E8E7E7]'} ${steps >= 1 && steps < 2 ? 'custom-dashed-border' : ''}`}></div>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${steps >= 2 ? 'border-4 bg-[#572E91]' : 'border'} border-[#572E91] `}>
          2
        </div>
        <div className="relative mx-1 flex-grow">
          <div className={`border-t-2 ${steps > 2 ? 'border-[#572E91]' : 'border-[#E8E7E7]'} ${steps >= 2 && steps < 3 ? 'custom-dashed-border' : ''}`}></div>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${steps >= 3 ? 'border-4 bg-[#572E91]' : 'border'} border-[#572E91] `}>
          3
        </div>

      </div >
      {/* </div> */}
    </>
  );
};

export default Progressbar;
