import { useState } from "react";
import TabContentNvidiaStudio from "./TabContentNvidiaStudio";
import TabContentNvidiaBroadcast from "./TabContentNvidiaBroadcast";
import TabContentNvidiaEncoder from "./TabContentNvidiaEncoder";
import TabContentNvidiaOmniverse from "./TabContentNvidiaOmniverse";
import TabContentNvidiaCanvas from "./TabContentNvidiaCanvas";
import { Routes, Route, Link } from "react-router-dom";

const Creative = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const sliderStyle = () => {
    const menuWidth = 208;
    if (activeTab === 1) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "0px",
      };
    } else if (activeTab === 2) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "220px",
      };
    } else if (activeTab === 3) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "440px",
      };
    } else if (activeTab === 4) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "670px",
      };
    } else if (activeTab === 5) {
      return {
        width: `${menuWidth}px`,
        position: "relative",
        left: "872px",
      };
    }
  };

  return (
    <>
      <div className="float-left w-full bg-black">
        <div className=" bg-[url(/images/creative-background-bb1200-d.jpg)] bg-center h-[1200.57px] bg-no-repeat pt-[105px] pb-[105px]">
          <h2 className="text-[#ffffff] font-Sig text-center text-[36px] font-bold">
            Top Tools for the Creative Trade
          </h2>
          <div className="space-x-16 w-[1080px] mt-[40px] ml-auto mr-auto items-center font-semibold text-[18px] text-[#ffffff] ">
            <div
              className="relative bottom-[-33px] block h-[5px] mt-[-3px] bg-[#76b900] z-[500px]"
              style={sliderStyle()}
            ></div>
            <Link
              to="/"
              className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              NVIDIA Studio
            </Link>

            <Link
              to="/encoder"
              className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              NVIDIA Encoder
            </Link>
            <Link
              to="/broadcast"
              className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              NVIDIA Broadcast
            </Link>
            <Link
              to="/omniverse"
              className={`tab-btn ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              NVIDIA Omniverse
            </Link>
            <Link
              to="/canvas"
              className={`tab-btn ${activeTab === 5 ? "active" : ""}`}
              onClick={() => handleTabClick(5)}
            >
              NVIDIA Canvas
            </Link>
          </div>
          <div className="relative content-center w-full">
            <hr className=" ml-auto mr-auto w-[1080px] mt-1.5 border-gray-300" />
          </div>
          <div className="absolute slider" style={sliderStyle()}></div>
          <Routes>
            <Route path="/" element={<TabContentNvidiaStudio />} />
            <Route path="/encoder" element={<TabContentNvidiaEncoder />} />
            <Route path="/broadcast" element={<TabContentNvidiaBroadcast />} />
            <Route path="/omniverse" element={<TabContentNvidiaOmniverse />} />
            <Route path="/canvas" element={<TabContentNvidiaCanvas />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Creative;
