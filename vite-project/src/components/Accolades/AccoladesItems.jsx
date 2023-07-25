/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import AccoladesItemsContext from './AccoladesItemsContext';
import Item from './Item';

const AccoladesItems = () => {
  const { list, selected } = useContext(AccoladesItemsContext);
  //   const listAll = list.current; //Array of Objects
  //   let selectedItem = selected; //Selected Object
  //   console.log(listAll, selectedItem);

  return (
    <>
      <div id="accolades" className="font-Sig">
        <Item />
      </div>
    </>
  );
};

export default AccoladesItems;
