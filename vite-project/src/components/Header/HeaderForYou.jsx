import { useContext } from "react";
import HeaderContext from "./HeaderContext";

const HeaderForYou = () => {
  const {
    isForYouOpen,
    handleOffClick,
    handleCreativeClick,
    handleDataClick,
    handleDevClick,
    handleGamerClick,
    handleItProfClick,
    handleResearcherClick,
    handleRoboticistClick,
    handleStartupsClick,
    getForYouGreenBar,
    isCreativesOpen,
    isDataSOpen,
    isDevOpen,
    isGamersOpen,
    isItProfessionalOpen,
    isResearcherOpen,
    isRoboticistOpen,
    isStartupsOpen,
    dataScientist,
  } = useContext(HeaderContext);

  return (
    <>
      {isForYouOpen && (
        <div onClick={handleOffClick}>
          <div
            className="absolute z-[552] cursor-pointer font-Sig flex flex-row w-[100%] h-[45px] bg-[#f7f7f7]"
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks inside the modal from closing it
            }}
          >
            <div className="text-[#696969] text-md flex gap-4 ml-[auto] mr-[auto] overflow-x-auto p-2 w-[1290px]">
              <ul className="whitespace-nowrap ">
                <li className=" table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleCreativeClick}
                  >
                    Creatives/Designers
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleDataClick}
                  >
                    Data Scientists
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleDevClick}
                  >
                    Developers
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleGamerClick}
                  >
                    Gamers
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleItProfClick}
                  >
                    IT Professionals
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleResearcherClick}
                  >
                    Researchers
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleRoboticistClick}
                  >
                    Roboticists
                  </label>
                </li>
                <li className="table-cell hover:text-[#1a1a1a]">
                  <label
                    className="p-2 cursor-pointer"
                    onClick={handleStartupsClick}
                  >
                    Startups
                  </label>
                </li>
                <li
                  className="block h-[3px] w-[168px] bg-[#76b900] transition-all duration-300 ease-linear"
                  style={getForYouGreenBar()}
                ></li>
              </ul>
            </div>
          </div>
          {isCreativesOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[255px] bg-[#eeeeee] mt-6">
              <div className="w-[1290px] ml-[auto] mr-[auto] pl-4">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[30px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      NVIDIA Studio
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Accelerated Apps
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Products
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Compare
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Shop
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[30px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Industries
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Media Entertainment
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Manufacturing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Architecture, Engineering, and Construction
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          <p>
                            <i>All Industries {">"}</i>
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[calc(32% - 8px)] max-w-[none] pb-[20px]">
                    <div className="h-[30px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Solutions
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px] columns-2">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Center/Cloud
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Laptops/Desktops
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Augmented and Virtual Reality
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Multi-Display
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Rendering
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Metaverse - Omniverse
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Graphics Virtualization
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Engineering Simulation
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {isDataSOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[635px] bg-[#eeeeee] mt-6">
              <div className="w-[1280px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  {dataScientist.map((category) => (
                    <li
                      key={category.title}
                      className={`float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]`}
                    >
                      <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                        {category.title}
                      </div>
                      <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={item}
                            className="pt-[7px] pb-[7px] text-sm list-none"
                          >
                            <a className="text-[#666] block hover:text-[#1a1a1a]">
                              {category.title === "Industries" &&
                              itemIndex === category.items.length - 1 ? (
                                <i>{item}</i>
                              ) : (
                                item
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {isDevOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[595px] bg-[#eeeeee] mt-6">
              <div className="w-[1290px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] w-[299.5px] max-w-[299.5px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Developer Resources
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Join the Developer Program
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NGC Catalog
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA NGC
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Technical Training
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          News
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Blog
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Forums
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Open Source Portal
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA GTC
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Startups
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          <i>Developer Home</i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[299.5px] max-w-[299.5px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Application Frameworks
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Interference - Triton
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Automotive - DRIVE
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cloud-AI Video Streaming - Maxine
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Computational Lithography - cuLitho
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cybersecurity - Morpheus
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Analytics - RAPIDS
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Healthcare - Clara
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          High-Performance Computing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Intelligent Video Analytics - Metropolis
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Large Language Models - NeMo Framework
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Metaverse Application - Omniverse
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Recommender Systems - Merlin
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics Isaac
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Speech AI - Riva
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Telecommunications - Aerial
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[299.5px] max-w-[299.5px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Top SDKs and Libraries
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Parallel Programming - CUDA Toolkit
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge AI applications - Jetpack
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          BlueField data processing - DOCA
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Accelerated Libraries - CUDA-X Libraries
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Deep Learning Inference - TensorRT
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Deep Learning Training - cuDNN
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Deep Learning Frameworks
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Conversational AI - NeMo
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Intelligent Video Analytics - DeepStream
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA Unreal Engine 4
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Ray Tracing - RTX
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Video DEcode/Encode
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Automotive - DriveWorks SDK
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {isGamersOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[323px] bg-[#eeeeee] mt-6">
              <div className="w-[1290px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] w-[404.8px] max-w-[404.8px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      GeForce
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px] columns-2">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce Graphics Cards
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Gaming Laptops
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          G-SYNC Monitors
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          RTX Games
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce Experience
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce Drivers
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Forums
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Support
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Shop
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      GeForce NOW
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Download
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Games
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Pricing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          FAQs
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Forums
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Support
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      SHIELD
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Compare
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Shop
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          FAQs
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Knowledge Base
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {isItProfessionalOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[377px] bg-[#eeeeee] mt-6">
              <div className="w-[1290px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Solutions
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Center On-Premises
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Computing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cloud Computing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Networking
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Virtualization
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Enterprise IT Solutions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Software
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Enterprise Suite
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cloud Native Support
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cluster Management
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Deployment Management
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Inference Serving - Triton
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          IO Acceleration
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Networking
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Virtual GPU
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Apps and Tools
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Center
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GPU Monitoring
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA Quadro Experience
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA RTX Desktop Manager
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Resources
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Center & IT Resources
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Technical Training and Certification
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Enterprise Support
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Drivers
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Security
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Product Documentation
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Forums
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {isResearcherOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[200px] bg-[#eeeeee] mt-6">
              <div className="w-[1290px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] w-[700px] max-w-[835.6px] pb-[20px]">
                    <ul className="leading-5 mt-0 pl-0 pt-[5px] columns-4">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA Research Home
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Research Areas
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Playground
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Video Highlights
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          COVID-19
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NGC Catalog
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Technical Training
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Startups
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          News
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Developer Blog
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Open Source Portal
                        </a>
                      </li>
                      <br></br>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cambridge-1 Supercomputer
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          3D Deep Learning Research
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {isRoboticistOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[329px] bg-[#eeeeee] mt-6">
              <div className="w-[1290px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Products
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Training - DGX
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Computing - EGX
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Embedded Computing - Jetson
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Software
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics - Isaac ROS
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Simulation - Isaac Sim
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          TAO Toolkit
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Vision AI - Deepstream SDK
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Deployment Management
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Synthetic Data Generation - Replicator
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Use Cases
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Healthcare and Life Sciences
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Manufacturing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Public Sector
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Retail
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          <i>More {">"}</i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] w-[190px] max-w-[190px] pb-[20px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Resources
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA Blog
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics Research
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Developer Blog
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Technical Training
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Startups
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {isStartupsOpen && <div></div>}
        </div>
      )}
    </>
  );
};

export default HeaderForYou;
