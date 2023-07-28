import {useState} from 'react';

const SpecModal = () => {
    const [showModal, setShowModal] = useState(false);
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
                    <div className="specs-modal-grid grid grid-cols-8 grid-rows-6 py-5 min-h-screen" >
                        <div className="full-specs-table col-start-3 col-span-4 row-start-1 row-span-1 relative w-full max-w-lg mx-auto bg-[#262626] rounded-md shadow-lg justify-self-center">
                                                         
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <p className="mt-2 text-[15px] leading-relaxed text-NVWhiteTxt">
                                    Insert Specs Here
                                </p>
                            </div>
                        </div>
                        <div className="specs-modal-close-container col-start-6 col-span-1 row-start-1 px-20 relative w-full max-w-lg mx-auto rounded-md shadow-lg justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="nv-modal-close-oval" fill="#666" d="M12,2A10,10,0,1,0,22,12,9.9909,9.9909,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z"></path><polygon className="nv-modal-close-cross" fill="#e8e6e3" points="7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41"></polygon></svg>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
        </>
    );
}

export default SpecModal;


