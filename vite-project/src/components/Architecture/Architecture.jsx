import ArchitectureList from "./ArchitectureList";
import { useEffect, useRef, useContext, useState } from "react";
import ArchitectureContext from "./ArchitectureContext";

const Architecture = () => {
  const { setisScrolled, setIsFaded } = useContext(ArchitectureContext);
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
        setIsFaded(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      ref={architectureRef}
      className="bg-black w-full flex flex-col items-center pb-[60px] relative h-[1000px]"
    >
      <ArchitectureList />
    </div>
  );
};
export default Architecture;
