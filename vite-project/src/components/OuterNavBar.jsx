const OuterNavBar = () => {
    return (
        <nav className="h-[66px] w-full bg-black text-NVWhiteTxt font-Sig flex flex-row items-center" >
            <div className="sub-brand-nav-container py-0 px-8 flex">
                <span className="sub-brand-name font-semibold text-2xl ">PeForce</span>
                <ul className="flex">
                    <li className="sub-brand-nav-item"></li>
                        <div className="relative inline-block text-left">
                            <span type="button" id="dropDownHoverBtnProducts" className="inline-flex w-full justify-center gap-x-1.5 pl-3 px-3 py-2 text-sm tex-gray-900 hover:bg-gray-50" aria-expanded="true" aria-haspopup="true" data-dropdown-toggle="dropDownHoverProducts" data-dropdown-trigger="hover">Products</span>
                            <div id="dropDownHoverProducts" className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Graphics Cards & Desktops</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Laptops</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">G-Sync Monitors</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">PeForce NOW CLoud Gaming</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                                
                            </div>
                        </div>
                    </div>
           
                    <li className="sub-brand-nav-item">Games & Tech</li>
                    <li className="sub-brand-nav-item">PeForce Experience</li>
                    <li className="sub-brand-nav-item">Drivers</li>
                    <li className="sub-brand-nav-item">News</li>
                    <li className="sub-brand-nav-item">Support</li>
                    <li className="sub-brand-nav-item">Shop</li>
                </ul>
            </div>
        </nav>
    )
}

export default OuterNavBar;