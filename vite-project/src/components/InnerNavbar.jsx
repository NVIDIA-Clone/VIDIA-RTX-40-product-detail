import { useState, useEffect } from "react";

const InnerNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [showing, setShowing] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const breakpoint = 200;

  const [barLocation, setBarLocation] = useState(1);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const show = () => {
    setShowing(!setShowing);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > breakpoint);
      if (window.scrollY > 9800) {
        setBarLocation(7);
      } else if (window.scrollY > 6850) {
        setBarLocation(6);
      } else if (window.scrollY > 5900) {
        setBarLocation(5);
      } else if (window.scrollY > 5000) {
        setBarLocation(4);
      } else if (window.scrollY > 3600) {
        setBarLocation(3);
      } else if (window.scrollY > 2100) {
        setBarLocation(2);
      } else {
        setBarLocation(1);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arrow = () => {
    return {
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: "8px solid white",
    };
  };

  const isgreenbar = () => {
    const labelwidth = 88;
    if (barLocation === 1) {
      return {
        width: `${labelwidth}px`,
        position: "relative",
        left: "395px",
      };
    } else if (barLocation === 2) {
      return {
        width: `95px`,
        position: "relative",
        left: "499px",
      };
    } else if (barLocation === 3) {
      return {
        width: `${labelwidth}px`,
        position: "relative",
        left: "610px",
      };
    } else if (barLocation === 4) {
      return {
        width: `60px`,
        position: "relative",
        left: "710px",
      };
    } else if (barLocation === 5) {
      return {
        width: `50px`,
        position: "relative",
        left: "779px",
      };
    } else if (barLocation === 6) {
      return {
        width: `55px`,
        position: "relative",
        left: "841px",
      };
    } else if (barLocation === 7) {
      return {
        width: `50px`,
        position: "relative",
        left: "906px",
      };
    }
  };

  const handleClick = (num, num2) => {
    setBarLocation(num);
    window.scrollTo({
      top: num2,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`py-2 bg-NVBGGray sticky top-16 sticky-wrapper z-[70] ${
        isSticky ? "sticky-top" : ""
      }`}
    >
      <div className="mr-auto ml-auto static w-[1260px] max-w-[100rem] flex flex-row items-center">
        <button
          onClick={() => {
            handleClick(1, 1300);
          }}
          className="h-10 px-2 py-2 text-white border-none bg-inherit"
        >
          Architecture
        </button>
        {windowWidth >= 640 ? (
          <div className="flex flex-wrap">
            <button
              onClick={() => {
                handleClick(2, 2680);
              }}
              className="px-2 py-2 text-white border-none bg-inherit"
            >
              Performance
            </button>
            <button
              onClick={() => {
                handleClick(3, 3650);
              }}
              className="px-2 py-2 text-white border-none bg-inherit"
            >
              Ray Tracing
            </button>
            <button
              onClick={() => {
                handleClick(4, 5520);
              }}
              className="px-2 py-2 text-white border-none bg-inherit"
            >
              DLSS 3
            </button>
            <button
              onClick={() => {
                handleClick(5, 6450);
              }}
              className="px-2 py-2 text-white border-none bg-inherit"
            >
              Reflex
            </button>
            {windowWidth >= 1024 ? (
              <div className="flex flex-wrap">
                <button
                  onClick={() => {
                    handleClick(6, 7580);
                  }}
                  className="px-2 py-2 text-white border-none bg-inherit"
                >
                  Create
                </button>
                <button
                  onClick={() => {
                    handleClick(7, 10400);
                  }}
                  className="px-2 py-2 text-white border-none bg-inherit"
                >
                  Specs
                </button>
              </div>
            ) : (
              <div>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="px-2 py-3 flex flex-nowrap space-x-1 hover:{open()}"
                >
                  <div className="w-2 h-2 px-1 bg-white rounded-full"></div>
                  <div className="w-2 h-2 px-1 bg-white rounded-full"></div>
                  <div className="w-2 h-2 px-1 bg-white rounded-full"></div>
                </div>
                {isOpen && (
                  <div className="flex flex-wrap w-20 h-20 bg-white">
                    <button className="px-2 py-2 text-black border-none bg-inherit">
                      Create
                    </button>
                    <button className="px-2 py-2 text-black border-none bg-inherit">
                      Specs
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            {!showing ? (
              <div>
                <button
                  onClick={show}
                  className="inline-block"
                  style={arrow()}
                ></button>
              </div>
            ) : (
              <div>
                <button
                  className="inline-block text-black bg-white"
                  style={arrow()}
                ></button>
                <button className="h-10 border-none bg-inherit">
                  Architecture
                </button>
                <button className="border-none bg-inherit">Performance</button>
                <button className="border-none bg-inherit">Ray Tracing</button>
                <button className="border-none bg-inherit">DLSS 3</button>
                <button className="border-none bg-inherit">Reflex</button>
                <button className="border-none bg-inherit">Create</button>
                <button className="border-none bg-inherit">Specs</button>
              </div>
            )}
          </div>
        )}
        <button className="w-20 h-12 bg-NVGreen hover:bg-[#91c733] ml-[36rem] text-[18px] font-bold font-Sig">
          Shop
        </button>
      </div>
      <div
        className="absolute bottom-0 insert-x-0 block h-[3px] mt-[-3px] bg-[#76b900] transition-all duration-300 ease-linear"
        style={isgreenbar()}
      ></div>
    </div>
  );
};

export default InnerNavbar;
