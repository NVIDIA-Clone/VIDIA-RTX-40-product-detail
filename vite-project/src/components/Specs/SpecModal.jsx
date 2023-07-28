import {useState, useContext} from 'react';
import LandingPageContext from "../LandingPageContext.jsx";

const SpecModal = () => {
    const [showModal, setShowModal] = useState(false);
    const { isHovered, handleMouseEnter, handleMouseLeave, specs } = useContext(LandingPageContext);

    return (
        <>
        <button className="text-[18px] mt-2.5 ml-[15px] p-[13px_15px] bg-[#76b900] text-[black] font-bold text-base hover:bg-[#91c733]" type="button" onClick={() => setShowModal(true)}>View Full Specs
        </button>

        {showModal ? (
            <>
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black"
                        onClick={() => setShowModal(false)}
                    ></div>
                    <div className="specs-modal-grid grid grid-cols-8 py-5 min-h-screen items-stretch" >
                        <div className="specs-modal-header col-start-2 col-span-6 row-start-1 row-span-1 flex items-start bg-[#1A1A1A] relative">
                            <span className="padding-div ml-auto inline-flex justify-center items-center px-4"></span>
                            <span className="text-3xl font-bold text-NVWhiteTxt py-16">PeForce RTX 4090</span>
                            <button type="button" className="text-gray-400 bg-transparent text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                                <span onClick={() => setShowModal(false) } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-3 2 24 24"><path className= "transition-transform duration-500 ease-in-out transform"  
                                fill={isHovered ? "#A9A9A9" : "#6666"} d="M12,2A10,10,0,1,0,22,12,9.9909,9.9909,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z" ></path><polygon className="nv-modal-close-cross" fill="#e8e6e3" points="7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41"></polygon></svg>
                                </span>
                            <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="specs-modal-table col-start-2 col-span-6 row-start-2 row-span-1 relative w-full bg-[#1A1A1A] rounded-md text-center">
                            <table className="table-fixed w-fit">
                            <tbody>
                            <tr className="specs-row">
                                <td className="text-sm font-bold w-44 py-4">GPU Engine Specs:</td>
                                <td className="w-40 py-4 text-left"><h5 className="text-sm">VIDIA CUDA Cores</h5></td>
                                <td className="w-40 py-4"><h5 className="text-sm">{specs.vidia_cuda_cores}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Boost Clock (GHz)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.boost_clock}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray "><h5 className="text-sm">Base Clock (GHz)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.base_clock}</h5></td>
                            </tr>
                            <tr className="specs-row blank-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 "></td>
                                <td className="w-40 py-4"></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4">Memory Specs:</td>
                                <td className="w-40 py-4 text-left"><h5 className="text-sm">Standard Memory Config</h5></td>
                                <td className="w-40 py-4 "><h5 className="text-sm">{specs.standard_memory_config}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Memory Interface Width</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.memory_interface}</h5></td>
                            </tr>
                            <tr className="specs-row blank-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 "></td>
                                <td className="w-40 py-4"></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4">Technology Support:</td>
                                <td className="w-40 py-4 text-left"><h5 className="text-sm">Ray Tracing Cores</h5></td>
                                <td className="w-40 py-4"><h5 className="text-sm">{specs.ray_tracing_cores}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Tensor Cores</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.tensor_cores}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">VIDIA Architecture</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_architecture}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA DLSS</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_dlss}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Reflex</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_reflex ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Broadcast</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_broadcast ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">PCI Express Gen 4</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.pci_express_gen_4 ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Resizable BAR</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.resizeable_bar ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA PeForce Experience</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_geforce_experience ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Ansel</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_ansel ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">VIDIA FreeStyle</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_freestyle ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA ShadowPlay</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_shadowplay ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">VIDIA Highlights</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_highlights ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA G-SYNC</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_gsync ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">Game Ready Drivers</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.game_ready_drivers ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Studio Drivers</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_studio_drivers ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Omniverse</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_omniverse ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">Microsoft DirectX 12 Ultimate</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.directx_12_ultimate ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">VIDIA GPU Boost</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_gpu_boost ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">VIDIA NVLink&trade; (SLI-Ready)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vlink ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Vulkan RT API, OpenGL 4.6</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vulkan ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Encoder (VENC)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_encoder}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VIDIA Decoder (VDEC)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vidia_decoder}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">AV1 Encode</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.av1_encode ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">AV1 Decode</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.av1_decode ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">CUDA Capability</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.cuda_capabilities}</h5></td>
                            </tr>
                            <tr className="specs-row ">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm underline underline-offset-4 decoration-2 decoration-NVGreen hover:decoration-NVWhiteTxt">VR Ready</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.vr_ready ? 'Yes' : 'No'}</h5></td>
                            </tr>
                            <tr className="specs-row blank-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 "></td>
                                <td className="w-40 py-4"></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4">Display Support:</td>
                                <td className="w-40 py-4 text-left"><h5 className="text-sm">Maximum Resolution & Refresh Rate<sup>(1)</sup></h5></td>
                                <td className="w-40 py-4"><h5 className="text-sm">{specs.maximum_resolution}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Standard Display Connectors</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">HDMI<sup>(2)</sup>, 3x DisplayPort<sup>(3)</sup></h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Multi Monitor</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">up to 4<sup>(4)</sup></h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">HDCP</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.hdcp}</h5></td>
                            </tr>
                            <tr className="specs-row blank-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 "></td>
                                <td className="w-40 py-4"></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4">Card Dimensions:</td>
                                <td className="w-40 py-4 text-left"><h5 className="text-sm">Length</h5></td>
                                <td className="w-40 py-4"><h5 className="text-sm">{specs.length}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Width</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.width}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Slots</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.slots}</h5></td>
                            </tr>
                            <tr className="specs-row blank-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 "></td>
                                <td className="w-40 py-4"></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4">Thermal and Power Specs:</td>
                                <td className="w-40 py-4 text-left"><h5 className="text-sm">Maximum GPU Temperature (in C)</h5></td>
                                <td className="w-40 py-4"><h5 className="text-sm">{specs.maximum_gpu_temp}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Idle Power (W)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.idle_power}<sup>(5)</sup></h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Video Playback Power (W)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.video_playback_power}<sup>(6)</sup></h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Average Gaming Power (W)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.average_gaming_power}<sup>(7)</sup></h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Total Graphics Power (W)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.total_graphics_power}</h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Required System Power (W)</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.required_system_power}<sup>(8)</sup></h5></td>
                            </tr>
                            <tr className="specs-row">
                                <td className="text-sm font-bold py-4"></td>
                                <td className="w-40 py-4 text-left border-t border-NVDropDownGray"><h5 className="text-sm">Supplementary Power Connectors</h5></td>
                                <td className="w-40 py-4 border-t border-NVDropDownGray"><h5 className="text-sm">{specs.supplementary_power_connector}</h5></td>
                            </tr>
                            </tbody>
                        </table>                                       
                            
                        </div>
                    </div>
                </div>
            </>
        ) : null}
        </>
    );
}

export default SpecModal;

