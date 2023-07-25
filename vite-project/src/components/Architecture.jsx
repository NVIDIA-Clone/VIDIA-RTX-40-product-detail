const Architecture = () => {
  return (
    <div className="flex flex-col items-center w-full bg-black h-[960px]">
      <div className="mt-[120px] mb-[90px] flex items-center w-3/4 justify-center flex-col">
        <h2 className="text-white mb-[25px] text-[20px] font-bold font-Sig ">
          VIDIA Ada Lovelace Architecture
        </h2>
        <div className="text-white text-[2.25rem] font-Sig font-bold">
          Ahead of its Time, Ahead of the Game
        </div>
      </div>
      <div className="flex justify-between w-1/2">
        <img src="/images/architecture.png" alt="Nvidia Microchip" />
        <div className="flex flex-col justify-evenly ">
          <div className="w-auto">
            <h3 className="text-white text-[1.5rem] font-bold font-Sig">
              New Streaming Multiprocessors
            </h3>
            <p className="text-white text-[1rem] py-[10px] font-Sig">
              Up to 2X performance and power efficiency
            </p>
          </div>
          <div>
            <h3 className="text-white text-[1.5rem] font-bold font-Sig">
              Fourth-Gen Tensor Cores
            </h3>
            <p className="text-white text-[1rem] py-[10px] font-Sig">
              Up to 4X performance with DLSS 3 <br />
              vs. brute-force rendering
            </p>
          </div>
          <div>
          <h3 className="text-white text-[1.5rem] font-bold font-Sig">
              Third-Gen RT Cores
            </h3>
            <p className="text-white text-[1rem] py-[10px] font-Sig">
              Up to 2X ray tracing performance
            </p>
          </div>
          <div className="flex items-center">
          <span className="font-bold text-white font-Sig">Learn More About the Architecture</span>
          <span>
          <img className="h-[16px] w-[10px] ml-[3px]"src="/images/angleRight.svg" alt="green right arrow" />
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Architecture;
