const InnerNavbar = () => {
  return (
    <div className="py-[1.2rem] bg-neutral-800 h-[70px]">
      <div className="flex flex-wrap bg-neutral-800 font-Sig text-[#e7e7e7] gap-2 pl-[10rem] pr-[10rem]">
        <button className="">Architecture</button>
        <button className=" ">Performance</button>
        <button className="">Ray Tracing</button>
        <button className="">DLSS 3</button>
        <button className="">Reflex</button>
        <button className="">Create</button>
        <button className="">Specs</button>
        <button className=" bg-NVGreen hover:bg-BHGreen w-[80px] h-[48.5px] mb-[12px]">
          Shop
        </button>
      </div>
      <div className="bg-lime-500 border-solid border-lime-500"></div>
    </div>
  );
};

export default InnerNavbar;
