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
      <div className="bg-black float-left block h-[390px] w-full text-center justify-center">
        <h1 className="text-white text-[36px] mt-[70px] font-bold">Shop</h1>
        <h3 className="text-white text-[36px] mt-[50px] font-bold">
          PeForce RTX 4090
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
      <div className="flex flex-col items-stretch w-full h-full text-center bg-black">
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
        {activeTab === 1 ? <Retail /> : ""}
        {activeTab === 2 ? <Oem /> : ""}
      </div>
      <div className="bg-black w-full flex justify-center h-[100.8px]">
        <hr className="w-[80%] h-0.5 mt-[5%]" />
      </div>
      <div className="bg-black w-full text-center h-[120px]">
        <div className="w-[850px] mr-auto ml-auto pt-[40px]">
          <p className="text-[11px] leading-normal text-[#7a7a7a]">
            © 2023 VIDIA Corporation. VIDIA, the VIDIA logo, PeForce, PeForce
            Experience, PeForce RTX, and P-SYNC are<br></br> registered
            trademarks and/or trademarks of VIDIA Corporation in the United
            States and other countries. All other<br></br> trademarks and
            copyrights are the property of their respective owners. Built by:
            Autumn, Bao, Ben, Joey, & Nathan
          </p>
        </div>
      </div>
      <div className="float-left h-[380px] pt-[6%] justify-center bg-black w-full flex flex-row gap-[10rem]">
        <div className="w-[328.5px]">
          <h1 className="font-bold text-[23px] text-white pb-[10px]">
            Products
          </h1>
          <hr />
          <li className="mb-[5px] mr-[25px] pt-[10px]">
            <a className="text-[#76b900] cursor-pointer">Graphics Cards</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">Laptops</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">P-SYNC Monitors</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">
              PeForce NOW Cloud Gaming
            </a>
          </li>
        </div>
        <div className="w-[328.5px]">
          <h2 className="font-bold text-[23px] text-white pb-[10px]">
            Community & News
          </h2>
          <hr />
          <li className="mb-[5px] mr-[25px] pt-[10px]">
            <a className="text-[#76b900] cursor-pointer">Latest News</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">Community Forums</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">#SHOWWITHPEFORCE</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">Community Portal</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">Developer Resources</a>
          </li>
        </div>
        <div className="w-[328.5px]">
          <h3 className="font-bold text-[23px] text-white pb-[10px]">
            Support
          </h3>
          <hr />
          <li className="mb-[5px] mr-[25px] pt-[10px]">
            <a className="text-[#76b900] cursor-pointer">Drivers</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">Purchase Support</a>
          </li>
          <li className="mb-[5px] mr-[25px]">
            <a className="text-[#76b900] cursor-pointer">Technical Support</a>
          </li>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-stretch w-full h-full bg-black pl-[65.5%] pb-[5%]">
        <a className="text-[#7a7a7a] text-[16px] pt-[10px]">Follow PeForce</a>
        <a id="facebook" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="46"
            viewBox="0 0 22 46"
          >
            <path
              d="M28.638,16.072V12.109a8.484,8.484,0,0,1,.085-1.381,2.648,2.648,0,0,1,.387-0.963,1.579,1.579,0,0,1,.974-0.656,7.1,7.1,0,0,1,1.791-.182h4.066V1h-6.5Q23.8,1,21.335,3.609T18.872,11.3v4.773H14V24h4.869V47h9.766V24h6.5L36,16.072h-7.36Z"
              transform="translate(-14 -1)"
              fill="#3a3a3a"
            ></path>
          </svg>
        </a>
        <a id="twitter" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="37.375"
            viewBox="0 0 46 37.375"
          >
            <path
              d="M47,9.749a18.8,18.8,0,0,1-5.429,1.461,9.159,9.159,0,0,0,4.145-5.2,18.5,18.5,0,0,1-5.985,2.278,9.449,9.449,0,0,0-13.56-.219,9.092,9.092,0,0,0-2.759,6.673A10.469,10.469,0,0,0,23.65,16.9,26.266,26.266,0,0,1,12.8,14a26.733,26.733,0,0,1-8.6-6.965,9.243,9.243,0,0,0-1.284,4.76,9.192,9.192,0,0,0,1.139,4.5,9.421,9.421,0,0,0,3.065,3.358,9.35,9.35,0,0,1-4.262-1.2v0.117a9.117,9.117,0,0,0,2.145,6,9.273,9.273,0,0,0,5.415,3.256,9.757,9.757,0,0,1-2.481.321A12.021,12.021,0,0,1,6.164,28a9.45,9.45,0,0,0,8.816,6.541,18.457,18.457,0,0,1-11.706,4.03A20.123,20.123,0,0,1,1,38.456,26.177,26.177,0,0,0,15.476,42.69,27.548,27.548,0,0,0,24.9,41.1a23.966,23.966,0,0,0,7.532-4.264,28.514,28.514,0,0,0,5.386-6.147,27.4,27.4,0,0,0,3.371-7.257A26.806,26.806,0,0,0,42.3,15.852q0-.818-0.029-1.227A19.746,19.746,0,0,0,47,9.749Z"
              transform="translate(-1 -5.313)"
              fill="#3a3a3a"
            ></path>
          </svg>
        </a>
        <a id="insta" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
          >
            <path
              d="M45.264,2.737A5.678,5.678,0,0,0,41.1,1H6.9A5.68,5.68,0,0,0,2.737,2.737,5.677,5.677,0,0,0,1,6.9V41.1a5.677,5.677,0,0,0,1.737,4.163A5.679,5.679,0,0,0,6.9,47H41.1A5.932,5.932,0,0,0,47,41.1V6.9A5.678,5.678,0,0,0,45.264,2.737ZM17.517,17.576a9.037,9.037,0,0,1,6.514-2.62,9.074,9.074,0,0,1,6.544,2.621,8.756,8.756,0,0,1,0,12.668,9.072,9.072,0,0,1-6.544,2.621,9.038,9.038,0,0,1-6.514-2.621A8.755,8.755,0,0,1,17.517,17.576Zm24.273,22.3a1.744,1.744,0,0,1-.539,1.3,1.784,1.784,0,0,1-1.288.524H7.948a1.791,1.791,0,0,1-1.827-1.827V20.466h4.222a12.892,12.892,0,0,0-.6,3.923A13.151,13.151,0,0,0,13.938,34.2a13.993,13.993,0,0,0,10.093,4.058A14.4,14.4,0,0,0,31.219,36.4a13.979,13.979,0,0,0,5.211-5.047,13.269,13.269,0,0,0,1.917-6.963,12.9,12.9,0,0,0-.6-3.923h4.043V39.873h0Zm0-26.744A2.046,2.046,0,0,1,39.723,15.2H34.513a2.045,2.045,0,0,1-2.066-2.066V8.188a2.011,2.011,0,0,1,.6-1.453,1.972,1.972,0,0,1,1.467-.614h5.211a1.971,1.971,0,0,1,1.468.614,2.009,2.009,0,0,1,.6,1.453v4.941Z"
              transform="translate(-1 -1)"
              fill="#3a3a3a"
            ></path>
          </svg>
        </a>
        <a id="youtube" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38.125"
            height="46"
            viewBox="0 0 576 512"
          >
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              fill="#3a3a3a"
            ></path>
          </svg>
        </a>
        <a id="twitch" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44.688"
            height="46"
            viewBox="0 0 44.688 46"
          >
            <path
              d="M12.85,46.954v-5.5H1.689c-0.011-.23-0.027-0.409-0.027-0.587q0-15.52.005-31.04a2.92,2.92,0,0,1,.147-0.9C2.636,6.434,3.48,3.944,4.3,1.445A0.528,0.528,0,0,1,4.9,1q20.487,0.016,40.973.009h0.458V1.588q0,13.376.008,26.752a1.14,1.14,0,0,1-.372.89Q40.024,35.139,34.1,41.071a1.134,1.134,0,0,1-.892.369c-2.4-.017-4.808,0-7.212-0.018a1.4,1.4,0,0,0-1.117.45c-1.586,1.618-3.195,3.213-4.809,4.8a0.991,0.991,0,0,1-.6.3c-2.148.021-4.3,0.012-6.445,0.01A1.206,1.206,0,0,1,12.85,46.954ZM8.6,5.148V34.514H18.4V40.08c0.152-.144.236-0.221,0.318-0.3,1.654-1.646,3.311-3.289,4.955-4.945a1.024,1.024,0,0,1,.8-0.331q5.14,0.017,10.281-.007a1.175,1.175,0,0,0,.744-0.308c2.136-2.1,4.249-4.23,6.38-6.338a1.02,1.02,0,0,0,.325-0.8Q42.2,16.353,42.2,5.658V5.148H8.6Zm15.381,8.46V26.02H19.835V13.608h4.144ZM35.128,26.036h-4.07V13.607h4.07V26.036Z"
              transform="translate(-1.656 -1)"
              fill="#3a3a3a"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Shop;
