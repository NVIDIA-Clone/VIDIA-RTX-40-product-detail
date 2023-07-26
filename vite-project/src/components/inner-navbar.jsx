const InnerNavbar = () => {
  return (
    <div className="py-2 bg-NVBGGray">
      <div className="flex flex-wrap bg-NVBGGray">
        <button className="px-2 py-2 ml-32 font-sans text-white border-none bg-inherit">
          Architecture
        </button>
        <button className="px-2 py-2 font-sans text-white border-none bg-inherit">
          Performance
        </button>
        <button className="px-2 py-2 font-sans text-white border-none bg-inherit">
          Ray Tracing
        </button>
        <button className="px-2 py-2 font-sans text-white border-none bg-inherit">
          DLSS 3
        </button>
        <button className="px-2 py-2 font-sans text-white border-none bg-inherit">
          Reflex
        </button>
        <button className="px-2 py-2 font-sans text-white border-none bg-inherit">
          Create
        </button>
        <button className="px-2 py-2 font-sans text-white border-none bg-inherit">
          Specs
        </button>
        <button className="font-sans bg-lime-600 hover:bg-lime-500 ml-80">
          Shop
        </button>
      </div>
      <div className="border-solid bg-lime-500 border-lime-500"></div>
    </div>
  );
};

export default InnerNavbar;
