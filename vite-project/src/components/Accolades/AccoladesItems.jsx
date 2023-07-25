/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import AccoladesItemsContext from './AccoladesItemsContext';
import Item from './Item';

const AccoladesItems = () => {
  const list = useContext(AccoladesItemsContext);
  const listAll = list.list.current;
  //   console.log(listAll); //List of current arrays

  //   function handleClick(e) {
  //     console.log(e);
  //   }
  return (
    <>
      <div id="accolades" className="font-Sig">
        <blockquote className="text-[36px]">
          <p>{listAll[0].comment}</p>
        </blockquote>
        <h2 className="text-[15px]">- {listAll[0].name}</h2>
        <Item />
        {/* <ol id="accolades-selector" className="flex p-[0_16vw] mt-[10px]">
          <li
            className="w-3 h-3 rounded-full 
                       bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
          <li
            className="w-3 h-3 rounded-full 
                       bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
          <li
            className="w-3 h-3 rounded-full 
                       bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
          <li
            className="w-3 h-3 rounded-full 
                       bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
          <li
            className="w-3 h-3 rounded-full 
                       bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
          <li
            className="w-3 h-3 rounded-full 
                       bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
        </ol> */}
      </div>
    </>
  );
};

export default AccoladesItems;
