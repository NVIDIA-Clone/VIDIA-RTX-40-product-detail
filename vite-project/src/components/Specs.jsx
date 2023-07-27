import { useContext } from "react";
import LandingPageContext from "./LandingPageContext.jsx";

const Specs = () => {

    const { isHovered, handleMouseEnter, handleMouseLeave } = useContext(LandingPageContext);

    return (
        <div className="specs-grid grid grid-cols-8 grid-rows-6 bg-black font-Sig text-NVWhiteTxt w-screen">
             <div className="specs-title col-start-3 col-span-4 row-start-1 row-span-1 justify-self-center w-28 text-2xl font-bold">
                 <h1>Specs</h1>
            </div>
            <div className="spec-table col-start-3 col-span-4 row-start-2 row-span-2 justify-self-center">
                <table className="table-fixed">
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td className="w-72 py-4">VIDIA CUDA Cores</td>
                        <td className="w-40 py-4"><h5 className="text-lg font-bold">16384</h5></td>
                    </tr>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td className="py-4">Boost Clock (GHz)</td>
                        <td className="py-4"><h5 className="text-lg font-bold">2.52</h5></td>
                    </tr>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td className="py-4">Memory Size</td>
                        <td className="py-4"><h5 className="text-lg font-bold">24 GB</h5></td>
                    </tr>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td className="py-4">Memory Type</td>
                        <td className="py-4"><h5 className="text-lg font-bold">GDDR6X</h5></td>
                    </tr>
                </table>
            </div>
            <div className="system-compatibility col-start-3 col-span4 row-start 3 row-span-1 justify-self-center">
                <div className="text-center font-bold py-1 m-0.5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    }`}>
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
            </div>
        </div>
    )
}

export default Specs;
/*

*/