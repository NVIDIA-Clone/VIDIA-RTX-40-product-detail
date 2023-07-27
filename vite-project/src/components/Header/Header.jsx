import HeaderProducts from "./HeaderProducts";
import HeaderSolutions from "./HeaderSolutions";
import HeaderIndustries from "./HeaderIndustries";
import HeaderForYou from "./HeaderForYou";
import MainMenuAnimation from "./MainMenuAnimation";
import HeaderLogo from "./HeaderLogo";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function Header() {
  return (
    <>
      <header className="font-Sig">
        <div className="fixed cursor-pointer mr-auto ml-auto max-w-[100rem]">
          <nav className="h-[44px] w-full px-[11rem] bg-[#fff] font-Sig flex flex-row items-center">
            <HeaderLogo />
            <MainMenuAnimation />
            <MainMenu />
            {/* Space Between Divs */}
            <div className="flex-grow"></div>
            {/* Right-hand menu */}
            <ul className="flex float-right gap-6">
              <li>
                <a className=" cursor-pointer text-[#696969] text-sm hover:text-[#1a1a1a]">
                  {" "}
                  Shop{" "}
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-[#696969] text-sm hover:text-[#1a1a1a]">
                  {" "}
                  Drivers{" "}
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-[#696969] text-sm hover:text-[#1a1a1a]">
                  {" "}
                  Support{" "}
                </a>
              </li>
            </ul>
            {/* Right hand icons */}
            <div className="flex pl-[3rem] gap-2 cursor-pointer">
              <SearchBar />
              <Profile />
            </div>
          </nav>
        </div>
        {/* Additional navigation bars */}
        <HeaderProducts />
        <HeaderSolutions />
        <HeaderIndustries />
        <HeaderForYou />
      </header>
    </>
  );
}

export default Header;
