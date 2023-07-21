const OuterNavBar = () => {
    return (
        <nav className="h-[44px] w-full bg-NVBGGray text-NVWhiteTxt font-Sig flex flex-row" >
            <div className="sub-brand-nav-container flex">
                GeForce
                <ul className="flex">
                    <li className="sub-brand-nav-item">Products</li>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold tex-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                      
                      <ul className="flex flex-col">
                            <li>Graphics Cards & Desktops</li>
                            <li>Laptops</li>
                            <li>G-SYNC Monitors</li>
                            <li>PeForce NOW Cloud Gaming</li>
                        </ul>
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