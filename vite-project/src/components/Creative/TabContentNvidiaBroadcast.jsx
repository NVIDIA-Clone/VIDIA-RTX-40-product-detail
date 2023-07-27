import { useContext } from "react";
import LandingPageContext from "../LandingPageContext.jsx";

const TabContentNvidiaBroadcast = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <>
      <div className="bg-[url(/images/geforce-broadcast-app.jpg)] bg-contain ml-auto mr-auto mt-[3rem] w-[850px] h-[478px]"></div>
      <div className="w-[858px] font-Sig text-left ml-auto mr-auto mt-[14px]">
        <h3 className="font-semibold text-white text-[22px]">
          Nvidia Broadcast
        </h3>
        <h4 className="text-white text-[36px] mt-[10px] font-bold">
          Your AI-Powered Home Studio
        </h4>
        <p className="text-[#eee] text-[15px] mt-[10px]">
          The NVIDIA Broadcast app transforms any room into a home studio—taking
          your live streams, voice chats, and video<br></br> calls to the next
          level with powerful AI effects like noise and room echo removal,
          virtual background, and more.
        </p>
        <div
          className="cursor-pointer mt-[24px] font-semibold text-white text-[18px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Enhance Your Live Audio and Video</span>
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

export default TabContentNvidiaBroadcast;
