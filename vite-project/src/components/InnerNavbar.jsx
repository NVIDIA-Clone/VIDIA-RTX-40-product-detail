import React, { useState, useEffect, useRef } from "react";

const InnerNavbar = () => {
  const [showSecondaryButtons, setShowSecondaryButtons] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [showing, setShowing] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const landingPageRef = useRef(null);
  const architectureRef = useRef(null);
  const performanceRef = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleScroll = () => {
    const sections = [
      { ref: landingPageRef, id: "landing-page" },
      { ref: architectureRef, id: "architecture" },
      { ref: performanceRef, id: "performance" },
    ];
    for (let i = sections.length - 1; i >= 0; i--) {
      const { ref, id } = sections[i];
      const section = ref.current;
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) {
        setCurrentSection(id);
        break;
      }
    }
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
        currentSection === "landing-page" ||
        currentSection === "architecture"
      ) {
        return {
          width: `${labelwidth}px`,
          position: "relative",
          left: "245px",
        };
      } else if ("performance") {
        return {
          width: `${labelwidth}px`,
          position: "relative",
          left: "300px",
        };
      }
    }
  };

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
    if (windowWidth < 640) {
      return {};
    }
    return {
      width: `${labelwidth}px`,
      position: "relative",
      left: "245px",
    };
  };

  return (
    <div className="py-2 bg-NVBGGray">
      <div className="flex flex-wrap h-11 font-Sig bg-NVBGGray ml-50">
        <button className="h-10 px-2 py-2 text-white border-none bg-inherit ml-60">
          Architecture
        </button>
        {windowWidth >= 640 ? (
          <div className="flex flex-wrap">
            <button className="px-2 py-2 text-white border-none bg-inherit">
              Performance
            </button>
            <button className="px-2 py-2 text-white border-none bg-inherit">
              Ray Tracing
            </button>
            <button className="px-2 py-2 text-white border-none bg-inherit">
              DLSS 3
            </button>
            <button className="px-2 py-2 text-white border-none bg-inherit">
              Reflex
            </button>
            {windowWidth >= 1024 ? (
              <div className="flex flex-wrap">
                <button className="px-2 py-2 text-white border-none bg-inherit">
                  Create
                </button>
                <button className="px-2 py-2 text-white border-none bg-inherit">
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
                  text-black
                  bg-white
                  className="inline-block"
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
        <button className="h-10 bg-BHGreen w-14 hover:bg-NVGreen ml-80">
          Shop
        </button>
      </div>
      <div
        className="absolute bottom-0 block h-[3px] mt-[-3px] bg-[#76b900] transition-all duration-[.5s] ease-linear delay-0"
        style={isgreenbar()}
      ></div>
    </div>
  );
};

export default InnerNavbar;
