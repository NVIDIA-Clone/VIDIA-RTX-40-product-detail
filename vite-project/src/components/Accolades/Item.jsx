import { useContext } from 'react';
import AccoladesItemsContext from './AccoladesItemsContext';

const Item = () => {
  const list = useContext(AccoladesItemsContext);
  const listAll = list.list.current;
  //   console.log(listAll);

  function handleClick(e) {
    console.log(e.currentTarget.id);
  }

  return (
    <>
      <ol className="flex p-[0_16vw]">
        {listAll.map((elem, index) => (
          <li
            id={index}
            key={index} // It's good to include a unique key prop when rendering a list of elements.
            className="w-3 h-3 rounded-full bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
        ))}
      </ol>
    </>
  );
};

export default Item;
