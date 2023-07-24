const Performance = () => {
  return (
    <div className="flex flex-col items-center bg-NVBGGray">
      <h1 className="text-white">Performance</h1>
      <img
        src="./images/PerformanceGraph.png"
        alt="Graph of 4090 performance across different games"
      />
      <p className="text-[#AAAAAA]">
        3840x2160 Resolution, Highest Game Settings, DLSS Super Resolution
        Performance Mode, DLSS Frame Generation on RTX 40 Series, i9-12900K,
        32GB RAM, Win 11 x64. Cyberpunk 2077 with new Ray Tracing: Overdrive
        Mode Technology Preview based on pre-release build.
      </p>
    </div>
  );
};
export default Performance;