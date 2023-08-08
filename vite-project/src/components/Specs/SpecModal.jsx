import { useState, useContext } from "react";
import LandingPageContext from "../LandingPageContext.jsx";

const SpecModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { isHovered, handleMouseEnter, handleMouseLeave, specs } =
    useContext(LandingPageContext);
  const [fadingOut, setFadingOut] = useState(false);

  const handleOpenClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setFadingOut(true);
    setTimeout(() => {
      setShowModal(false);
      setFadingOut(false);
    }, 600);
  };

  return (
    <>
      <button
        className="text-[16px] py-2 px-3 w-[10rem] h-[50px] bg-[#76b900] text-[black] font-bold tracking-tight text-base hover:bg-[#91c733]"
        type="button"
        onClick={handleOpenClick}
      >
        View Full Specs
      </button>

      {showModal ? (
        <>
          <div
            className={`fixed inset-0 z-[75] overflow-y-auto overflow-hidden ${
              fadingOut ? "animate-fadeOutModal" : "animate-fadeInModal"
            }`}
          >
            <div
              className="fixed inset-0 w-full h-full bg-black"
              onClick={handleCloseClick}
            ></div>
            <div className="grid items-stretch min-h-screen grid-cols-8 py-5 specs-modal-grid">
              <div className="relative flex items-start col-span-6 col-start-2 row-span-1 row-start-1 specs-modal-header bg-NVBGGray">
                <span className="inline-flex items-center justify-center px-4 ml-auto padding-div"></span>
                <span className="py-16 text-3xl font-bold text-NVWhiterTxt">
                  PeForce RTX 4090
                </span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent"
                  data-modal-hide="defaultModal"
                >
                  <span
                    onClick={handleCloseClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="-3 2 24 24"
                    >
                      <path
                        className="transition-transform duration-500 ease-in-out transform"
                        fill={isHovered ? "#A9A9A9" : "#6666"}
                        d="M12,2A10,10,0,1,0,22,12,9.9909,9.9909,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z"
                      ></path>
                      <polygon
                        className="nv-modal-close-cross"
                        fill="#e8e6e3"
                        points="7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41"
                      ></polygon>
                    </svg>
                  </span>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="relative w-full col-span-6 col-start-2 row-span-1 row-start-2 text-center specs-modal-table bg-NVBGGray">
                <table className="w-full table-auto">
                  <tbody>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold w-44">
                        GPU Engine Specs:
                      </td>
                      <td className="w-40 py-4 text-left">
                        <h5 className="text-sm">VIDIA CUDA Cores</h5>
                      </td>
                      <td className="w-40 py-4">
                        <h5 className="text-sm">{specs[0].vidia_cuda_cores}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Boost Clock (GHz)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].boost_clock}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray ">
                        <h5 className="text-sm">Base Clock (GHz)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].base_clock}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row blank-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 "></td>
                      <td className="w-40 py-4"></td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold">Memory Specs:</td>
                      <td className="w-40 py-4 text-left">
                        <h5 className="text-sm">Standard Memory Config</h5>
                      </td>
                      <td className="w-40 py-4 ">
                        <h5 className="text-sm">
                          {specs[0].standard_memory_config}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Memory Interface Width</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].memory_interface}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row blank-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 "></td>
                      <td className="w-40 py-4"></td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold">
                        Technology Support:
                      </td>
                      <td className="w-40 py-4 text-left">
                        <h5 className="text-sm">Ray Tracing Cores</h5>
                      </td>
                      <td className="w-40 py-4">
                        <h5 className="text-sm">{specs[0].ray_tracing_cores}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Tensor Cores</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].tensor_cores}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">VIDIA Architecture</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].vidia_architecture}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA DLSS
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].vidia_dlss}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Reflex
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_reflex ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Broadcast
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_broadcast ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">PCI Express Gen 4</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].pci_express_gen_4 ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Resizable BAR</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].resizeable_bar ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA PeForce Experience
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {spec[0].vidia_geforce_experience ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Ansel
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_ansel ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">VIDIA FreeStyle</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_freestyle ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA ShadowPlay
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_shadowplay ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">VIDIA Highlights</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_highlights ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA G-SYNC
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_gsync ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          Game Ready Drivers
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].game_ready_drivers ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Studio Drivers
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_studio_drivers ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Omniverse
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_omniverse ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          Microsoft DirectX 12 Ultimate
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].directx_12_ultimate ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">VIDIA GPU Boost</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vidia_gpu_boost ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          VIDIA NVLink&trade; (SLI-Ready)
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vlink ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Vulkan RT API, OpenGL 4.6</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {spec[0].vulkan ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Encoder (VENC)
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs.vidia_encoder}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VIDIA Decoder (VDEC)
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs.vidia_decoder}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          AV1 Encode
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].av1_encode ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          AV1 Decode
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].av1_decode ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          CUDA Capability
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{spec[0].cuda_capabilities}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row ">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">
                          VR Ready
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].vr_ready ? "Yes" : "No"}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row blank-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 "></td>
                      <td className="w-40 py-4"></td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold">
                        Display Support:
                      </td>
                      <td className="w-40 py-4 text-left">
                        <h5 className="text-sm">
                          Maximum Resolution & Refresh Rate<sup>(1)</sup>
                        </h5>
                      </td>
                      <td className="w-40 py-4">
                        <h5 className="text-sm">{specs[0].maximum_resolution}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Standard Display Connectors</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          HDMI<sup>(2)</sup>, 3x DisplayPort<sup>(3)</sup>
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Multi Monitor</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          up to 4<sup>(4)</sup>
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">HDCP</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].hdcp}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row blank-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 "></td>
                      <td className="w-40 py-4"></td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold">
                        Card Dimensions:
                      </td>
                      <td className="w-40 py-4 text-left">
                        <h5 className="text-sm">Length</h5>
                      </td>
                      <td className="w-40 py-4">
                        <h5 className="text-sm">{specs[0].length}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Width</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].width}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Slots</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">{specs[0].slots}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row blank-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 "></td>
                      <td className="w-40 py-4"></td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold">
                        Thermal and Power Specs:
                      </td>
                      <td className="w-40 py-4 text-left">
                        <h5 className="text-sm">
                          Maximum GPU Temperature (in C)
                        </h5>
                      </td>
                      <td className="w-40 py-4">
                        <h5 className="text-sm">{specs[0].maximum_gpu_temp}</h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Idle Power (W)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].idle_power}
                          <sup>(5)</sup>
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Video Playback Power (W)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].video_playback_power}
                          <sup>(6)</sup>
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Average Gaming Power (W)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].average_gaming_power}
                          <sup>(7)</sup>
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Total Graphics Power (W)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].total_graphics_power}
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">Required System Power (W)</h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].required_system_power}
                          <sup>(8)</sup>
                        </h5>
                      </td>
                    </tr>
                    <tr className="specs-row">
                      <td className="py-4 text-sm font-bold"></td>
                      <td className="w-40 py-4 text-left border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          Supplementary Power Connectors
                        </h5>
                      </td>
                      <td className="w-40 py-4 border-t border-NVDropDownGray">
                        <h5 className="text-sm">
                          {specs[0].supplementary_power_connector}
                        </h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="specs_modal-footnotes col-start-2 col-span-6 row-start-3 row-span-1 relative w-full bg-NVBGGray rounded-md text-NVDropDownGray text-[11px] tracking-tighter p-2.5">
                <p className="p-2.5">
                  1 - Up to 4K 12-bit HDR at 240Hz with DP 1.4a + DSC or HDMI
                  2.1a + DSC. Up to 8K 12-bit HDR at 60Hz with DP 1.4a + DSC or
                  HDMI 2.1a + DSC.
                </p>
                <p className="p-2.5">
                  2 - As specified in HDMI 2.1a: up to 4K 240Hz or 8K 60Hz with
                  DSC, Gaming VRR, HDR
                </p>
                <p className="p-2.5">3 - DisplayPort 1.4a</p>
                <p className="px-2.5 pt-2.5 pb-0 ">4 - Multi Monitor:</p>
                <ul className="list-disc">
                  <li className="mx-14">
                    4 independent displays at 4K 120Hz using DP or HDMI
                  </li>
                  <li className="mx-14">
                    2 independent displays at 4K 240Hz or 8K 60Hz with DSC using
                    DP or HDMI
                  </li>
                  <li className="mx-14">
                    Other display configurations may be possible based on
                    available bandwidth
                  </li>
                </ul>
                <p className="p-2.5">
                  5 - Idle power measured with GPU running at idle at the
                  Windows desktop for 10 minutes
                </p>
                <p className="p-2.5">
                  6 - Video playback power measured using AV1 codec
                </p>
                <p className="p-2.5">
                  7 - Average gaming power is measured across 22 games at 4K,
                  1440p, and 1080p
                </p>
                <p className="p-2.5">
                  8 - Minimum is based on a PC configured with a Ryzen 9 5900X
                  processor. Power requirements can be different depending on
                  system configuration.
                </p>
                <p className="p-2.5">
                  Note: The above specifications represent this GPU as
                  incorporated into VIDIA's Founders Edition or reference
                  graphics card design. Clock specifications apply while gaming
                  with medium to full GPU utilization. Graphics card
                  specifications may vary by add-in-card manufacturer. Please
                  refer to the add-in-card manufacturer's website for actual
                  shipping specifications.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SpecModal;
