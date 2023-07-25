import PropTypes from "prop-types";

const HeaderSolutions = ({ isSolutionsOpen, handleOffClick }) => {
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
                <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                  <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                    AI and Data Science
                  </div>
                  <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        AI Inference
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        AI Workflows
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Converstional AI
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Data Analytics
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Deep Learning Training
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Generative AI
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Machine Learning
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Prediction and Forecasting
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Speech AI
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                  <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                    Data Center and Cloud Computing
                  </div>
                  <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Accelerated Computing for Enterprise IT
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Cloud Computing
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Colocation
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Edge Computing
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Networking
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Virtualization
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        MLOps
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Hands-On Labs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                  <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                    Design and Simulation
                  </div>
                  <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Augmented and Virtual Reality
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Multi-Display
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Rendering
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Metaverse
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Graphics Virtualization
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Engineering Simulation
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Broadcast
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Hands-On Labs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                  <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                    Robotics and Edge Computing
                  </div>
                  <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        AI-on-5G
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Intelligent Video Analytics
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Industrial
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Robotics
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Edge Deployment Management
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Edge Solutions
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Hands-On Lab
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                  <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                    High-Performance Computing
                  </div>
                  <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        HPC and AI
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Simulation and Modeling
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Scientific Visualization
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Hands-On Labs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left mr-[30px] max-w-[190px] pb-[20px] w-[calc(16.66667%-25px)]">
                  <div className="h-[47px] min-h-[35px] font-bold border-b-2 border-solid border-[#ccc] pb-[10px] leading-5">
                    Self-Driving Vehicles
                  </div>
                  <ul className="leading-5 mt-0 pl-0 pt-[5px]">
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Overview
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Chauffeur
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Concierge
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        AI Training
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Simulation
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        HD Mapping
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Cloud Gaming
                      </a>
                    </li>
                    <li className="pt-[7px] pb-[7px] text-sm list-none">
                      <a className="text-[#666] block hover:text-[#1a1a1a]">
                        Safety
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

HeaderSolutions.propTypes = {
  isSolutionsOpen: PropTypes.bool.isRequired,
  handleOffClick: PropTypes.func.isRequired,
};

export default HeaderSolutions;
