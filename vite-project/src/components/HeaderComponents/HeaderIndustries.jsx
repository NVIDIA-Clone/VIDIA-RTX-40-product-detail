import PropTypes from "prop-types";

const HeaderIndustries = ({ isIndustriesOpen, handleOffClick }) => {
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
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Architecture, Engineering, Construction & Operations
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Automotive
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Consumer Internet
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Cybersecurity
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Energy
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Financial Services
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Healthcare and Life Sciences
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Higher Education
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Game Development
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Manufacturing
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Media and Entertainment
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        US Public Sector
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Restaurants
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Retail and CPG
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Robotics
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Smart Cities
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Supercomputing
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Telecommunications
                      </a>
                    </li>
                    <li className="inline-block w-[100%] pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Transportation
                      </a>
                    </li>
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

HeaderIndustries.propTypes = {
  isIndustriesOpen: PropTypes.bool.isRequired,
  handleOffClick: PropTypes.func.isRequired,
};

export default HeaderIndustries;
