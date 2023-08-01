import ProductDropdown from "./ProductDropdown";
import GamesDropdown from "./GamesDropdown";
import MoreDropdown from "./MoreDropdown";

const OuterNavBar = () => {
  return (
    <>
<<<<<<< HEAD
      <nav className="sticky z-[71] h-[66px] w-full bg-black text-NVNavBarGray font-Sig hover:cursor-pointer flex flex-row items-center">
        <div className="flex mr-auto ml-auto py-0 sub-brand-nav-container">
=======
      <nav className=" sticky top-0 z-[71] h-[66px] w-full bg-black text-NVNavBarGray font-Sig hover:cursor-pointer flex flex-row items-center">
        <div className="mr-auto ml-auto static w-[1250px] max-w-[100rem] flex flex-row items-center">
>>>>>>> main
          <span className="text-2xl font-semibold sub-brand-name text-NVWhiteTxt ">
            PeForce
          </span>
          <ul className="flex items-center space-x-0.5">
            <li className="relative sub-brand-nav-item dropdown"></li>
            <span className="relative inline-block text-base text-left">
              <ProductDropdown />
            </span>
            <li className="sub-brand-nav-item">
              <span className="relative inline-block text-base text-left">
                <GamesDropdown />
              </span>
            </li>
            <li className="p-1 tracking-wide sub-brand-nav-item hover:text-NVGreen">
              <span className="relative inline-block text-base text-left">
                PeForce Experience
              </span>
            </li>
            <li className="p-1 tracking-wide sub-brand-nav-item hover:text-NVGreen">
              <span className="relative inline-block text-base text-left">
                Drivers
              </span>
            </li>
            <li className="tracking-wide sub-brand-nav-item hover:text-NVGreen">
              <span className="relative inline-block text-base text-left">
                News
              </span>
            </li>
            <li className="tracking-wide sub-brand-nav-item">
              <span className="relative inline-block text-base text-left">
                <MoreDropdown />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default OuterNavBar;
