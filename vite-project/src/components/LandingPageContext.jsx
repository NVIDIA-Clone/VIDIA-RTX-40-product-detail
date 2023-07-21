/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
//IMPORT THE UseState Hook and UseContext from  react
import { useState, useEffect, createContext } from 'react';

const LandingPageContext = createContext();

export const LandingPageProvider = ({ children }) => {
  //State
  const [data, setData] = useState({});

  useEffect(() => {
    const getProductData = async () => {
      const productRes = await fetch('http://localhost:8000/product');
      const productData = await productRes.json();
      console.log(productData);
      setData(productData);
    };
    getProductData();
  }, []);

  console.log(data);

  return (
    <LandingPageContext.Provider value={{ data }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContext;
