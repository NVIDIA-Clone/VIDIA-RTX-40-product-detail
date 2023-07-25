import { useContext, useState } from 'react';
import LandingPageContext from './../LandingPageContext';

const Item = () => {
  let { accoladesList } = useContext(LandingPageContext);

  const [selected, setSelected] = useState(accoladesList.current[0]);

  function handleClick(e) {
    let index = e.currentTarget.id;
    setSelected(accoladesList.current[index]);
  }

  return (
    <>
      <blockquote className="text-[36px]">
        <span>
          <q>{selected.comment}</q>
        </span>
      </blockquote>
      <h2 className="text-[15px]">- {selected.name}</h2>
      <ol className="flex p-[0_16vw]">
        {accoladesList.current.map((elem, index) => (
          <li
            id={index}
            key={index}
            className="w-3 h-3 rounded-full bg-[#ccc] m-[0_5px] hover:bg-[#76b900]"
            onClick={handleClick}
          ></li>
        ))}
      </ol>
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
