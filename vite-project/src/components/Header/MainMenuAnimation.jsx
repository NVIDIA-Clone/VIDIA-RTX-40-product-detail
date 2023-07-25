import PropTypes from "prop-types";

const MainMenuAnimation = ({ isMenuOpen, handleArrowClick }) => {
  return (
    <>
      <div className="flex items-center">
        <button
          id="menu-button"
          className={`h-[40px] transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-[22rem]" : "translate-x-0"
          }`}
          onClick={handleArrowClick}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arrow Carrot SVG */}
            <path
              d="M10 7L15 12L10 17"
              stroke="#696969"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                visibility: isMenuOpen ? "hidden" : "visible",
                transition: "visibility 0.2s",
              }}
            />
            {/* X SVG */}
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#696969"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                visibility: isMenuOpen ? "visible" : "hidden",
                transition: "visibility 0.2s",
              }}
            />
          </svg>
        </button>
        {!isMenuOpen && (
          // Main Menu text
          <span className="ml-2 text-black">Main Menu</span>
        )}
      </div>
    </>
  );
};

MainMenuAnimation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleArrowClick: PropTypes.func.isRequired,
};

export default MainMenuAnimation;
