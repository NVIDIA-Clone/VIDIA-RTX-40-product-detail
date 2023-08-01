import { useContext } from "react";
import LandingPageContext from "../LandingPageContext.jsx";

const TabContentNvidiaOmniverse = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <>
      <div className="bg-[url(/images/nvidia-omniverse-creators.jpg)] bg-contain ml-auto mr-auto mt-[3rem] w-[850px] h-[478px]"></div>
      <div className="w-[858px] font-Sig text-left ml-auto mr-auto mt-[14px]">
        <h3 className="font-semibold text-white text-[22px]">
          Vidia Omniverse
        </h3>
        <h4 className="text-white text-[36px] mt-[10px] font-bold">
          Connect Your Creative Worlds to a Universe of Possibility
        </h4>
        <p className="text-[#eee] text-[15px] mt-[10px]">
          <a className="cursor-pointer hover:decoration-white underline decoration-solid decoration-2 decoration-[#76b900]">
            VIDIA Omniverse™
          </a>{" "}
          is a 3D design collaboration platform within the{" "}
          <a className="cursor-pointer hover:decoration-white underline decoration-solid decoration-2 decoration-[#76b900]">
            VIDIA Studio
          </a>{" "}
          suite of tools for creators. Built to<br></br> accelerate workflows
          and unite apps and assets to bring your ideas to life—fast.
        </p>
        <div
          className="cursor-pointer mt-[24px] font-semibold text-white text-[18px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>See the Future of 3D Design</span>
          <button>
            <svg
              width="30px"
              height="30px"
              viewBox="0 -3 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-500 ease-in-out transform translate-x-0 ${
                isHovered ? "translate-x-2" : ""
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

export default TabContentNvidiaOmniverse;
