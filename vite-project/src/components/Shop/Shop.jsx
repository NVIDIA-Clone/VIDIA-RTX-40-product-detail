import { useState } from "react";
import Retail from "./Retail";
import Oem from "./Oem";

const Shop = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const sliderStyle = () => {
    const menuWidth = 10;
    if (activeTab === 1) {
      return {
        width: `${menuWidth + 50}px`,
        position: "absolute",
        left: "107px",
      };
    } else if (activeTab === 2) {
      return {
        width: `${menuWidth + 210}px`,
        position: "absolute",
        left: "170px", // Adjust the position based on your preference
      };
    }
  };

  return (
    <>
      <div className="bg-black float-left h-[390px] w-full text-center justify-center">
        <h1 className="text-white text-[36px] mt-[70px] font-bold">Shop</h1>
        <h3 className="text-white text-[36px] mt-[50px] font-bold">
          GeForce RTX 4090
        </h3>
        <h2 className="text-white text-[26px] mt-[20px] font-bold">
          Starting at $1599.00
        </h2>
        <button
          className="text-[18px] mt-[20px] p-[13px_15px] bg-[#76b900] text-[black] font-bold text-base hover:bg-[#91c733]"
          type="button"
        >
          See All Buying Options
        </button>
      </div>
      <div className="bg-black float-left h-[1250px] w-full text-center justify-center">
        <h1 className="text-white text-[31px] mt-[70px] font-bold">
          Also Available From
        </h1>
        <div
          className="relative gap-4 flex items-center justify-center mt-[40px] ml-auto mr-auto text-[15px] text-[#ffffff]"
          style={{ width: "500px" }} // Adjust the width of the container
        >
          <div
            className="absolute bottom-[-4px] w-[80px] block h-[2px] mt-[-1px] bg-[#76b900] overflow-hidden"
            style={sliderStyle()}
          ></div>

          <button
            className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            R/Etail
          </button>
          <button
            className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            OEM/System Builder Partners
          </button>
        </div>
        {activeTab === 1 ? <Oem /> : ""}
        {activeTab === 2 ? <Retail /> : ""}
      </div>
    </>
  );
};

export default Shop;
