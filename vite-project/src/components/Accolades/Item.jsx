import { useContext, useState } from 'react';
import LandingPageContext from './../LandingPageContext';

const Item = () => {
  let { accoladesList } = useContext(LandingPageContext); //Array of Objects
  //NEEDING TO WORK IN TANDEM TO CHANGE BACKGROUND OF SELECTED
  const [selected, setSelected] = useState(accoladesList.current[0]);

  function handleClick(e) {
    let index = e.currentTarget.id - 1;
    setSelected(accoladesList.current[index]);
    //NEEDING TO CHANGE THIS TO STATE BUT GOT IT WORKING
    if (accoladesList.current[e.currentTarget.id - 1].clicked === false) {
      accoladesList.current[e.currentTarget.id - 1].clicked = true;
      accoladesList.current[selected.id - 1].clicked = false;
    }
  }
  return (
    <>
      <blockquote className="text-[36px] mb-[42px] mt-[3px]">
        <span>
          <q>{selected.comment}</q>
        </span>
      </blockquote>
      <div className="px-[15px]">
        <h2 className="text-[15px]">- {selected.name}</h2>
        <div className="h-[60px] flex items-end justify-center pb-[10px]">
          {accoladesList.current.map((elem, index) => (
            <div
              className={
                elem.clicked
                  ? 'flex p-[0_auto] w-3 h-3 rounded-full bg-NVGreen m-[0_5px] hover:bg-[#00661f] cursor-pointer'
                  : 'flex p-[0_auto] w-3 h-3 rounded-full bg-[#eeeeee] m-[0_5px] hover:bg-[#cccccc] cursor-pointer'
              }
              id={elem.id}
              key={index}
              onClick={handleClick}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

// <!-- Quotes -->
{
  /* <svg class="absolute transform -left-12 -top-12" width="100" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M100 0H86.588L59.034 40.478v37.065h37.064V40.478H82.2L100 0zM40.966 0H27.554L0 40.478v37.065h37.064V40.478H23.165L40.965 0z" fill="#871EFF"/>
</svg>
<svg class="absolute transform -right-12 -bottom-6 flip" width="101" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.2916 77.9999H0.880127L18.6808 37.5217H4.78164V0.457275H41.846V37.5217L14.2916 77.9999Z" fill="#871EFF"/>
  <path d="M73.4115 78H60L77.8007 37.5218H63.9015V0.457397H100.966V37.5219L73.4115 78Z" fill="#871EFF"/>
</svg> */
}

export default Item;
