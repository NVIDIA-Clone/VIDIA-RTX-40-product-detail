/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useRef } from 'react';
//DATA BEING USED FOR REFERENCE
const items = [
  {
    id: 1,
    name: 'TechRadar',
    comment: `More powerful than we even thought possible`,
    clicked: true,
  },
  {
    id: 2,
    name: 'PCWorld',
    comment: `Fantastically, futuristically fast`,
    clicked: false,
  },
  {
    id: 3,
    name: 'The Verge',
    comment: `I couldn't quite believe my eyes... The RTX 4090 is a beast`,
    clicked: false,
  },
  {
    id: 4,
    name: 'Hardware Canucks',
    comment: `Creator apps... absolutely demolishing every other card`,
    clicked: false,
  },
  {
    id: 5,
    name: 'KitGuru',
    comment: `A new efficiency champion`,
    clicked: false,
  },
  {
    id: 6,
    name: 'TweakTown',
    comment: `DLSS 3 is pure magic`,
    clicked: false,
  },
];
//CREATING THE CONTEXT TO BE USED
const LandingPageContext = createContext();

export const LandingPageProvider = ({ children }) => {
  //ESTABLISH STATES
  const [data, setData] = useState({});
  const accoladesList = useRef(items);
  //Added Hovers for arrowcarrots..
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //CREATE FUNCTIONS
  //FETCHING THE DATA FROM THE DATABASE
  useEffect(() => {
    const getProductData = async () => {
      // Change to deployed URL
      const productRes = await fetch('http://localhost:8000/product');
      const productData = await productRes.json();
      setData(productData[0]);
    };
    getProductData();
  }, []);
  // RETURNING THE PROPERTIES NEEDED
  return (
    <LandingPageContext.Provider
      value={{
        data,
        accoladesList,
        isHovered,
        setIsHovered,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContext;
