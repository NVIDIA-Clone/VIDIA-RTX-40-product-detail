const ProductDropdown = () => {
    return (
    <div className="group/product relative dropdown px-4 hover:text-white tracking-wide">
            <a>Products</a>
            <div className="group-hover/product:block dropdown-menu hidden absolute h-auto ">
                <ul className="top-0 w-72 space-y-1 bg-white">
                    <li className="group/graphicscardsdesktops py-1 m-1.5" ><a className="block text-NVDropDownGray hover:text-black">Graphics Cards & Desktops</a>
                        <div className="group/graphicscardsdesktops dropdown px-4 hover:text-black tracking-wide">
                            <ul className="flex">
                                <div className="group-hover/graphicscardsdesktops:block bg-white box-content inset-x-72 top-1.5 dropdown-menu hidden absolute h-fit w-56 space-y-2 p-1 shadow-2xl">
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 40 Series</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 4080</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 4070 Ti / 4070</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 4060 Ti / 4060</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 30 Series</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 3090 Ti / 3090</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 3080 Ti / 3080</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 3070 Ti / 3070</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 3060 Ti / 3060</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 3050</a></li> 
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 20 Series</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>GTX 16 Series</a></li>
                                </div>
                            </ul> 
                        </div>        
                    </li>
                    <li className="group/laptops py-1 m-2"><a className="block text-NVDropDownGray hover:text-black">Laptops</a>
                        <div className="group/laptops dropdown px-4 hover:text-black tracking-wide">
                            <ul className="flex">
                                <div className="group-hover/laptops:block bg-white box-content inset-x-72 inset-y-12 dropdown-menu hidden absolute h-fit w-56 space-y-1.5 p-1 shadow-2xl">
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 40 Series Laptops</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX 30 Series Laptops</a></li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className="py-1 m-1.5"><a className="block text-NVDropDownGray hover:text-NVGreen">G-Sync Monitors</a></li>
                    <li className="py-1 m-1.5"><a className="block text-NVDropDownGray hover:text-NVGreen">PeForce NOW Cloud Gaming</a></li>
                </ul>
            </div>
        </div>

    )
}

export default ProductDropdown;

