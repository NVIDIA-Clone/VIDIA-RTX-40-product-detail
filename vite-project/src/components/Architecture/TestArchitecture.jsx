import { useContext } from "react";
import ArchitectureContext from "./ArchitectureContext";
import LandingPageContext from "../LandingPageContext.jsx";

const TestArchitecture = () => {
  const {
    architectureList,
    architectureListVer2,
    isScrolled,
    isFaded,
    setIsFaded,
    isFadedOut,
    setIsFadedOut,
  } = useContext(ArchitectureContext);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);
  return (
    <>
      <div
        id="containerDiv"
        className={`
          ${
            isScrolled
              ? "flex flex-col items-center justify-center animate-fadeOut duration-500"
              : "flex flex-col items-center justify-center opacity-100"
          }
          ${isFadedOut ? "opacity-0" : "opacity-100"}
        `}
      >
        <div
          id="titleDiv"
          className="absolute top-[100px] flex flex-col items-center z-5 pb-[20px]"
        >
          <h2 className="text-white mb-[25px] text-[1.25rem] font-bold font-Sig">
            {architectureListVer2.current[0]}
          </h2>
          <h2 className="text-white text-[2.25rem] font-bold font-Sig">
            {architectureListVer2.current[1]}
          </h2>
        </div>
        <div id="notTitle" className="">
          <div id="forImage">
            <img
              src="/images/architecture.png"
              alt=""
              className="absolute top-[230px] left-[350px] z-0"
            />
          </div>
          <div
            className="absolute flex flex-col justify-between right-[550px] mt-[30px] top-[250px]"
            id="list"
          >
            {architectureListVer2.current[2].content.map((item, index) => (
              <div key={index} className="py-[15px] ">
                <h3 className="text-white font-Sig text-[1.5rem] font-bold">
                  {item.title}
                </h3>
                <p className="text-white font-Sig text-[15px] py-[10px]">
                  {item.info}
                </p>
              </div>
            ))}
            <div
              className="flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="font-bold text-white font-Sig">
                Learn More About the Architecture
              </span>
              <button>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 -3 28 28"
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
        </div>
      </div>
      {/* stage 2 */}
      <div
        id="stage2container"
        className={
          isScrolled ? "flex flex-col animate-fadeIn duration-500" : "opacity-0"
        }
      >
        {/* This is the Title */}
        <div className="flex flex-col pt-[90px] pb-[30px] items-center justify-center">
          <h2 className="text-white mb-[25px] text-xl font-bold">
            The Ultimate Platform for Gamers and Creators
          </h2>
          <p className="font-bold text-white text-[2.25rem]">
            Powered by PeForce RTX 40 Series and DLSS 3
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="absolute z-0 opacity-30 "
            src="/images/architecture.png"
            alt="Microchip made by Vidia with a rainbow color scheme"
          />
        </div>
        {/* This is the Items */}
        <div className="flex flex-wrap w-full justify-evenly over">
          {architectureList.current.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-[45px] z-50 w-[295px]"
            >
              <div className="mb-[24px]">
                <svg width={64} height={64}>
                  <path
                    id={item.architectureSymbol.id}
                    d={item.architectureSymbol.d}
                    fill={item.architectureSymbol.fill}
                  ></path>
                </svg>
              </div>
              <p className="text-white py-[10px] mb-[8px] text-[1.5rem] font-bold text-center">
                {item.title}
                <br /> {item.subtitle}
              </p>
              <p className="text-white text-[1rem] mx-[17.5px] p-[10px] text-center">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TestArchitecture;
