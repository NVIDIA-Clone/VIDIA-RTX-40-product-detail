import ImageComparison from "./ImageComparison";

const RayTracing = () => {
  return (
    <>
      <div className="w-full bg-black h-[392.1px] pt-[75px] pb-[75px]">
        <div className="text-center mt-[8px] mb-[8px] mr-[15px] ml-[15px]">
          <h2 className="font-bold text-[34px] text-center text-white">
            Fraction of the Power Consumption
          </h2>
        </div>
        <div className="text-center mt-[8px] mb-[8px] mr-[15px] ml-[15px]">
          <h3 className="font-bold text-[20px] text-center text-white">
            Lower Is Better
          </h3>
        </div>
        <div className="content-center">{/*Power Bar*/}</div>
      </div>
      <ImageComparison />
    </>
  );
};

export default RayTracing;
