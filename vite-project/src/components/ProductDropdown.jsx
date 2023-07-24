const ProductDropdown = () => {
    return (
    <div className="group relative dropdown px-4 hover:text-white tracking-wide">
            <a>Product</a>
            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-white shadow px-6 py-8">
                    <li className="py-1"><a className="block text-NVDropDownGray hover:text-black">Graphics Cards & Desktops</a></li>
                    <li className="py-1"><a className="block text-NVDropDownGray hover:text-black">Laptops</a></li>
                    <li className="py-1"><a className="block text-NVDropDownGray hover:text-NVGreen">G-Sync Monitors</a></li>
                    <li className="py-1"><a className="block text-NVDropDownGray hover:text-NVGreen">PeForce NOW Cloud Gaming</a></li>
                </ul>
            </div>
        </div>

    )
}

export default ProductDropdown;


