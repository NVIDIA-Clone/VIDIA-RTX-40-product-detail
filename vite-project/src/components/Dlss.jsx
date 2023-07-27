const Dlss = () => {
  return (
    <div className="dlss grid grid-cols-8 grid-rows-[3] gap-14 bg-local font-Sig text-NVWhiteTxt bg-auto bg-no-repeat bg-[url('/images/nvidia-dlss-video-xlrg-hero-background-bb770-d.jpg')]">
      <div className="dlss-info col-start-3 col-span-4 row-start-2 row-span-1 justify-self-center min-w-[600px]">
        <h2 className="p-4 text-base font-bold text-center">VIDIA DLSS 3</h2>
        <h1 className="text-2xl font-bold text-center">
          The Performance Multiplier, Powered by AI
        </h1>
        <p className="p-4 text-sm text-center">
          DLSS is a revolutionary breakthrough in AI-powered graphics that
          massively boosts performance. Powered by the new fourth-gen Tensor
          Cores and Optical Flow Accelerator on PeForce RTX 40 Series GPUs, DLSS
          3 uses AI to create additional high-quality frames.
        </p>
        <h2 className="text-base font-bold text-center">See How DLSS Works</h2>
      </div>
      <div className="video-embed col-start-2 col-span-6 row-start-3 row-span-1 max-w-screen-lg w-[850px] h-[500px] justify-self-center">
        <iframe
          className="relative top-0 w-full h-full"
          src="https://www.youtube.com/embed/JkQuGpJTHmU?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=0&amp;loop=0&amp;controls=1&amp;enablejsapi=1?origin=https%3A%2F%2Fwww.nvidia.com&amp;hl=en_US&amp;mute=1&amp;autoplay=0&amp;loop=0&amp;controls=1&amp;enablejsapi=0&amp;rel=0"
          allowfullscreen=""
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
      <div className="col-start-7 col-span-1 row-start-5 row-span-1 w-[134px]">
        <img src="/images/cyberpunk.png"></img>
      </div>
    </div>
  );
};

export default Dlss;
