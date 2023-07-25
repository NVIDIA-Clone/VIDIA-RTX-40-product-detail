/* eslint-disable react/prop-types */
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

import { useRef, createContext } from 'react';

const AccoladesItemsContext = createContext();

export const AccoladesItemsProvider = ({ children }) => {
  //State
  const list = useRef(items); //Lists  out an array of objects

  return (
    <>
      <AccoladesItemsContext.Provider value={{ list }}>
        {children}
      </AccoladesItemsContext.Provider>
    </>
  );
};

export default AccoladesItemsContext;
