import {useState, useContext} from 'react';
import LandingPageContext from "../LandingPageContext.jsx";

const CompatibilityModal = () => {
    const [showModal, setShowModal] = useState(false);
    const { isHovered, handleMouseEnter, handleMouseLeave } = useContext(LandingPageContext);
    
    const [fadingOut, setFadingOut] = useState(false);

    const handleOpenClick = () => {
        setShowModal(true);
    }

    const handleCloseClick = () => {
        setFadingOut(true);
        setTimeout(() => {
            setShowModal(false);
            setFadingOut(false);
        }, 600)    
    }

    return (
        <>
         <div className="text-center text-base font-bold py-6 m-0.5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOpenClick}>
                <span className="object-center">Check Your System Compatibility</span>
                <button>
                    <svg
                    width="30px"
                    height="30px"
                    viewBox="1 -2 30 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-500 ease-in-out transform translate-x-0 ${
                        isHovered ? "translate-x-1" : ""
                    }`}
                    >
                    <path
                        d="M10 7L15 12L10 17"
                        stroke={isHovered ? "white" : "#76b900"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </button>
                </div>

        {showModal ? (
            <>
            <div className={`fixed inset-0 z-[75] overflow-y-auto ${fadingOut ? "animate-fadeOutModal" : "animate-fadeInModal"}`}>
                <div
                    className="fixed inset-0 w-full h-full bg-black"
                    onClick={handleCloseClick}
                ></div>
                <div className="compatibility-modal-grid grid grid-cols-8 py-5 min-h-screen items-stretch" >
                    <div className="compatibility-modal-header col-start-2 col-span-6 row-start-1 row-span-1 flex items-start bg-NVBGGray relative">
                        <div className="py-16 px-16 text-center flex flex-col items-center">
                            <h1 className="text-[26px] font-bold text-NVWhiterTxt tracking-tight pb-10">Prepare your system for the PeForce RTX® 4090 Founders Edition</h1>
                            <br></br>
                            <p className="text-sm pb-1">Graphics card specifications vary by add-in-card manufacturer. Please refer to manufacturer specifications for add-in-card models.</p> 
                            
                            <p className="text-sm pb-6">The following steps require some knowledge of PC component specifications, in addition to physical installation.</p> 
                            <h1 className="text-[26px] tracking-tight font-bold py-5">1. Check your power supply</h1>
                            <img className="px-24" src="/public/images/850W_minimum.png" alt="image of 850W power supply"></img>
                            <h4 className="font-bold text-sm py-4">850W Minimum</h4>
                            <p className="text-sm">A higher power rating may be required depending on your system configuration</p>
                            <p className="text-sm pt-4 pb-8">Please check with your PSU vendor</p>
                            <div className="power-compatibility-row flex">
                                <div className="compatibility-option1-card flex flex-col w-1/2">
                                <img src="/public/images/compatibility-8pin.png"></img>
                                <h4 className="font-bold text-sm py-4">Power Compatibility Option 1.</h4>
                                <p className="text-sm">3x PCIe 8-pin cables from power supply to included RTX 4090 Power Connector Adapter. Graphics card support 3x or 4x PCIe 8-pin cables.</p>
                                </div>
                                <div className="compatibility-option2-card flex flex-col w-1/2">
                                    <img src="/public/images/compatibility-16pin.png"></img>
                                    <h4 className="font-bold text-sm py-4">Power Compatibility Option 2.</h4>
                                    <p className="text-sm">1x 450W or greater PCIe Gen 5 power cable from power supply.</p>
                                </div>
                            </div>
                            <h1 className="text-[26px] tracking-tight font-bold py-7">2. Check your case</h1>
                            <div className="check-case-row flex">
                                <div className="expansion-slot-card flex flex-col w-1/2">
                                    <img src="/public/images/expansion-slots.png"></img>
                                    <h4 className="font-bold text-sm py-4">Three unused expansion slots</h4>
                                    <p className="text-sm">Reserving clearance around the graphics card equivalent to an unused expansion slot will typically improve airflow</p>
                                </div>
                                <div className="clearance-card flex flex-col w-1/2">
                                    <img src="/public/images/case-size.png"></img>
                                    <p className="text-sm py-4">Clearance: Must have space for 12" (304mm) x 5.4" (137mm) x 3-slot card (61mm). Plan 1.4" (36mm) additional space for power cables.</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="text-gray-400 bg-transparent text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                            <span onClick={handleCloseClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-3 2 24 24"><path className= "transition-transform duration-500 ease-in-out transform"  
                            fill={isHovered ? "#A9A9A9" : "#6666"} d="M12,2A10,10,0,1,0,22,12,9.9909,9.9909,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z" ></path><polygon className="nv-modal-close-cross" fill="#e8e6e3" points="7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41"></polygon></svg>
                            </span>
                        <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>
            </div>
            </>
        ) : null}
        </>
    );
}

export default CompatibilityModal;

