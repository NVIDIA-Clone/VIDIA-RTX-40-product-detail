import { useContext } from "react";
import LandingPageContext from "../LandingPageContext.jsx";

const TabContentNvidiaStudio = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <>
      <div className="bg-[url(/images/nvidia-studio.jpg)] bg-contain ml-auto mr-auto mt-[3rem] w-[850px] h-[478px]"></div>
      <div className="w-[858px] font-Sig text-left ml-auto mr-auto mt-[14px]">
        <h3 className="font-semibold text-white text-[22px]">Nvidia Studio</h3>
        <h4 className="text-white text-[36px] mt-[10px] font-bold">
          Your Creativity
          <sup>AI</sup>
        </h4>
        <p className="text-[#eee] text-[15px] mt-[10px]">
          Take your creative projects to the next level with NVIDIA Studio.
          Powered by new dedicated hardware, RTX 40 Series<br></br> unlocks
          unmatched performance in 3D rendering, video editing, and graphic
          design. Experience feature-rich RTX<br></br> accelerations in top
          creative apps, world-class NVIDIA Studio drivers engineered to provide
          maximum stability, and a suite<br></br> of exclusive tools that
          harness the power of RTX for AI-assisted creative workflows.
        </p>
        <div
          className="cursor-pointer mt-[24px] font-semibold text-white text-[18px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Accelerate Your Creativity</span>
          <button>
            <svg
              width="30px"
              height="30px"
              viewBox="0 -3 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-500 ease-in-out transform translate-x-0 ${
                isHovered ? "translate-x-1" : ""
              }`}
            >
              <path
                d="M10 7L15 12L10 17"
                stroke={isHovered ? "white" : "#76b900"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TabContentNvidiaStudio;
