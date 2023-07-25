import { useState } from "react";

const ImageComparison = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      {/* Image Comparison */}
      <div className="relative mx-auto max-w-700 h-[1062.7px] overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full before-image"
          src="/images/geforce-ray-tracing-portal-rtx-off-2560.webp"
          alt=""
          style={{
            clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0% 100%)`,
          }}
        />
        <div className="absolute z-10 bottom-10 left-10">
          <div className="cursor-pointer p-2 text-[#eee] text-[26px] font-black drop-shadow-2xl">
            RTX
            <span className="text-gray-700"> Off</span>
          </div>
        </div>
        <img
          className="absolute top-0 left-0 w-full h-full after-image"
          src="/images/geforce-ray-tracing-portal-rtx-on-2560.webp"
          alt=""
          style={{
            clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`,
          }}
        />
        <div className="absolute z-10 bottom-10 right-10">
          <div className="cursor-pointer p-2 text-[#eee] text-[26px] font-black drop-shadow-2xl">
            RTX
            <span className="text-[#76b900]"> On</span>
          </div>
        </div>
        <div
          className="absolute w-4 h-full transform -translate-x-1/2 slider-line left-[calc(${sliderValue}% - 2px)]"
          style={{ top: 0, bottom: 0 }}
        ></div>
        <div className="absolute w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 slider-icon left-[calc(${sliderValue}% - 8px)] top-1/2">
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
        <input
          type="range"
          className="absolute inset-0 opacity-0 cursor-grab slider"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
};

export default ImageComparison;
