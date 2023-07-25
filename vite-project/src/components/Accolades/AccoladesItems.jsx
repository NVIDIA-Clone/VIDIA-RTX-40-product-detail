/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import LandingPageContext from './../LandingPageContext';
import Item from './Item';

const AccoladesItems = () => {
  const { accoladesList } = useContext(LandingPageContext);

  return (
    <>
      <div id="accolades" className="font-Sig">
        <Item />
      </div>
    </>
  );
};

export default AccoladesItems;
