/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

const LandingPageContext = createContext();

export const LandingPageProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getProductData = async () => {
      const productRes = await fetch("http://localhost:8000/product");
      const productData = await productRes.json();
      setData(productData[0]);
    };
    getProductData();
  }, []);

  // console.log(data.name); //Returns the object of the product

  return (
    <LandingPageContext.Provider value={{ data }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContext;
