import { useState, useEffect } from "react";
import HeaderProducts from "./HeaderComponents/HeaderProducts";
import HeaderSolutions from "./HeaderComponents/HeaderSolutions";
import HeaderIndustries from "./HeaderComponents/HeaderIndustries";
import HeaderForYou from "./HeaderComponents/HeaderForYou";
import MainMenuAnimation from "./HeaderComponents/MainMenuAnimation";
import HeaderLogo from "./HeaderComponents/HeaderLogo";
import MainMenu from "./HeaderComponents/MainMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isForYouOpen, setIsForYouOpen] = useState(false);
  const [isHardwareOpen, setIsHardwareOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isCreativesOpen, setIsCreativesOpen] = useState(false);
  const [isDataSOpen, setIsDataSOpen] = useState(false);
  const [isDevOpen, setIsDevOpen] = useState(false);
  const [isGamersOpen, setIsGamersOpen] = useState(false);
  const [isItProfessionalOpen, setIsItProfessionalOpen] = useState(false);
  const [isResearcherOpen, setIsResearcherOpen] = useState(false);
  const [isRoboticistOpen, setIsRoboticistOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // If the menu is open, close it and the corresponding divs
      setIsMenuOpen(false);
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
      setIsIndustriesOpen(false);
      setIsForYouOpen(false);
    } else {
      // If the menu is closed, just open it
      setIsMenuOpen(true);
    }
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

  const handleCreativeClick = (e) => {
    e.stopPropagation();
    setIsDataSOpen(false);
    setIsDevOpen(false);
    setIsGamersOpen(false);
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(false);
    setIsRoboticistOpen(false);
    setIsCreativesOpen(!isCreativesOpen);
  };

  const handleDataClick = (e) => {
    e.stopPropagation();
    setIsDevOpen(false);
    setIsGamersOpen(false);
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(false);
    setIsRoboticistOpen(false);
    setIsCreativesOpen(false);
    setIsDataSOpen(!isDataSOpen);
  };

  const handleDevClick = (e) => {
    e.stopPropagation();
    setIsGamersOpen(false);
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(false);
    setIsRoboticistOpen(false);
    setIsCreativesOpen(false);
    setIsDataSOpen(false);
    setIsDevOpen(!isDevOpen);
  };

  const handleGamerClick = (e) => {
    e.stopPropagation();
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(false);
    setIsRoboticistOpen(false);
    setIsCreativesOpen(false);
    setIsDataSOpen(false);
    setIsDevOpen(false);
    setIsGamersOpen(!isGamersOpen);
  };

  const handleItProfClick = (e) => {
    e.stopPropagation();
    setIsResearcherOpen(false);
    setIsRoboticistOpen(false);
    setIsCreativesOpen(false);
    setIsDataSOpen(false);
    setIsDevOpen(false);
    setIsGamersOpen(false);
    setIsItProfessionalOpen(!isItProfessionalOpen);
  };

  const handleResearcherClick = (e) => {
    e.stopPropagation();
    setIsRoboticistOpen(false);
    setIsCreativesOpen(false);
    setIsDataSOpen(false);
    setIsDevOpen(false);
    setIsGamersOpen(false);
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(!isResearcherOpen);
  };

  const handleRoboticistClick = (e) => {
    e.stopPropagation();
    setIsCreativesOpen(false);
    setIsDataSOpen(false);
    setIsDevOpen(false);
    setIsGamersOpen(false);
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(false);
    setIsRoboticistOpen(!isRoboticistOpen);
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
      return {
        width: `${labelWidth}px`,
        position: "relative",
        left: "2px",
      };
    } else if (isSoftwareOpen) {
      return {
        left: `85px`,
        width: `${labelWidth}px`,
        position: "relative",
      };
    }
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

  const getForYouGreenBar = () => {
    const forYouWidth = 104; //Width of menu item
    if (isCreativesOpen) {
      return {
        width: `${forYouWidth + 58}px`,
        position: "relative",
        left: "0px",
        bottom: "-10px",
      };
    } else if (isDataSOpen) {
      return {
        width: `${forYouWidth + 8}px`,
        position: "relative",
        left: "174px",
        bottom: "-10px",
      };
    } else if (isDevOpen) {
      return {
        width: `${forYouWidth - 15}px`,
        position: "relative",
        left: "298px",
        bottom: "-10px",
      };
    } else if (isGamersOpen) {
      return {
        width: `${forYouWidth - 44}px`,
        position: "relative",
        left: "400px",
        bottom: "-10px",
      };
    } else if (isItProfessionalOpen) {
      return {
        width: `${forYouWidth + 22}px`,
        position: "relative",
        left: "473px",
        bottom: "-10px",
      };
    } else if (isResearcherOpen) {
      return {
        width: `${forYouWidth}px`,
        position: "relative",
        left: "605px",
        bottom: "-10px",
      };
    } else if (isRoboticistOpen) {
      return {
        width: `${forYouWidth - 12}px`,
        position: "relative",
        left: "714px",
        bottom: "-10px",
      };
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOffClick);
    return () => {
      document.removeEventListener("click", handleOffClick);
    };
  });

  return (
    <>
      <header>
        <div className="cursor-pointer mr-auto ml-auto static max-w-[100rem]">
          <nav className="h-[44px] w-full px-[11rem] bg-[#fff] font-Sig flex flex-row items-center">
            <HeaderLogo />
            <MainMenuAnimation
              isMenuOpen={isMenuOpen}
              handleArrowClick={handleArrowClick}
            />
            <MainMenu
              isMenuOpen={isMenuOpen}
              handleProductClick={handleProductClick}
              handleSolutionsClick={handleSolutionsClick}
              handleIndustriesClick={handleIndustriesClick}
              handleForYouClick={handleForYouClick}
              getMenuGreenBarStyles={getMenuGreenBarStyles}
            />
            {/* Space Between Divs */}
            <div className="flex-grow"></div>

            {/* Right-hand menu */}
            <ul className="flex float-right gap-6">
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
        <HeaderProducts
          isProductsOpen={isProductsOpen}
          isHardwareOpen={isHardwareOpen}
          isSoftwareOpen={isSoftwareOpen}
          handleHardwareToggle={handleHardwareToggle}
          handleSoftwareToggle={handleSoftwareToggle}
          handleOffClick={handleOffClick}
          getGreenBarStyles={getGreenBarStyles} // Pass getGreenBarStyles
        />
        <HeaderSolutions
          isSolutionsOpen={isSolutionsOpen}
          handleOffClick={handleOffClick}
        />
        <HeaderIndustries
          isIndustriesOpen={isIndustriesOpen}
          handleOffClick={handleOffClick}
        />
        <HeaderForYou
          isForYouOpen={isForYouOpen}
          handleOffClick={handleOffClick}
          handleCreativeClick={handleCreativeClick}
          handleDataClick={handleDataClick}
          handleDevClick={handleDevClick}
          handleGamerClick={handleGamerClick}
          handleItProfClick={handleItProfClick}
          handleResearcherClick={handleResearcherClick}
          handleRoboticistClick={handleRoboticistClick}
          getForYouGreenBar={getForYouGreenBar}
          isCreativesOpen={isCreativesOpen}
          isDataSOpen={isDataSOpen}
          isDevOpen={isDevOpen}
          isGamersOpen={isGamersOpen}
          isItProfessionalOpen={isItProfessionalOpen}
          isResearcherOpen={isResearcherOpen}
          isRoboticistOpen={isRoboticistOpen}
        />
      </header>
    </>
  );
}

export default Header;
