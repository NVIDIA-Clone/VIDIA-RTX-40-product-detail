//IMPORT THE UseState Hook and UseContext from  react
import { useState, useEffect, createContext } from 'react';

const landingPageContext = createContext();

export const landingPageProvider = ({ children }) => {
  //State
  const [data, setData] = useState({});

  useEffect(() => {
    const getProductData = async () => {
      const productRes = await fetch('');
      const productData = usersRes.data;
      setUsers(userData);
    };
    getUserData();
  }, []);
  return (
    <landingPageContext.Provider value={{ data }}>
      {children}
    </landingPageContext.Provider>
  );
};

export default landingPageContext;
