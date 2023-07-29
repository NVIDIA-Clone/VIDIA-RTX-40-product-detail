import { useContext } from "react";
import LandingPageContext from "../LandingPageContext.jsx";

const TabContentNvidiaEncoder = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <>
      <div className="bg-[url(/images/nvidia-encoder.jpg)] bg-contain ml-auto mr-auto mt-[3rem] w-[850px] h-[478px]"></div>
      <div className="w-[858px] font-Sig text-left ml-auto mr-auto mt-[14px]">
        <h3 className="font-semibold text-white text-[22px]">Vidia Encoder</h3>
        <h4 className="text-white text-[36px] mt-[10px] font-bold">
          The Dream Stream
        </h4>
        <p className="text-[#eee] text-[15px] mt-[10px]">
          Steal the show with incredible graphics and high-quality, stutter-free
          live streaming. Powered by the 8th generation<br></br> VIDIA Encoder
          (VENC), PeForce RTX 40 Series ushers in a new era of high-quality
          broadcasting with next-generation<br></br> AV1 encoding support,
          engineered to deliver greater efficiency than H.264, unlocking
          glorious streams at higher<br></br>
          resolutions. Plus, exclusive optimizations in your favorite live
          streaming apps give your audience your best—every time.
        </p>
        <div
          className="cursor-pointer mt-[24px] font-semibold text-white text-[18px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Improve Your Live Stream Quality</span>
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

export default TabContentNvidiaEncoder;
