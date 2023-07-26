import { useContext } from "react";
import HeaderContext from "./HeaderContext";

const HeaderProducts = () => {
  const {
    isProductsOpen,
    isHardwareOpen,
    isSoftwareOpen,
    handleHardwareToggle,
    handleSoftwareToggle,
    handleOffClick,
    getGreenBarStyles,
    hardware,
    software,
  } = useContext(HeaderContext);

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
                  {hardware.map((category) => (
                    <li
                      key={category.title}
                      className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]"
                    >
                      <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                        {category.title}
                      </div>
                      <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="pt-[7px] pb-[7px] text-sm list-none"
                          >
                            <a className="text-[#666] block hover:text-[#1a1a1a]">
                              {item}
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
                  {software.map((category) => (
                    <li
                      key={category.title}
                      className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]"
                    >
                      <div className="h-[25px] min-h-[30px] font-bold border-b-2 border-solid border-[#ccc] pb-[5px] leading-5">
                        {category.title}
                      </div>
                      <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="pt-[7px] pb-[7px] text-sm list-none"
                          >
                            <a className="text-[#666] block hover:text-[#1a1a1a]">
                              {item}
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
        </div>
      )}
    </>
  );
};

export default HeaderProducts;
