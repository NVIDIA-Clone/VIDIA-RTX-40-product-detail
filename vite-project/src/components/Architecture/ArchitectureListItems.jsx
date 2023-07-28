//IMPORTING THE USE CONTEXT HOOK TO BECOME UTILIZED
import { useContext } from "react";
//IMPORTING THE CONTEXT TO BE USED IN THIS PARTICULAR COMPONENT
import ArchitectureContext from "./ArchitectureContext";

const ArchitectureListItems = () => {
  const { architectureList } = useContext(ArchitectureContext);
  console.log(architectureList); 
  return (
    <div className="flex flex-wrap w-full justify-evenly over">
      {architectureList.current.map(
        (item, index) => (
          console.log(item),
          (
            
            <div key={index} className="flex flex-col items-center mb-[45px] z-50 w-[295px]">
                <div className="mb-[24px]">
              <svg width={64} height={64}>
                <path
                  id={item.architectureSymbol.id}
                  d={item.architectureSymbol.d}
                  fill={item.architectureSymbol.fill}
                  ></path>
              </svg>
                  </div>
              <p className="text-white py-[10px] mb-[8px] text-[1.5rem] font-bold text-center">
                {item.title}
                <br /> {item.subtitle}
              </p>
              <p className="text-white text-[1rem] mx-[17.5px] p-[10px] text-center">
                {item.info}
              </p>
            </div>
          )
        )
      )}
      ;
    </div>
  );
};
export default ArchitectureListItems;
