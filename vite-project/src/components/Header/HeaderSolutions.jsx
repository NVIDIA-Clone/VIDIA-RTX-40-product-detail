import { useContext } from "react";
import HeaderContext from "./HeaderContext";

const HeaderSolutions = () => {
  const { solution, isSolutionsOpen, handleOffClick } =
    useContext(HeaderContext);
  return (
    <>
      {isSolutionsOpen && (
        <div onClick={handleOffClick}>
          <div
            className="absolute z-[552] cursor-pointer w-[100%] h-[442px] bg-[#eeeeee]"
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks inside the modal from closing it
            }}
          >
            <div className="w-[1320px] ml-[auto] mr-[auto]">
              <ul className="mb-0 mt-0 pb-[10px] pl-0 pt-[30px]">
                {solution.map((category) => (
                  <li
                    key={category.title}
                    className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]"
                  >
                    <div className="h-[47px] min-h-[35px] text-[14px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                      {category.title}
                    </div>
                    <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="pt-[7px] pb-[7px] text-sm list-none"
                        >
                          <a className="text-[#666] block hover:text-[#1a1a1a]">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSolutions;
