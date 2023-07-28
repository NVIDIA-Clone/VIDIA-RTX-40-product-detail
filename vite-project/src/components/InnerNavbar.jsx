import React, { useState, useEffect, useRef } from 'react';

const InnerNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [showing, setShowing] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const breakpoint = 200;

  const [barLocation, setBarLocation] = useState(1);
  //const landingPageRef = useRef(null);
  //const architectureRef = useRef(null);
  //const performanceRef = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // const handleScroll = () => {
  //   const sections = [
  //     { ref: landingPageRef, id: "landing-page" },
  //     { ref: architectureRef, id: "architecture" },
  //     { ref: performanceRef, id: "performance" },
  //   ];
  //   for (let i = sections.length - 1; i >= 0; i--) {
  //     const { ref, id } = sections[i];
  //     const section = ref.current;
  //     if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) {
  //       setCurrentSection(id);
  //       break;
  //     }
  //   }
  // };

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
        setBarLocation(7)
      } else if (window.scrollY > 6850) {
        setBarLocation(6)
      } else if (window.scrollY > 5900) {
        setBarLocation(5)
      } else if (window.scrollY > 5000) {
        setBarLocation(4)
      } else if (window.scrollY > 3600) {
        setBarLocation(3)
      } else if (window.scrollY > 2100) {
        setBarLocation(2)
      } else {
        setBarLocation(1)
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);

  const greenbar = () => {
    const labelwidth = 88;
    if (windowWidth < 640) {
      return {};
    } else if (windowWidth < 1024) {
      if (
        currentSection === 'landing-page' ||
        currentSection === 'architecture'
      ) {
        return {
          width: `${labelwidth}px`,
          position: 'relative',
          left: '245px',
        };
      } else if ('performance') {
        return {
          width: `${labelwidth}px`,
          position: 'relative',
          left: '300px',
        };
      }
    }
  };

  const arrow = () => {
    return {
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid white',
    };
  };

  const isgreenbar = () => {
    const labelwidth = 88;
    if (windowWidth < 640) {
      return {};
    }
    if (windowWidth < 1020) {
      if (barLocation === 1) {
        return {
          width: `${labelwidth}px`,
          position: "relative",
          left: "350px",
      } 
    } else if (barLocation === 2) {
      return {
        width: `${labelwidth}px`,
        position: "relative",
        left: "455px",
      } 
    } else if (barLocation === 3) {
      return {
        width: `${labelwidth}px`,
        position: "relative",
        left: "560px",
        } 
    } else if (barLocation === 4) {
      return {
        width: `60px`,
        position: "relative",
        left: "660px",
        } 
    } else if (barLocation === 5) {
      return {
        width: `60px`,
        position: "relative",
        left: "725px",
        } 
    } else if (barLocation === 6 || barLocation === 7) {
      {}
    }
  } else {
    if (barLocation === 1) {
      return {
        width: `${labelwidth}px`,
        position: "relative",
        left: "595px",
    };
  } else if (barLocation === 2) {
    return {
      width: `${labelwidth}px`,
      position: "relative",
      left: "700px",
    } 
  } else if (barLocation === 3) {
    return {
      width: `${labelwidth}px`,
      position: "relative",
      left: "800px",
    } 
  } else if (barLocation === 4) {
    return {
      width: `60px`,
      position: "relative",
      left: "900px",
    } 
  } else if (barLocation === 5) {
    return {
      width: `60px`,
      position: "relative",
      left: "970px",
    } 
  } else if (barLocation === 6) {
    return {
      width: `60px`,
      position: "relative",
      left: "1030px",
    } 
  } else if (barLocation === 7) {
    return {
      width: `60px`,
      position: "relative",
      left: "1090px",
    } 
  }
  }
  };

  const handleClick = (num, num2) => {
    setBarLocation(num);
    window.scrollTo({
      top: num2,
      behavior: "smooth",
    })
  };

  return (
    <div className={`py-2 bg-NVBGGray sticky top-16 sticky-wrapper z-[70] ${isSticky ? 'sticky-top' : ''}`}>
      <div className="flex justify-center flex flex-wrap h-11 font-Sig bg-NVBGGray ml-50">
        <button onClick={() => {handleClick(1, 1200)}} className="h-10 px-2 py-2 text-white border-none bg-inherit ml-60">
          Architecture
        </button>
        {windowWidth >= 640 ? (
          <div className="flex flex-wrap">

            <button onClick={() => {handleClick(2, 2180)}} className="px-2 py-2 text-white border-none bg-inherit">
              Performance
            </button>
            <button onClick={() => {handleClick(3, 3650)}} className="px-2 py-2 text-white border-none bg-inherit">
              Ray Tracing
            </button>
            <button onClick={() => {handleClick(4, 5020)}}className="px-2 py-2 text-white border-none bg-inherit">
              DLSS 3
            </button>
            <button onClick={() => {handleClick(5, 5950)}} className="px-2 py-2 text-white border-none bg-inherit">

              Reflex
            </button>
            {windowWidth >= 1024 ? (
              <div className="flex flex-wrap">

                <button onClick={() => {handleClick(6, 6900)}} className="px-2 py-2 text-white border-none bg-inherit">
                  Create
                </button>
                <button onClick={() => {handleClick(7, 9900)}} className="px-2 py-2 text-white border-none bg-inherit">

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
        <button className="h-11 bg-BHGreen w-20 hover:bg-NVGreen ml-80">
          Shop
        </button>
      </div>
      <div
        className="absolute bottom-0 insert-x-0 block h-[3px] mt-[-3px] bg-[#76b900] transition-all duration-[.5s] ease-linear delay-0"
        style={isgreenbar()}
      ></div>
    </div>
  );
};

export default InnerNavbar;
