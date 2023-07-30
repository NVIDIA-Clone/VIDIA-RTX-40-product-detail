import { useContext } from "react";
import LandingPageContext from "../LandingPageContext.jsx";

const TabContentNvidiaCanvas = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <>
      <div className="bg-[url(/images/nvidia-canvas.jpg)] bg-contain ml-auto mr-auto mt-[3rem] w-[850px] h-[478px]"></div>
      <div className="w-[858px] font-Sig text-left ml-auto mr-auto mt-[14px]">
        <h3 className="font-semibold text-white text-[22px]">Vidia Canvas</h3>
        <h4 className="text-white text-[36px] mt-[10px] font-bold">
          The App That Puts the AI in Painting
        </h4>
        <p className="text-[#eee] text-[15px] mt-[10px]">
          Use AI to turn simple brushstrokes into realistic landscape images.
          Create backgrounds quickly, or speed up your concept<br></br>{" "}
          exploration, so you can spend more time visualizing ideas.
        </p>
        <div
          className="cursor-pointer mt-[24px] font-semibold text-white text-[18px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Paint With AI</span>
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

export default TabContentNvidiaCanvas;
