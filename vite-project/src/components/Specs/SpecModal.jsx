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
                            <span className="padding div ml-auto inline-flex justify-center items-center px-4"></span>
                            <span className="text-3xl font-bold text-NVWhiteTxt py-16">PeForce RTX 4090</span>
                            <button type="button" className="text-gray-400 bg-transparent text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                                <span onClick={() => setShowModal(false) } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-3 2 24 24"><path className= "transition-transform duration-500 ease-in-out transform"  
                                fill={isHovered ? "#A9A9A9" : "#6666"} d="M12,2A10,10,0,1,0,22,12,9.9909,9.9909,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z" ></path><polygon className="nv-modal-close-cross" fill="#e8e6e3" points="7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41"></polygon></svg>
                                </span>
                            <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="specs-modal-table col-start-2 col-span-6 row-start-2 row-span-1 relative w-full bg-[#1A1A1A] rounded-md text-center justify-self-center">
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        This will contain the table<br>
                        </br>
                        
                        This will contain the table<br>
                        </br>
                                                  
                            
                        </div>
                    </div>
                </div>
            </>
        ) : null}
        </>
    );
}

export default SpecModal;

