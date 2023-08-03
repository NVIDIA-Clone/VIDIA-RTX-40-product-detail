import { useContext } from "react";
import LandingPageContext from "./LandingPageContext.jsx";

const Reflex = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <>
      <div className="font-Sig float-left w-[100%] h-[940px] bg-black">
        <div className="bg-center bg-no-repeat bg-[url(/images/geforce-reflex-overwatch2-video-bg-2560-d.jpg)]">
          <div className="w-[990pt] ml-auto mr-auto pl-0 pr-0 text-center">
            <h2 className="text-[#ffffff] pt-[75px] text-[20px] font-bold text-center">
              NVIDIA Reflex
            </h2>
            <h3 className="text-[#ffffff] pt-[12px] text-[36px] font-bold text-center">
              Victory Measured in Milliseconds
            </h3>
            <p className="text-[#eee] leading-[1.6em] block font-normal text-[15px] pt-[10px] pb-[10px]">
              NVIDIA Reflex and GeForce RTX 40 Series GPUs deliver the lowest
              latency (ms) and best responsiveness for the ultimate<br></br>{" "}
              competitive advantage. Built to optimize and measure system
              latency, Reflex provides faster target acquisition, quicker
              <br></br> reaction times, and the best aim precision for
              competitive games.
            </p>
            <div
              className="pt-[18px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer text-[#ffffff] text-[16px] font-bold">
                Get a Competitive Advantage with Reflex
              </span>
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
            <div className="relative left-[18%] pt-[40px] w-[850px] h-[478px] ">
              <iframe
                src="https://www.youtube.com/embed/Yd7Wmgl2oow?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;loop=0&amp;controls=1&amp;enablejsapi=0&amp;rel=0"
                allowFullScreen=""
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube Video"
                loading="lazy"
                aria-label="YouTube Video"
                className="relative top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <img
              className="relative h-[106.85px] w-[190px] left-[86%] mt-[3rem] mb-[1rem]"
              src="/images/overwatch2-logo.svg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflex;
