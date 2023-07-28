//IMPORTING THE USE CONTEXT HOOK TO BECOME UTILIZED
import { useContext } from "react";
//IMPORTING THE CONTEXT TO BE USED IN THIS PARTICULAR COMPONENT
import ArchitectureContext from "./ArchitectureContext";
import LandingPageContext from "../LandingPageContext.jsx";

const ArchitectureListItems = () => {
  const {
    architectureList,
    architectureListVer2,
    isScrolled,
    isFaded,
    isFadedOut,
  } = useContext(ArchitectureContext);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  const beforeScroll = () => {
    return (
      <>
        {/* MAIN CONTENT */}
        <div
          className={` ${
            isFadedOut
              ? "transition-opacity duration-1000 ease-out opacity-100"
              : "transition-opacity duration-1000 ease-in opacity-100"
          }`}
        >
          <div className="mx-[78px] pt-[120px] pb-[90px] flex flex-col items-center">
            <h2 className="text-white mb-[25px] font-bold text-[1.25rem] font-Sig">
              {architectureListVer2.current[0]}
            </h2>
            <div className="font-bold text-white font-Sig text-[2.25rem]">
              {architectureListVer2.current[1]}
            </div>
          </div>
          <div className="flex justify-between w-full">
            <img
              src="/images/architecture.png"
              alt="VIDIA processor/microchip"
            />
            <div className="flex flex-col justify-evenly">
              {architectureListVer2.current[2].content.map((bullet, index) => (
                <div className="" key={index}>
                  <h3 className="text-white mb-[10px] text-[1.25rem] font-bold">
                    {bullet.title}
                  </h3>
                  <p className="text-white py-[10px] ">{bullet.info}</p>
                </div>
              ))}

              <span
                className={`flex text-[1.3rem] text-[white] transition-transform duration-500 ease-in-out transform translate-x-0 ${
                  isHovered ? "translate-x-2" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {architectureListVer2.current[3].learn.text}
                <svg height={23} width={20}>
                  <path
                    d={architectureListVer2.current[3].learn.symbol.d}
                    strokeLinecap={
                      architectureListVer2.current[3].learn.symbol.linecap
                    }
                    stroke={
                      isHovered
                        ? "white"
                        : architectureListVer2.current[3].learn.symbol.stroke
                    }
                    strokeWidth={
                      architectureListVer2.current[3].learn.symbol.width
                    }
                    strokeLinejoin={
                      architectureListVer2.current[3].learn.symbol.linejoin
                    }
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const afterScroll = () => {
    return (
      <>
        {/* This is the Opening Page */}
        <div
          className={`${
            isFaded
              ? "transition-opacity duration-1000 ease-out opacity-100"
              : "transition-opacity duration-1000 ease-out opacity-100"
          }`}
        >
          {/* This is the Title */}
          <div className="flex flex-col pt-[120px] pb-[30px] items-center justify-center">
            <h2 className="text-white mb-[25px] text-xl font-bold">
              The Ultimate Platform for Gamers and Creators
            </h2>
            <p className="font-bold text-white text-[2.25rem]">
              Powered by PeForce RTX 40 Series and DLSS 3
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <img
              className="absolute z-0 opacity-30"
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
  // Conditional rendering based on isScrolled
  return isScrolled ? afterScroll() : beforeScroll();
};
export default ArchitectureListItems;
