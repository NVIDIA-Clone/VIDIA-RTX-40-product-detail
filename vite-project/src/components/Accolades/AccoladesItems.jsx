import { useContext } from 'react';
import AccoladesItemsContext from './AccoladesItemsContext';

const AccoladesItems = () => {
  const list = useContext(AccoladesItemsContext);
  const listAll = list.list;
  console.log(listAll); //List of current arrays

  function handleClick(e) {
    console.log(e.currentTarget);
  }
  return (
    <>
      <div>
        <h1>{listAll.current[0].comment}</h1>
        <h2>{listAll.current[0].name}</h2>
        <div onClick={handleClick} className="pt-[2vh]">
          Circle Button
        </div>
      </div>
    </>
  );
};

export default AccoladesItems;
