import SpecModal from "./SpecModal";
import CompatibilityModal from "./CompatibilityModal";




const Specs = () => {



  
  return (
    <div className="grid w-full max-h-[44rem] grid-cols-8 grid-rows-6 tracking-tight bg-black specs-grid font-Sig text-NVWhiterTxt">
      <div className="specs-title col-start-3 col-span-4 row-start-1 row-span-1 justify-self-center w-28 text-[40px] mt-16 font-bold">
        <h1>Specs</h1>
      </div>
      <div className="col-span-4 col-start-3 row-span-2 row-start-2 mt-16 spec-table justify-self-center">
        <table className="table-fixed">
          <tbody>
            <tr className="border-t specs-row border-NVDropDownGray">
              <td className="py-4 w-72">VIDIA CUDA Cores</td>
              <td className="w-40 py-4">
                <h5 className="text-lg font-bold">16384</h5>
              </td>
            </tr>
            <tr className="border-t specs-row border-NVDropDownGray">
              <td className="py-4">Boost Clock (GHz)</td>
              <td className="py-4">
                <h5 className="text-lg font-bold">2.52</h5>
              </td>
            </tr>
            <tr className="border-t specs-row border-NVDropDownGray">
              <td className="py-4">Memory Size</td>
              <td className="py-4">
                <h5 className="text-lg font-bold">24 GB</h5>
              </td>
            </tr>
            <tr className="border-t specs-row border-NVDropDownGray">
              <td className="py-4">Memory Type</td>
              <td className="py-4">
                <h5 className="text-lg font-bold">GDDR6X</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center col-span-4 col-start-3 row-span-1 row-start-4 mt-[10rem] cursor-pointer full-specs-btn justify-self-center">
        <SpecModal />
        <CompatibilityModal />
      </div>
    </div>
  );
};

export default Specs;
/*

*/
