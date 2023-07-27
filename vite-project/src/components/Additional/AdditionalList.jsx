import { useContext } from 'react';
import AdditionalContext from './AdditionalContext';
import LandingPageContext from '../LandingPageContext';

const AdditionalList = () => {
  const { list } = useContext(AdditionalContext);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);
  console.log(list[2].cards[0].explore.symbol[0]);
  return (
    <>
      <h1 className="text-[3rem] m-[2vh_0]">{list[0].mainTitle}</h1>
      {/* 8K Container */}
      <div id="8k-container" className="relative w-full h-full">
        <img src={list[1].pic} alt="" className="w-full h-[28vh]" />
        <div
          id="text-container"
          className="absolute inset-0 flex flex-col items-left justify-center ml-[26vw] mr-[50vw]"
        >
          <h1>{list[1].hdrTitle}</h1>
          <p>{list[1].text}</p>
        </div>
      </div>
      {/* Cards */}
      <div
        id="cards-container"
        className="grid grid-cols-3 place-content-between gap-[2vw] m-[4vh_15vw]"
      >
        {list[2].cards.map((elem, index) => (
          <div id="card-container" key={index} className="bg-[black] h-[60vh]">
            <div id="card-image-container" className="">
              <img src={elem.picture} alt={elem.title} width={800} />
            </div>
            <div
              id="card-image-text-container"
              className="ml-[1vw] mr-[2vw] mt-[1vw]"
            >
              <h1 className="text-[2rem]">{elem.title}</h1>
              <p className="text-[15px]">{elem.info}</p>
              <div
                className="flex"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p>{elem.explore.explore}</p>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 -3 30 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-500 ease-in-out transform translate-x-0 ${
                    isHovered ? 'translate-x-1' : ''
                  }`}
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke={isHovered ? 'white' : '#76b900'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
        <div id="card-container" className="bg-[black] h-[60vh]">
          <div id="card-image-container" className="">
            <img src={list[3].picture} alt={list[3].title} width={1000} />
          </div>
          <div
            id="card-image-text-container"
            className="ml-[1vw] mr-[2vw] mt-[1vw]"
          >
            <h1>{list[3].title}</h1>
            <p>{list[3].info}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalList;
