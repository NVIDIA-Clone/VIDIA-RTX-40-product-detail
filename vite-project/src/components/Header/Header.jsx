import { useState, useEffect } from "react";
import HeaderProducts from "./HeaderProducts";
import HeaderSolutions from "./HeaderSolutions";
import HeaderIndustries from "./HeaderIndustries";
import HeaderForYou from "./HeaderForYou";
import MainMenuAnimation from "./MainMenuAnimation";
import HeaderLogo from "./HeaderLogo";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

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
  const [isStartupsOpen, setIsStartupsOpen] = useState(false);

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

  const handleStartupsClick = (e) => {
    e.stopPropagation();
    setIsCreativesOpen(false);
    setIsDataSOpen(false);
    setIsDevOpen(false);
    setIsGamersOpen(false);
    setIsItProfessionalOpen(false);
    setIsResearcherOpen(false);
    setIsRoboticistOpen(false);
    setIsStartupsOpen(!isStartupsOpen);
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
    } else if (isStartupsOpen) {
      return {
        width: `${forYouWidth - 20}px`,
        position: "relative",
        left: "806px",
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
      <header className="font-Sig">
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
              <SearchBar />
              <Profile />
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
          getGreenBarStyles={getGreenBarStyles}
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
          handleStartupsClick={handleStartupsClick}
          getForYouGreenBar={getForYouGreenBar}
          isCreativesOpen={isCreativesOpen}
          isDataSOpen={isDataSOpen}
          isDevOpen={isDevOpen}
          isGamersOpen={isGamersOpen}
          isItProfessionalOpen={isItProfessionalOpen}
          isResearcherOpen={isResearcherOpen}
          isRoboticistOpen={isRoboticistOpen}
          isStartupsOpen={isStartupsOpen}
        />
      </header>
    </>
  );
}

export default Header;
