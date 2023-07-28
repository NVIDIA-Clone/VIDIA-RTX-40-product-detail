import { useContext } from 'react';
import AdditionalContext from './AdditionalContext';
import LandingPageContext from '../LandingPageContext';

const AdditionalList = () => {
  const { list } = useContext(AdditionalContext);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);
  console.log(list[1]);
  return (
    <div className='flex flex-col items-center'>
    <div className='py-[8px] px-[15px]'>
      <h2 className="text-[2.25rem] m-[2vh_0] font-Sig font-bold">{list[0].mainTitle}</h2>
    </div>
      {/* 8K Container */}
        <img src={list[1].pic} alt="" className="absolute w-fit h-[300px] mt-[5%]" />
      <div id="8k-container" className="flex justify-start z-0 h-full py-[30px] w-full">
        <div
          id="text-container"
          className="p-[15px] z-50 inset-0 flex flex-col left-[20%] w-1/4 items-start ml-[16%]"
        >
          <h1 className='pb-[10px] font-bold text-[1.5rem] font-Sig'>{list[1].hdrTitle}</h1>
          <p className='pt-[10px] pb-[30px] text-[15px] font-Sig'>{list[1].text}</p>
          <p className='font-bold text-[18px]'>Explore the pinnacle of Gaming</p>
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
    </div>
  );
};

export default AdditionalList;
