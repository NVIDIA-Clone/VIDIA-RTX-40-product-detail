import AccoladesItems from "./AccoladesItems";

const Accolades = () => {
  return (
    <>
      <div
        id="accolades-container"
        className="w-full bg-[#2A2A2A] flex justify-center items-center"
      >
        <div id="accolades-display" className="text-center text-[#ffffff]">
          <AccoladesItems />
        </div>
      </div>
    </>
  );
};

export default Accolades;
