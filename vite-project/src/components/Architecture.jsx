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

//   return (
//     <div className="bg-black w-full flex flex-col items-center pb-[60px]">
//       <div className="flex flex-col pt-[120px] pb-[30px] items-center">
//         <h2 className="text-white mb-[25px] text-xl font-bold">
//           The Ultimate Platform for Gamers and Creators
//         </h2>
//         <p className="font-bold text-white text-[2.25rem]">
//           Powered by PeForce RTX 40 Series and DLSS 3
//         </p>
//       </div>
//       <img
//         className="opacity-50 z-1"
//         src="/images/architecture.png"
//         alt="Microchip made by Vidia with a rainbow color scheme"
//       />
//       <div className="flex flex-wrap w-3/5 justify-evenly z-2">
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">Cutting Edge <br /> GPUs</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">VIDIA Ada Lovelace Architecture</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">Realistic and Immersive <br /> Graphics</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">Dedicated Ray Tracing Cores</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">AI-Accelerated <br /> Performance</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">VIDIA DLSS 3</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">Game-Winning <br />Responsiveness</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">VIDIA Reflex low-latency platform</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">Built for <br />Live Streaming</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">VIDIA Encoder</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">AI-Enhanced Voice and <br />Video</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">RTX Video Super Resolution and <br />VIDIA Broadcast</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">Fast-Track Your <br />Creativity</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">VIDIA Studio</p>  
//         </div>
//         <div className="flex flex-col items-center mb-45px">
//             {/* insert svg here  */}
//             <p className="text-white py-[10px] mb-[9px] text-[1.5rem] font-bold text-center">Performance and <br />Reliability</p>
//             <p className="text-white text-[1rem] mx-[17.5px] p-[10px]">Game Ready and Studio Drivers</p>  
//         </div>
//       </div>
      
//     </div>
//   );
};
export default Architecture;
