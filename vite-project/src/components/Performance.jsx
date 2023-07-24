const Performance = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-NVBGGray">
        <div className="flex flex-col items-center justify-center py-[75px] w-3/4 h-[80%] md:w-full md:px-[20px] ">
          <div className="p-[15px]">
            <h1 className="text-white text-[2.25rem] md:text-[1.75rem] font-bold pb-[40px]">
              Performance
            </h1>
          </div>

          <div className="flex justify-end w-full mr-[20px] sm:mr-[30px]">
            <div className="flex items-center mb-[10px]">
              <div className="bg-NVGreen w-[10px] h-[10px] mt-[1px] mr-[5px] ml-[20px] sm:ml-[10px]"></div>
              <p className="text-[11px] font-medium text-[#EEEEEE] font-Sig">
                RTX 4090
              </p>
            </div>
            <div className="flex items-center mb-[10px]">
              <div className="bg-NVDLightGray w-[10px] h-[10px] mt-[1px] mr-[5px] ml-[20px] sm:ml-[10px]"></div>
              <p className="text-[11px] text-[#EEEEEE] font-Sig font-medium">
                RTX 3090 Ti
              </p>
            </div>
          </div>
            <img
              src="./images/performanceChart.svg"
              alt="Graph of 4090 performance across different games"
              className="p-[15px] md:overflow-x-scroll"
            />
          <div className="py-[10px]">
            <span className="text-[#EEEEEE] font-Sig font-semibold text-base">
              Relative Performance
            </span>
          </div>
          <div className="flex justify-center w-3/5 sm:w-4/5">
          <span className=" pb-[13px] pt-[35px] text-[#AAAAAA] text-[11px] text-center">
            3840x2160 Resolution, Highest Game Settings, DLSS Super Resolution
            Performance Mode, DLSS Frame Generation on RTX 40 Series, i9-12900K,
            32GB RAM, Win 11 x64. Cyberpunk 2077 with new Ray Tracing: Overdrive
            Mode Technology Preview based on pre-release build.
          </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Performance;
