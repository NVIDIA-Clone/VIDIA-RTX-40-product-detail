import PropTypes from "prop-types";

const Overlay = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black opacity-80 z-50 ${
        isMenuOpen ? "block" : "hidden"
      }`}
    />
  );
};

Overlay.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Overlay;
