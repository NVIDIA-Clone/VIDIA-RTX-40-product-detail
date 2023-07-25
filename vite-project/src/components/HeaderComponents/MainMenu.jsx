import PropTypes from "prop-types";

const MainMenu = ({
  isMenuOpen,
  handleProductClick,
  handleSolutionsClick,
  handleIndustriesClick,
  handleForYouClick,
  getMenuGreenBarStyles,
}) => {
  return (
    <>
      {isMenuOpen && (
        <ul className="flex float-left space-x-4">
          <li className="inline-block mr-[-4px]">
            <label
              className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
              onClick={handleProductClick}
            >
              Products
            </label>
          </li>
          <li>
            <label
              className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
              onClick={handleSolutionsClick}
            >
              Solutions
            </label>
          </li>
          <li>
            <label
              className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
              onClick={handleIndustriesClick}
            >
              Industries
            </label>
          </li>
          <li>
            <label
              className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]"
              onClick={handleForYouClick}
            >
              For You
            </label>
          </li>
          <li
            className="block h-[3px] bg-[#76b900] transition-all duration-300 ease-linear"
            style={getMenuGreenBarStyles()}
          ></li>
        </ul>
      )}
    </>
  );
};

MainMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleIndustriesClick: PropTypes.func.isRequired,
  handleProductClick: PropTypes.func.isRequired,
  handleSolutionsClick: PropTypes.func.isRequired,
  handleForYouClick: PropTypes.func.isRequired,
  getMenuGreenBarStyles: PropTypes.func.isRequired,
};

export default MainMenu;
