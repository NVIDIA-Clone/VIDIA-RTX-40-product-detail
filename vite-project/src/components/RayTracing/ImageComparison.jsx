import { useState } from "react";

const ImageComparison = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const calculateOpacity = () => {
    // Map the sliderValue (0-100) to an opacity value (1-0) for the images.
    return sliderValue / 100;
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
          <div
            className="cursor-pointer p-2 text-[#eee] text-[26px] font-black drop-shadow-2xl"
            style={{ opacity: calculateOpacity() }}
          >
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
          <div
            className="cursor-pointer p-2 text-[#eee] text-[26px] font-black drop-shadow-2xl"
            style={{ opacity: 1 - calculateOpacity() }}
          >
            RTX
            <span className="text-[#76b900]"> On</span>
          </div>
        </div>
        <div
          className="absolute w-[2px] h-full transform bg-[#76b900] -translate-x-1/2 slider-line left-[calc(${sliderValue}% - 2px)]"
          style={{
            top: 0,
            bottom: 0,
            transform: "translateX(-50%)",
            left: `${sliderValue}%`,
          }}
        ></div>
        <div
          className="absolute z-10 w-16 h-16 text-white top-1/2 right-[calc(${sliderValue}% - 0px)]"
          style={{ left: `calc(${sliderValue}% - 20px)` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#76b900"
            strokeWidth="2"
            width="40"
            height="40"
          >
            {/* Outer Circle */}
            <circle cx="12" cy="12" r="11" fill="#76b900" />
            {/* Left Arrow */}
            <text x="6" y="15" fontSize="8" stroke="#FFFFFF">
              &lt;
            </text>
            {/* Right Arrow */}
            <text x="14" y="15" fontSize="8" stroke="#FFFFFF">
              &gt;
            </text>
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
