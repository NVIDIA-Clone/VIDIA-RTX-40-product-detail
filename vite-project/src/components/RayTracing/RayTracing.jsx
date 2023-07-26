import ImageComparison from "./ImageComparison";

const RayTracing = () => {
  return (
    <>
      <div className="w-full bg-black h-[450px] pt-[75px] pb-[75px]">
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
        <div className="flex justify-center">
          <div className="w-[900px] h-[250px] m-10">
            <img className="w-full h-full" src="/images/PowerChart.png" />
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[400px] pt-[75px] pb-[75px]">
        <hr className="bg-[#999999] box-content w-[100%] max-w-[1290px] h-[1px] m-auto"></hr>
        <div className="text-center mt-[8px] mb-[8px] mr-[15px] ml-[15px]">
          <h3 className="font-bold text-[20px] text-center text-white mt-[75px]">
            Ray Tracing
          </h3>
        </div>
        <div className="text-center mt-[8px] mb-[8px] mr-[15px] ml-[15px]">
          <h2 className="font-bold text-[34px] text-center text-white">
            Hyperrealistic. Hyperfast.
          </h2>
        </div>
        <div className="text-center mt-[8px] text-white font-Sig text-[15px]">
          <p>
            The Ada architecture unleashes the full glory of ray tracing, which
            simulates how light behaves in the real world. With the power of RTX
            40 Series<br></br> and third-gen RT Cores, you can experience
            incredibly detailed virtual worlds like never before.{" "}
          </p>
        </div>
        <div className="float-left w-[100%] text-center mt-[40px] font-bold text-[17px]">
          <a className="text-white">
            <span>Get Real With RTX Ray Tracing</span>
          </a>
        </div>
      </div>
      <ImageComparison />
    </>
  );
};

export default RayTracing;
