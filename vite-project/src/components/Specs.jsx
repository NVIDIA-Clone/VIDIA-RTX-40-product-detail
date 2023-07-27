const Specs = () => {
    return (
        <div className="specs-grid grid grid-cols-8 grid-rows-6 bg-black font-Sig text-NVWhiteTxt w-screen">
             <div className="specs-title col-start-3 col-span-4 row-start-1 row-span-1 justify-self-center w-28 text-2xl font-bold">
                 <h1>Specs</h1>
            </div>
            <div className="spec-table col-start-3 col-span-4 row-start-2 row-span-2 justify-self-center">
                <table>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td>VIDIA CUDA Cores</td>
                        <td><h5 className="text-lg font-bold">16384</h5></td>
                    </tr>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td>Boost Clock (GHz)</td>
                        <td><h5 className="text-lg font-bold">2.52</h5></td>
                    </tr>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td>Memory Size</td>
                        <td><h5 className="text-lg font-bold">24 GB</h5></td>
                    </tr>
                    <tr className="specs-row border-t border-NVDropDownGray">
                        <td>Memory Type</td>
                        <td><h5 className="text-lg font-bold">GDDR6X</h5></td>
                    </tr>
                </table>
            </div>
        </div>
   
    )
}

export default Specs;
/*

*/