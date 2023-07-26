import { useContext } from "react";
import HeaderContext from "./HeaderContext";

const HeaderIndustries = () => {
  const { industries, isIndustriesOpen, handleOffClick } =
    useContext(HeaderContext);

  return (
    <>
      {isIndustriesOpen && (
        <div onClick={handleOffClick}>
          <div
            className="absolute z-[552] cursor-pointer w-[100%] h-[275px] bg-[#eeeeee]"
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks inside the modal from closing it
            }}
          >
            <div className="flex gap-4 ml-[auto] mr-[auto] overflow-x-auto p-2 w-[1290px]">
              <ul className="mb-0 mt-0 pb-[10px] pt-[30px]">
                <li className="w-[835.6px]">
                  <div className="min-h-[18px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5 ">
                    Industries
                  </div>
                  <ul className="columns-4 gap-[30px] leading-5">
                    {industries.map((industry) => (
                      <li
                        key={industry}
                        className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none"
                      >
                        <a className="text-[#666] block hover:text-[#1a1a1a]">
                          {industry}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderIndustries;
