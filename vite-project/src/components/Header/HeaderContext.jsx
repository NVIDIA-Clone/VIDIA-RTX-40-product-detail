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
  ]);

  //State for the solutions list
  const [solution, setSolution] = useState([
    {
      title: "AI and Data Science",
      items: [
        "Overview",
        "AI Inference",
        "AI Workflows",
        "Conversational AI",
        "Data Analytics",
        "Deep Learning Training",
        "Generative AI",
        "Machine Learning",
        "Prediction and Forecasting",
        "Speech AI",
      ],
    },
    {
      title: "Data Center and Cloud Computing",
      items: [
        "Overview",
        "Accelerated Computing for Enterprise IT",
        "Cloud Computing",
        "Colocation",
        "Edge Computing",
        "Networking",
        "Virtualization",
        "MLOps",
        "Hands-On Labs",
      ],
    },
    {
      title: "Design and Simulation",
      items: [
        "Overview",
        "Augmented and Virtual Reality",
        "Multi-Display",
        "Rendering",
        "Metaverse",
        "Graphics Virtualization",
        "Engineering Simulation",
        "Broadcast",
        "Hands-On Labs",
      ],
    },
    {
      title: "Robotics and Edge Computing",
      items: [
        "Overview",
        "AI-on-5G",
        "Intelligent Video Analytics",
        "Industrial",
        "Robotics",
        "Edge Deployment Management",
        "Edge Solutions",
        "Hands-On Labs",
      ],
    },
    {
      title: "High-Performance Computing",
      items: [
        "Overview",
        "HPC and AI",
        "Simulation and Modeling",
        "Scientific Visualization",
        "Hands-On Labs",
      ],
    },
    {
      title: "Self-Driving Vehicles",
      items: [
        "Overview",
        "Chauffeur",
        "Concierge",
        "AI Training",
        "Simulation",
        "HD Mapping",
        "Cloud Gaming",
        "Safety",
      ],
    },
    // Add more solution categories here if needed
  ]);

  const [hardware, setHardware] = useState([
    {
      title: "Gaming and Creating",
      items: [
        "GeForce Graphics Cards",
        "Laptops",
        "G-SYNC Monitors",
        "Studio",
        "SHIELD TV",
      ],
    },
    {
      title: "Laptops and Workstations",
      items: [
        "Laptops",
        "NVIDIA RTX Desktop Workstations",
        "NVIDIA RTX in Professional Laptops",
        "NVIDIA RTX Data Science Workstations",
      ],
    },
    {
      title: "Cloud and Data Center",
      items: [
        "Overview",
        "Grace CPU",
        "DGX Platform",
        "EGX Platform",
        "IGX Platform",
        "HGX Platform",
        "NVIDIA MGX",
        "NVIDIA OVX",
        "DRIVE Sim",
      ],
    },
    {
      title: "Networking",
      items: ["Overview", "DPU", "Ethernet", "InfiniBand"],
    },
    {
      title: "GPUs",
      items: ["GeForce", "NVIDIA RTX / Quadro", "Data Center", "Titan RTX"],
    },
    {
      title: "Embedded Systems",
      items: ["Jetson", "DRIVE AGX", "Clara AGX"],
    },
    // Add more hardware categories here if needed
  ]);

  const [software, setSoftware] = useState([
    {
      title: "Apps and Tools",
      items: [
        "Application Catalog",
        "NGC Catalog",
        "NVIDIA NGC",
        "3D Workflows - Omniverse",
        "Data Center",
        "GPU Monitoring",
        "NVIDIA RTX Experience",
        "NVIDIA RTX Desktop Manager",
        "RTX Accelerated Creative Apps",
        "Video Conferencing",
        "NVIDIA Workbench",
      ],
    },
    {
      title: "Gaming and Creating",
      items: [
        "Laptops",
        "GeForce NOW Cloud Gaming",
        "GeForce Experience",
        "NVIDIA Broadcast App",
        "Animation - Machinima",
        "Modding - RTX Remix",
        "Studio",
      ],
    },
    {
      title: "Infastructure",
      items: [
        "AI Enterprise Suite",
        "Cloud Native Support",
        "Cluster Management",
        "Edge Deployment Management",
        "IO Acceleration",
        "Networking",
        "Virtual GPU",
      ],
    },
    {
      title: "Cloud Services",
      items: [
        "Cloud Gaming",
        "Omniverse",
        "NeMo",
        "BioNeMo",
        "Picasso",
        "Riva Studio",
        "Private Registry",
        "Base Command",
        "Fleet Command",
      ],
    },
    // Add more software categories here if needed
  ]);

  const [dataScientist, setdataScientist] = useState([
    {
      title: "Industries",
      items: [
        "Financial Services",
        "Consumer Internet",
        "Healthcare",
        "Higher Education",
        "Retail",
        "Public Sector",
        "All Industries  >",
      ],
    },
    {
      title: "Solutions",
      items: [
        "AI Inference",
        "AI Workflows",
        "Conversational AI",
        "Data Analytics",
        "Deep Learning Training",
        "Generative AI",
        "Machine Learning",
        "Prediction and Forecasting",
        "Speech AI",
      ],
    },
    {
      title: "Software",
      items: [
        "AI Enterprise Suite",
        "AI Inference - Triton",
        "AI Workflows",
        "Avatar - Tokkio",
        "Cybersecurity - Morpheus",
        "Data Analytics - RAPIDS",
        "Apache Spark",
        "Workbench",
        "Large Language Models - NeMo Framwork",
        "Logistics and Route Optimization - cuOpt",
        "Recommender Systems - Merlin",
        "Speech AI - Riva",
        "NGC Software Catalog",
        "Open Software Catalog",
      ],
    },
    {
      title: "Products",
      items: ["PC", "Laptops & Workstations", "Data Center", "Cloud"],
    },
    {
      title: "Resources",
      items: [
        "Professional Services",
        "Technical Training",
        "Startups",
        "AI Accelerator Program",
        "Content Library",
        "NVIDIA Research",
        "Developer Blog",
        "Kaggle Grandmasters",
      ],
    },
    // Add more software categories here if needed
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
        solution,
        setSolution,
        hardware,
        setHardware,
        software,
        setSoftware,
        dataScientist,
        setdataScientist,
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
