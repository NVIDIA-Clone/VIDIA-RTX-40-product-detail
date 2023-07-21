import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="m-auto static max-w-[100rem]">
          <nav className="h-[44px] w-full px-[11rem] bg-[#fff] font-Sig flex flex-row items-center ">
            {/* Logo */}

            <div id="logoContainer" className="flex ml-[12rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="40px"
              >
                <path
                  fill="#76b900"
                  d="M17.896 17.596v-2.862c.282-.018.565-.035.848-.035 7.844-.247 12.985 6.749 12.985 6.749s-5.548 7.702-11.5 7.702a7.297 7.297 0 0 1-2.315-.37v-8.693c3.056.37 3.674 1.714 5.494 4.77l4.081-3.427s-2.985-3.904-8.003-3.904a11.974 11.974 0 0 0-1.59.07m0-9.47v4.276l.848-.053c10.9-.371 18.02 8.94 18.02 8.94s-8.161 9.928-16.66 9.928c-.742 0-1.466-.07-2.19-.194v2.65c.6.07 1.219.124 1.82.124 7.913 0 13.638-4.046 19.184-8.816.92.742 4.682 2.527 5.46 3.304-5.265 4.416-17.543 7.968-24.504 7.968a17.513 17.513 0 0 1-1.944-.107v3.728h30.069V8.127zm0 20.653v2.261c-7.314-1.308-9.345-8.922-9.345-8.922s3.515-3.886 9.345-4.523v2.474h-.017c-3.057-.371-5.46 2.491-5.46 2.491s1.361 4.823 5.477 6.219m-12.985-6.98s4.328-6.394 13.003-7.065v-2.332C8.304 13.179 0 21.305 0 21.305s4.7 13.604 17.896 14.84v-2.473C8.215 32.47 4.911 21.8 4.911 21.8z"
                />
              </svg>
              <a className="h-[44px] w-[80px] font-extrabold py-2 ml-0.5 text-xl">
                VIDIA
              </a>
            </div>

            {/* Arrow Carrot or X */}

            <div className="flex items-center">
              <button
                id="menu-button"
                className={`h-[40px] transform transition-transform ${
                  isMenuOpen ? "translate-x-[22rem]" : "translate-x-0"
                }`}
                onClick={isMenuOpen ? closeMenu : toggleMenu}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    // X SVG
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#696969"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    // Arrow Carrot SVG
                    <path
                      d="M10 7L15 12L10 17"
                      stroke="#696969"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>
              {!isMenuOpen && (
                // Main Menu text
                <span className="text-black ml-2">Main Menu</span>
              )}
            </div>

            {/* Conditionally render the ul based on the isMenuOpen state */}

            {isMenuOpen && (
              <ul className="flex space-x-4 float-left">
                <li className="inline-block mr-[-4px]">
                  <label className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]">
                    Products
                  </label>
                </li>
                <li>
                  <label className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]">
                    Solutions
                  </label>
                </li>
                <li>
                  <label className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]">
                    Industries
                  </label>
                </li>
                <li>
                  <label className="cursor-pointer text-[#696969] hover:text-[#1a1a1a]">
                    For You
                  </label>
                </li>
                <li></li>
              </ul>
            )}

            {/* Space Between Divs */}

            <div className="flex-grow"></div>

            {/* Right-hand menu */}

            <ul className="flex gap-6 float-right">
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
              <svg
                width="30px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                  fill="#696969"
                />
              </svg>
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="#696969"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="#696969"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#696969"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
