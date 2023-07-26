import React, { useState, useEffect, useRef } from 'react';

const InnerNavbar = () => {
  const [showSecondaryButtons, setShowSecondaryButtons] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('');
  const landingPageRef = useRef(null);
  const architectureRef = useRef(null);
  const performanceRef = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleScroll = () => {
    const sections = [{ ref: landingPageRef, id: "landing-page" },
    { ref: architectureRef, id: "architecture" },
    { ref: performanceRef, id: "performance" }]; 
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

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const greenbar = () => {
    const labelwidth = 88
    if (windowWidth < 640) {
      return {}
    }
    else if (windowWidth < 1024) { 
      if (currentSection === "landing-page" || currentSection === 'architecture') {
       return {
          width: `${labelwidth}px`,
          position: "relative",
          left: "245px",
        } 
      } else if ("performance") {
        return {
          width: `${labelwidth}px`,
          position: "relative",
          left: "300px",
        } 
      }
    }
  }

  const arrow = () => {
    return {
      width: 0, 
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid white'
    }
  }

  const isgreenbar = () => {
    const labelwidth = 88
    if (windowWidth < 640) {
      return {}
    }
    return {
      width: `${labelwidth}px`,
      position: "relative",
      left: "245px",
    } 
  }

  return (
    <div className="py-2 bg-NVBGGray">
      <div className="flex flex-wrap h-11 font-Sig bg-NVBGGray ml-50">
        <button className="text-white border-none h-10 bg-inherit py-2 px-2 ml-60">
          Architecture
        </button>
        {windowWidth >= 640 ? (
        <div className="flex flex-wrap">
          <button className="text-white border-none bg-inherit py-2 px-2">
            Performance
          </button>
          <button className="text-white border-none bg-inherit py-2 px-2">
            Ray Tracing
          </button>
          <button className="text-white border-none bg-inherit py-2 px-2">
            DLSS 3
          </button>
          <button className="text-white border-none bg-inherit py-2 px-2">
            Reflex
          </button>
          {windowWidth >= 1024 ? (
          <div className="flex flex-wrap">
            <button className="text-white border-none bg-inherit py-2 px-2">
              Create
            </button>
            <button className="text-white border-none bg-inherit py-2 px-2">
              Specs
            </button>
          </div>
          ) : (
            <div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='px-2 py-3 flex flex-nowrap space-x-1 hover:{open()}'> 
                <div className='w-2 h-2 px-1 bg-white rounded-full'></div>
                <div className='w-2 h-2 px-1 bg-white rounded-full'></div>
                <div className='w-2 h-2 px-1 bg-white rounded-full'></div>
              </div>
              {isOpen && (
              <div className='bg-white flex flex-wrap w-20 h-20'>
                <button className="text-black border-none bg-inherit py-2 px-2">
                  Create
                </button>
                <button className="text-black border-none bg-inherit py-2 px-2">
                  Specs
                </button>
              </div>
              )}
            </div>
          )}
        </div>
        ) : (
          <div>
            <button className='inline-block'
            style={arrow()}
            ></button>
          </div>
        )}
        <button className="bg-BHGreen h-10 w-14 hover:bg-NVGreen ml-80">
          Shop
        </button>
      </div>
      <div className="absolute bottom-0 block h-[3px] mt-[-3px] bg-[#76b900] transition-all duration-[.5s] ease-linear delay-0"
      style={isgreenbar()}></div>
    </div>
  );
};

export default InnerNavbar;
