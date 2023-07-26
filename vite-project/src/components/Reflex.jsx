const Reflex = () => {
  return (
    <>
      <div className="font-Sig bg-[url(images/geforce-reflex-overwatch2-video-bg-2560-d.jpg)] float-left w-[100%] h-[990px]">
        <div className="w-[990pt] ml-auto mr-auto pl-0 pr-0 text-center">
          <h2 className="text-[#ffffff] pt-[75px] text-[20px] font-bold text-center">
            NVIDIA Reflex
          </h2>
          <h3 className="text-[#ffffff] pt-[12px] text-[36px] font-bold text-center">
            Victory Measured in Milliseconds
          </h3>
          <p className="text-[#eee] leading-[1.6em] block font-normal text-[15px] pt-[10px] pb-[10px]">
            NVIDIA Reflex and GeForce RTX 40 Series GPUs deliver the lowest
            latency (ms) and best responsiveness for the ultimate<br></br>{" "}
            competitive advantage. Built to optimize and measure system latency,
            Reflex provides faster target acquisition, quicker<br></br> reaction
            times, and the best aim precision for competitive games.
          </p>
          <div className="pt-[18px]">
            <span className="text-[#ffffff] text-[16px] font-bold">
              Get a Competitive Advantage with Reflex
            </span>
          </div>
          <div className="relative overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/Yd7Wmgl2oow?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=1&amp;loop=0&amp;controls=1&amp;enablejsapi=1?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=1&amp;loop=0&amp;controls=1&amp;enablejsapi=1&amp;rel=0"
              allowFullScreen=""
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube Video"
              loading="lazy"
              aria-label="YouTube Video"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
            <a
              href="https://www.youtube.com/embed/Yd7Wmgl2oow?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=1&amp;loop=0&amp;controls=1&amp;enablejsapi=1?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=1&amp;loop=0&amp;controls=1&amp;enablejsapi=1&amp;rel=0"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 left-0 w-full h-full"
            >
              <img
                src="/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/video-thumbnail-3.jpg"
                alt="Play Video"
                className="object-cover w-full h-full"
              />
            </a>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {/* You can add your custom play button here if needed */}
              {/* For example, you can use SVG icons or other elements */}
              <div className="play-button-container">
                <div className="play-button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflex;
