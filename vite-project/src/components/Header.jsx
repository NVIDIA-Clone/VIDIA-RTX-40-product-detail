import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isForYouOpen, setIsForYouOpen] = useState(false);
  const [isHardwareOpen, setIsHardwareOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProductClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the menu
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
    setIsForYouOpen(false);
    setIsProductsOpen(!isProductsOpen);
  };

  const handleSolutionsClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the menu
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsForYouOpen(false);
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const handleIndustriesClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the menu
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsForYouOpen(false);
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  const handleForYouClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the menu
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
    setIsForYouOpen(!isForYouOpen);
  };

  const handleArrowClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  const handleOffClick = (e) => {
    if (
      !e.target.closest(".menu-container") && // Check if the click is not within the menu container
      !e.target.closest(".modal") // Check if the click is not within any modal
    ) {
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
      setIsIndustriesOpen(false);
      setIsForYouOpen(false);
      closeMenu();
    }
  };

  const handleHardwareToggle = () => {
    setIsProductsOpen(true);
    setIsHardwareOpen(true);
    setIsSoftwareOpen(false);
  };

  const handleSoftwareToggle = () => {
    setIsProductsOpen(true);
    setIsSoftwareOpen(true);
    setIsHardwareOpen(false);
  };

  const getGreenBarStyles = () => {
    const labelWidth = 88; // Width of the label (assumed 88px)
    if (isHardwareOpen) {
      return { left: "475px", width: `${labelWidth}px` };
    } else isSoftwareOpen;
    return { left: `${labelWidth + 470}px`, width: `${labelWidth}px` };
  };

  const getMenuGreenBarStyles = () => {
    const menuItemWidth = 80; // Width of each menu item (adjust as needed)
    if (isProductsOpen) {
      return {
        width: `${menuItemWidth}px`,
        position: "relative",
        bottom: "-31px",
        left: "-335px",
      };
    } else if (isSolutionsOpen) {
      return {
        width: `${menuItemWidth}px`,
        position: "relative",
        bottom: "-31px",
        left: "-257px",
      };
    } else if (isIndustriesOpen) {
      return {
        width: `${menuItemWidth}px`,
        position: "relative",
        bottom: "-31px",
        left: "-167px",
      };
    } else if (isForYouOpen) {
      return {
        width: `${menuItemWidth}px`,
        position: "relative",
        bottom: "-31px",
        left: "-82px",
      };
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOffClick);
    return () => {
      document.removeEventListener("click", handleOffClick);
    };
  }, []);

  return (
    <>
      <header>
        <div className="mr-auto ml-auto static max-w-[100rem]">
          <nav className="h-[44px] w-full px-[11rem] bg-[#fff] font-Sig flex flex-row items-center ">
            {/* Logo */}
            <div id="logoContainer" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="40px"
              >
                <path
                  fill="#76b900"
                  d="M17.896 17.596v-2.862c.282-.018.565-.035.848-.035 7.844-.247 12.985 6.749 12.985 6.749s-5.548 7.702-11.5 7.702a7.297 7.297 0 0 1-2.315-.37v-8.693c3.056.37 3.674 1.714 5.494 4.77l4.081-3.427s-2.985-3.904-8.003-3.904a11.974 11.974 0 0 0-1.59.07m0-9.47v4.276l.848-.053c10.9-.371 18.02 8.94 18.02 8.94s-8.161 9.928-16.66 9.928c-.742 0-1.466-.07-2.19-.194v2.65c.6.07 1.219.124 1.82.124 7.913 0 13.638-4.046 19.184-8.816.92.742 4.682 2.527 5.46 3.304-5.265 4.416-17.543 7.968-24.504 7.968a17.513 17.513 0 0 1-1.944-.107v3.728h30.069V8.127zm0 20.653v2.261c-7.314-1.308-9.345-8.922-9.345-8.922s3.515-3.886 9.345-4.523v2.474h-.017c-3.057-.371-5.46 2.491-5.46 2.491s1.361 4.823 5.477 6.219m-12.985-6.98s4.328-6.394 13.003-7.065v-2.332C8.304 13.179 0 21.305 0 21.305s4.7 13.604 17.896 14.84v-2.473C8.215 32.47 4.911 21.8 4.911 21.8z"
                />
              </svg>
              <a className="h-[44px] w-[80px] font-extrabold py-2 ml-0.5 text-xl">
                VIDIA
              </a>
            </div>
            {/* Arrow Carrot or X */}
            <div className="flex items-center">
              <button
                id="menu-button"
                className={`h-[40px] transform transition-transform ${
                  isMenuOpen ? "translate-x-[22rem]" : "translate-x-0"
                }`}
                onClick={handleArrowClick}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    // X SVG
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#696969"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    // Arrow Carrot SVG
                    <path
                      d="M10 7L15 12L10 17"
                      stroke="#696969"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>
              {!isMenuOpen && (
                // Main Menu text
                <span className="text-black ml-2">Main Menu</span>
              )}
            </div>
            {/* Conditionally render the ul based on the isMenuOpen state */}
            {isMenuOpen && (
              <ul className="flex space-x-4 float-left">
                <li className="inline-block mr-[-4px]">
                  <label
                    className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
                    onClick={handleProductClick}
                  >
                    Products
                  </label>
                </li>
                <li>
                  <label
                    className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
                    onClick={handleSolutionsClick}
                  >
                    Solutions
                  </label>
                </li>
                <li>
                  <label
                    className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
                    onClick={handleIndustriesClick}
                  >
                    Industries
                  </label>
                </li>
                <li>
                  <label
                    className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
                    onClick={handleForYouClick}
                  >
                    For You
                  </label>
                </li>
                <li
                  className="block h-[3px] bg-[#76b900] transition-all duration-500 ease-linear"
                  style={getMenuGreenBarStyles()}
                ></li>
              </ul>
            )}
            {/* Space Between Divs */}
            <div className="flex-grow"></div>

            {/* Right-hand menu */}
            <ul className="flex gap-6 float-right">
              <li>
                <a className=" cursor-pointer text-[#696969] text-sm hover:text-[#1a1a1a]">
                  {" "}
                  Shop{" "}
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-[#696969] text-sm hover:text-[#1a1a1a]">
                  {" "}
                  Drivers{" "}
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-[#696969] text-sm hover:text-[#1a1a1a]">
                  {" "}
                  Support{" "}
                </a>
              </li>
            </ul>
            {/* Right hand icons */}
            <div className="flex pl-[3rem] gap-2 cursor-pointer">
              <svg
                width="30px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                  fill="#696969"
                />
              </svg>
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="#696969"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="#696969"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#696969"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </nav>
        </div>
        {/* Additional navigation bars */}
        {isProductsOpen && (
          <div onClick={handleOffClick}>
            {/* Top-most div (Products) */}
            <div
              className="absolute z-[552] w-[100%] h-[45px] bg-[#f7f7f7]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent clicks inside the modal from closing it
              }}
            >
              <div className="pt-[1px]">
                <div className="w-[1290px] max-w-[1290px] mr-auto ml-auto ">
                  <ul className="whitespace-nowrap m-0 pl-0 list-none">
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
              <div className="absolute z-[551] w-[100%] h-[391px] bg-[#eeeeee] mt-6">
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
              <div className="absolute z-[551] w-[100%] h-[499px] bg-[#eeeeee] mt-6">
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
        {isSolutionsOpen && (
          <div onClick={handleOffClick}>
            <div
              className="absolute z-[552] cursor-pointer w-[100%] h-[442px] bg-[#eeeeee]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent clicks inside the modal from closing it
              }}
            >
              <div className="w-[1320px] ml-[auto] mr-[auto]">
                <ul className="mb-0 mt-0 pb-[10px] pl-0 pt-[30px]">
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      AI and Data Science
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Inference
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Workflows
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Converstional AI
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Data Analytics
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Deep Learning Training
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Generative AI
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Machine Learning
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Prediction and Forecasting
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Speech AI
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      Data Center and Cloud Computing
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Accelerated Computing for Enterprise IT
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cloud Computing
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Colocation
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Computing
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
                          MLOps
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Hands-On Labs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      Design and Simulation
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
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
                          Metaverse
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
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Broadcast
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Hands-On Labs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      Robotics and Edge Computing
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI-on-5G
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Intelligent Video Analytics
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Industrial
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Deployment Management
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Edge Solutions
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Hands-On Lab
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      High-Performance Computing
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          HPC and AI
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Simulation and Modeling
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Scientific Visualization
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Hands-On Labs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                    <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      Self-Driving Vehicles
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Chauffeur
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Concierge
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          AI Training
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Simulation
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          HD Mapping
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cloud Gaming
                        </a>
                      </li>
                      <li className="pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Safety
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {isIndustriesOpen && (
          <div onClick={handleOffClick}>
            <div
              className="absolute z-[552] cursor-pointer w-[100%] h-[275px] bg-[#eeeeee]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent clicks inside the modal from closing it
              }}
            >
              <div className="flex gap-4 ml-[auto] mr-[auto] overflow-x-auto p-2 w-[1290px]">
                <ul className="mb-0 mt-0 pb-[10px] pt-[30px]">
                  <li className="w-[835.6px]">
                    <div className="min-h-[18px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5 ">
                      Industries
                    </div>
                    <ul className="columns-4 gap-[30px] leading-5">
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Overview
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Architecture, Engineering, Construction & Operations
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Automotive
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Consumer Internet
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Cybersecurity
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Energy
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Financial Services
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Healthcare and Life Sciences
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Higher Education
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Game Development
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Manufacturing
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Media and Entertainment
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          US Public Sector
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Restaurants
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Retail and CPG
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Robotics
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Smart Cities
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Supercomputing
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Telecommunications
                        </a>
                      </li>
                      <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          Transportation
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {isForYouOpen && (
          <div onClick={handleOffClick}>
            <div
              className="absolute z-[552] cursor-pointer font-Sig flex flex-row w-[100%] h-[45px] bg-[#eeeeee]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent clicks inside the modal from closing it
              }}
            >
              <div className="text-[#696969] text-md flex gap-4 ml-[auto] mr-[auto] overflow-x-auto p-2 w-[1290px]">
                <ul className="whitespace-nowrap ">
                  <li className=" table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">
                      Creatives/Designers
                    </label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">
                      Data Scientists
                    </label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">Developers</label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">Gamers</label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">
                      IT Professionals
                    </label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">Researchers</label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">Roboticists</label>
                  </li>
                  <li className="table-cell hover:text-[#1a1a1a]">
                    <label className="cursor-pointer p-2">Startups</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
