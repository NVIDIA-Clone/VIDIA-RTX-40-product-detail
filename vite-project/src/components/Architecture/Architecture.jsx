import ArchitectureList from './ArchitectureList';
import { useEffect, useRef, useContext } from 'react';
import ArchitectureContext from './ArchitectureContext';

const Architecture = () => {
  const {
    isScrolled,
    setisScrolled,
    isFaded,
    setIsFaded,
    setIsFadedOut,
    isFadedOut,
  } = useContext(ArchitectureContext);
  const architectureRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (architectureRef.current) {
        const architectureRect =
          architectureRef.current.getBoundingClientRect();
        const architectureBottom =
          architectureRect.top + architectureRect.height;
        const windowBottom = window.innerHeight - 50;
        setisScrolled(architectureBottom <= windowBottom);
      }
    };

    const handleScrollTimeout = () => {
      setTimeout(() => {
        setIsFaded(isScrolled);
        setIsFadedOut(isScrolled);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollTimeout);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScrollTimeout);
    };
  }, [setisScrolled, setIsFaded, setIsFadedOut, isScrolled]);

  return (
    <div
      ref={architectureRef}
      className="bg-black w-full flex flex-col items-center pb-[10%] relative h-[1000px]"
    >
      <ArchitectureList />
    </div>
  );
};
export default Architecture;
