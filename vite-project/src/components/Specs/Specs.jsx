
import SpecModal from "./SpecModal";
import CompatibilityModal from "./CompatibilityModal";

const Specs = () => {

   
 
    return (
        <div className="specs-grid grid grid-cols-8 grid-rows-6 bg-black font-Sig text-NVWhiterTxt tracking-tight w-screen">
             <div className="specs-title col-start-3 col-span-4 row-start-1 row-span-1 justify-self-center w-28 text-[28px] py-12 font-bold">
                 <h1>Specs</h1>
            </div>
            <div className="spec-table col-start-3 col-span-4 row-start-2 row-span-2 justify-self-center">
                <table className="table-fixed">
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <div className="full-specs-btn col-start-3 col-span-4 row-start-4 row-span-1 justify-self-center flex flex-col items-center">
                
                <SpecModal />
                <CompatibilityModal />
               
            </div>
        </div>
    )
}

export default Specs;
/*

*/