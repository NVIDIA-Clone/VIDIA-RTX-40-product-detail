import { useState } from "react";

const Creative = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const sliderStyle = () => {
    const menuWidth = 200;
    if (activeTab === 1) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "222px",
      };
    } else if (activeTab === 2) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "428px",
      };
    } else if (activeTab === 3) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "640px",
      };
    } else if (activeTab === 4) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "874px",
      };
    } else if (activeTab === 5) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "1090px",
      };
    }
  };

  return (
    <>
      <div className="float-left w-full">
        <div className="bg-[url(/images/creative-background-bb1200-d.jpg)] bg-center h-[1200.57px] bg-no-repeat pt-[105px] pb-[105px]">
          <h2 className="text-[#ffffff] font-Sig text-center text-[36px] font-bold">
            Top Tools for the Creative Trade
          </h2>
          <div className="h-[30px] w-[1320px]"></div>
          <div className="flex gap-16 mt-[18px] ml-[18%] items-center font-semibold text-[18px] text-[#ffffff] ">
            <div
              className="relative bottom-[-24px] block h-[3px] mt-[-3px] bg-[#76b900] z-[50px]"
              style={sliderStyle()}
            ></div>
            <button
              className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              NVIDIA Studio
            </button>

            <button
              className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              NVIDIA Encoder
            </button>
            <button
              className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              NVIDIA Broadcast
            </button>
            <button
              className={`tab-btn ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              NVIDIA Omniverse
            </button>
            <button
              className={`tab-btn ${activeTab === 5 ? "active" : ""}`}
              onClick={() => handleTabClick(5)}
            >
              NVIDIA Canvas
            </button>
          </div>
          <hr className="float-left ml-[29%] w-[1050px] mt-2 border-gray-300" />
          <div className="absolute slider" style={sliderStyle()}></div>
          <div className="bg-[url(/images/nvidia-studio.jpg)] bg-contain ml-[33%] mt-[3rem] w-[850px] h-[478px]"></div>
          <div className="float-left font-Sig text-left ml-[33%] mt-[14px]">
            <h3 className="font-semibold text-white text-[22px]">
              Nvidia Studio
            </h3>
            <h4 className="text-white text-[36px] mt-[10px] font-bold">
              Your Creativity
              <sup>AI</sup>
            </h4>
            <p className="text-[#eee] text-[15px] mt-[10px]">
              Take your creative projects to the next level with NVIDIA Studio.
              Powered by new dedicated hardware, RTX 40 Series<br></br> unlocks
              unmatched performance in 3D rendering, video editing, and graphic
              design. Experience feature-rich RTX<br></br> accelerations in top
              creative apps, world-class NVIDIA Studio drivers engineered to
              provide maximum stability, and a suite<br></br> of exclusive tools
              that harness the power of RTX for AI-assisted creative workflows.
            </p>
            <div className="mt-[24px] font-semibold text-white text-[18px]">
              <span>Accelerate Your Creativity</span>
              <button>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 30 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#76b900"
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
    </>
  );
};

export default Creative;
