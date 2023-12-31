import { useContext } from 'react';
import LandingPageContext from './LandingPageContext.jsx';

const Dlss = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useContext(LandingPageContext);

  return (
    <div className="dlss grid grid-cols-8 grid-rows-none gap-14 bg-local font-Sig text-NVWhiterTxt bg-auto bg-no-repeat bg-[url('/images/nvidia-dlss-video-xlrg-hero-background-bb770-d.jpg')]">
      <div className="dlss-info col-start-1 col-span-8 row-start-1 row-span-1 justify-self-center min-w-[600px] pt-14 tracking-tight">
        <h2 className="p-4 text-xl lg:text-base font-bold text-center">VIDIA DLSS 3</h2>
        <h1 className="text-3xl lg:text-2xl font-bold text-center">
          The Performance Multiplier, Powered by AI
        </h1>
        <p className="p-3 text-sm text-center">
          DLSS is a revolutionary breakthrough in AI-powered graphics that
          massively boosts performance. Powered by the new <br></br>fourth-gen Tensor
          Cores and Optical Flow Accelerator on PeForce RTX 40 Series GPUs, DLSS
          3 uses AI to create<br></br> additional high-quality frames.
        </p>
        <div
          className="text-lg lg:text-base text-center font-bold m-0.5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="object-center">See How DLSS Works</span>
          <button>
            <svg
              width="30px"
              height="30px"
              viewBox="1 -2 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-500 ease-in-out transform translate-x-0 ${
                isHovered ? 'translate-x-1' : ''
              }`}
            >
              <path
                d="M10 7L15 12L10 17"
                stroke={isHovered ? 'white' : '#76b900'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="video-embed col-start-2 col-span-6 row-start-2 row-span-2 max-w-screen-lg w-[850px] h-[500px] justify-self-center">
        <iframe
          className="relative top-0 w-full h-full"
          src="https://www.youtube.com/embed/JkQuGpJTHmU?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=0&amp;loop=0&amp;controls=1&amp;enablejsapi=1?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=0&amp;loop=0&amp;controls=1&amp;enablejsapi=0&amp;rel=0"
          allowFullScreen=""
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          aria-label="YouTube Video"
          data-modal-autoplay="false"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="col-span-4 col-start-3 row-span-1 row-start-4 justify-self-center">
        <p className="self-end text-xs text-center text-NVDLightGray">
          *Captured with GeForce RTX 4090 at 3840 x 2160
        </p>
      </div>
      <div className="col-start-7 col-span-1 row-start-4 w-[175px]">
        <img src="images/cyberpunk.png"></img>
      </div>
    </div>
  );
};

export default Dlss;
