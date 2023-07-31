import { useContext } from "react";
import AdditionalContext from "./AdditionalContext";
import LandingPageContext from "../LandingPageContext";

const AdditionalList = () => {
  const { list } = useContext(AdditionalContext);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);
  return (
    <div className="flex flex-col items-center w-[80vw] max-w-[1230px]">
      <div className="py-[8px] px-[15px]">
        <h2 className="text-[2.25rem] m-[2vh_0] font-Sig font-bold">
          {list[0].mainTitle}
        </h2>
      </div>
      {/* 8K Container */}
      <div className="w-full mt-[5.5%]">
        <img src={list[1].pic} alt="" className=" absolute z-0 w-[80vw] max-w-[1230px] h-[300px]" />
        
          <div
            id="text-container"
            className="relative py-[45px] px-[15px] pl-[30px] flex flex-col w-full items-start h-fit"
          >
            <h1 className="z-50 pb-[10px] font-bold text-[1.5rem] font-Sig text-white">
              {list[1].hdrTitle}
            </h1>
            <p className="pt-[10px] pb-[30px] text-[15px] font-Sig text-white w-1/2">
              {list[1].text}
            </p>

            <div
              className="flex items-center pb-[30px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-bold text-[18px]">
                Explore the pinnacle of Gaming
              </p>
              <svg
                width="30px"
                height="30px"
                viewBox="0 -3 30 30"
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
            </div>
          </div>
      </div>
      {/* Cards */}
      <div
        id="cards-container"
        className="grid grid-cols-3 place-content-evenly gap-[2vw] pt-[30px]"
      >
        {list[2].cards.map((elem, index) => (
          <div key={index} className="bg-[black] pb-[45px] h-full w-full">
            <div id="card-image-container" className="">
              <img src={elem.picture} alt={elem.title} width={800} />
            </div>
            <div
              id="card-image-text-container"
              className="flex flex-col items-start px-[24px] h-3/5"
            >
              <h1 className="text-[1.5rem] font-Sig font-bold pt-[10px] pb-[10px] text-white">
                {elem.title}
              </h1>
              <div
                id="test"
                className="flex flex-col justify-between flex-grow px-30px"
              >
                <p className="text-[15px] font-Sig pt-[10px] pb-[30px] font-medium text-[#EEE]">
                  {elem.info}
                </p>
                <div
                  className="flex items-center pb-[30px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="font-bold font-Sig text-[1.125rem]">
                    {elem.explore.explore}
                  </p>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 -3 30 30"
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
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-[black] h-full">
          <div id="card-image-container" className="">
            <img src={list[3].picture} alt={list[3].title} width={1000} />
          </div>
          <div
            id="card-image-text-container"
            className="px-[24px] flex flex-col items-start"
          >
            <h1 className="font-bold font-Sig text-[1.5rem] pt-[30px] pb-[10px]">
              {list[3].title}
            </h1>
            <p className="font-Sig text-[15px] font-medium">{list[3].info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalList;
