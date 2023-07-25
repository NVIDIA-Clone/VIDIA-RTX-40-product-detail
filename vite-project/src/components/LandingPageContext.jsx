/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useRef } from 'react';
//DATA BEING USED FOR REFERENCE
const items = [
  { name: 'TechRadar', comment: `More powerful than we even thought possible` },
  { name: 'PCWorld', comment: `Fantastically, futuristically fast` },
  {
    name: 'The Verge',
    comment: `I couldn't quite believe my eyes... The RTX 4090 is a beast`,
  },
  {
    name: 'Hardware Canucks',
    comment: `Creator apps... absolutely demolishing every other card`,
  },
  { name: 'KitGuru', comment: `A new efficiency champion` },
  { name: 'TweakTown', comment: `DLSS 3 is pure magic` },
];

const LandingPageContext = createContext();

export const LandingPageProvider = ({ children }) => {
  const [data, setData] = useState({});
  const accoladesList = useRef(items);

  useEffect(() => {
    const getProductData = async () => {
      const productRes = await fetch('http://localhost:8000/product');
      const productData = await productRes.json();
      setData(productData[0]);
    };
    getProductData();
  }, []);

  return (
    <LandingPageContext.Provider value={{ data, accoladesList }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContext;
