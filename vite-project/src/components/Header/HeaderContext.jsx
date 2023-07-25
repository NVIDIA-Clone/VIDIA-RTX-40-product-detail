/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const HeaderContext = createContext();

// Define the App Provider component to wrap the entire application
export function HeaderProvider({ children }) {
  // State for the industries list
  const [industries, setIndustries] = useState([
    "Overview",
    "Architecture, Engineering, Construction & Operations",
    "Automotive",
    "Consumer Internet",
    "Cybersecurity",
    "Energy",
    "Financial Services",
    "Healthcare and Life Sciences",
    "Higher Education",
    "Game Development",
    "Manufacturing",
    "Media and Entertainment",
    "US Public Sector",
    "Restaurants",
    "Retail and CPG",
    "Robotics",
    "Smart Cities",
    "Supercomputing",
    "Telecommunications",
    "Transportation",
    // Add more industries here if needed
  ]);

  // State for the header component
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

  // Return the AppContext.Provider with the value prop set to the context object
  return (
    <HeaderContext.Provider
      value={{
        industries,
        setIndustries,
        isMenuOpen,
        setIsMenuOpen,
        isProductsOpen,
        setIsProductsOpen,
        isSolutionsOpen,
        setIsSolutionsOpen,
        isIndustriesOpen,
        setIsIndustriesOpen,
        isForYouOpen,
        setIsForYouOpen,
        isHardwareOpen,
        setIsHardwareOpen,
        isSoftwareOpen,
        setIsSoftwareOpen,
        isCreativesOpen,
        setIsCreativesOpen,
        isDataSOpen,
        setIsDataSOpen,
        isDevOpen,
        setIsDevOpen,
        isGamersOpen,
        setIsGamersOpen,
        isItProfessionalOpen,
        setIsItProfessionalOpen,
        isResearcherOpen,
        setIsResearcherOpen,
        isRoboticistOpen,
        setIsRoboticistOpen,
        isStartupsOpen,
        setIsStartupsOpen,
        handleProductClick,
        handleSolutionsClick,
        handleIndustriesClick,
        handleForYouClick,
        handleCreativeClick,
        handleDataClick,
        handleDevClick,
        handleGamerClick,
        handleItProfClick,
        handleResearcherClick,
        handleRoboticistClick,
        handleStartupsClick,
        handleArrowClick,
        handleHardwareToggle,
        handleSoftwareToggle,
        getGreenBarStyles,
        getMenuGreenBarStyles,
        getForYouGreenBar,
        // ... Add other state variables and functions from the context ...
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderContext;
