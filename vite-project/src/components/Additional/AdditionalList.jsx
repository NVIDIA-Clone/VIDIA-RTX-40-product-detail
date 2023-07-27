import { useContext } from 'react';
//IMPORT THE CONTEXT
import AdditionalContext from './AdditionalContext';
const AdditionalList = () => {
  const { list } = useContext(AdditionalContext);
  console.log(list[2].cards);
  return (
    <>
      <h1>{list[0].mainTitle}</h1>
      {/* 8K Container */}
      <div
        id="8k-container"
        className="w-full h-[25vh] bg-[url('/images/features-8k-bg-2560-d.png')] bg-no-repeat bg-[length:100%_100%] bg-[position:center]"
      >
        <div
          id="text-container"
          className=" flex justify-center flex-col w-[80vw] h-[100%]"
        >
          <h1>{list[1].hdrTitle}</h1>
          <p>{list[1].text}</p>
          <div className="flex">
            <span>{list[1].explore.explore}</span>
            <div className="w-10 h-10">
              <svg>
                <path
                  d={list[1].explore.symbol[0].d}
                  stroke={list[1].explore.symbol[0].stroke}
                  strokeWidth={list[1].explore.symbol[0].width}
                  strokeLinecap={list[1].explore.symbol[0].linecap}
                  strokeLinejoin={list[1].explore.symbol[0].linecap}
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}
      {list[2].cards.map((elem, index) => {
        console.log(elem, index);
      })}
    </>
  );
};

export default AdditionalList;
