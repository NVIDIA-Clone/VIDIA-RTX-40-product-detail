import PropTypes from "prop-types";

const HeaderProducts = ({
  isProductsOpen,
  isHardwareOpen,
  isSoftwareOpen,
  handleHardwareToggle,
  handleSoftwareToggle,
  handleOffClick,
  getGreenBarStyles,
}) => {
  return (
    <>
      {isProductsOpen && (
        <div onClick={handleOffClick}>
          {/* Top-most div (Products) */}
          <div
            className="absolute z-[552] w-[100%] h-[45px] bg-[#f7f7f7]"
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks inside the modal from closing it
            }}
          >
            <div className="cursor-pointer pt-[1px]">
              <div className="w-[1290px] max-w-[1290px] mr-auto ml-auto ">
                <ul className="pl-0 m-0 list-none whitespace-nowrap">
                  <li className="table-cell list-none">
                    <label
                      className="cursor-pointer text-[#696969] hover:text-[#1a1a1a] leading-[44px] m-0 pt-[10px] pr-[10px] pb-[11px] pl-[10px]"
                      onClick={handleHardwareToggle}
                    >
                      Hardware
                    </label>
                  </li>
                  <li className="table-cell list-none">
                    <label
                      className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
                      onClick={handleSoftwareToggle}
                    >
                      Software
                    </label>
                  </li>
                  <li
                    className="absolute bottom-0 block h-[3px] mt-[-3px] bg-[#76b900] transition-all duration-[.5s] ease-linear delay-0"
                    style={getGreenBarStyles()}
                  ></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nested divs (Hardware and Software) */}
          {isHardwareOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[391px] bg-[#eeeeee] mt-6">
              <div className="w-[1320px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Gaming and Creating
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce Graphics Cards
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Laptops
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          G-SYNC Monitors
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Studio
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          SHIELD TV
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Laptops and Workstations
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Laptops
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA RTX Desktop Workstations
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA RTX in Professional Laptops
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA RTX Data Science Workstations
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Cloud and Data Center
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Grace CPU
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          DGX Platform
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          EGX Platform
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          IGX Platform
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          HGX Platform
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA MGX
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA OVX
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Drive Sim
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Networking
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          DPU
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Ethernet
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          InfiniBand
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      GPUs
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA RTX / Quadro
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Center
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Titan RTX
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Embedded Systems
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Jetson
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          DRIVE AGX
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Clara AGX
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {isSoftwareOpen && (
            <div className="cursor-pointer absolute z-[551] w-[100%] h-[499px] bg-[#eeeeee] mt-6">
              <div className="w-[1318px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-4 pb-[10px] pl-0 pt-[30px] text-sm">
                  <li className="float-left mr-[30px] max-w-[404.8px] pb-[20px] w-[404.8px]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Application Framworks
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px] columns-2 gap-[30px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Inference - Triton
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
                          Metaverse Applications - Omniverse
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Recommender Systems - Merlin
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics - Isaac
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
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Apps and Tools
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Application Catalog
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
                          3D Workflows - Omniverse
                        </a>
                      </li>
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
                          NVIDIA RTX Experience
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA RTX Desktop Manager
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          RTX Accelerated Creative Apps
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Video Conferencing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA Workbench
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Gaming and Creating
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce NOW Cloud Gaming
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          GeForce Experience
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NVIDIA Broadcast App
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Animation - Machinima
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Modding - RTX Remix
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Studio
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Infastructure
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
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                      Cloud Services
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cloud Gaming
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Omniverse
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          NeMo
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          BioNeMo
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Picasso
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Riva Studio
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Private Registry
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Base Command
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Fleet Command
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

HeaderProducts.propTypes = {
  isProductsOpen: PropTypes.bool.isRequired,
  isHardwareOpen: PropTypes.bool.isRequired,
  isSoftwareOpen: PropTypes.bool.isRequired,
  handleHardwareToggle: PropTypes.func.isRequired,
  handleSoftwareToggle: PropTypes.func.isRequired,
  handleOffClick: PropTypes.func.isRequired,
  getGreenBarStyles: PropTypes.func.isRequired,
};

export default HeaderProducts;
