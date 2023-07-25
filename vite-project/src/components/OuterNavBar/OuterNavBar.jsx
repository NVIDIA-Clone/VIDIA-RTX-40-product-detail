import ProductDropdown from './ProductDropdown';
import GamesDropdown from './GamesDropdown';

const OuterNavBar = () => {
    
    return (
        <>
        <nav className="h-[66px] w-full bg-black text-NVNavBarGray font-Sig hover:cursor-pointer flex flex-row items-center" >
            <div className="sub-brand-nav-container py-0 px-8 flex">
                <span className="sub-brand-name text-NVWhiteTxt font-semibold text-2xl ">PeForce</span>
                <ul className="flex items-center">
                    <li className="sub-brand-nav-item relative dropdown"></li>
                        <div className="relative inline-block text-left text-base">
                            <ProductDropdown /> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                 <path d="M7 10l5 5 5-5z"></path>
                                 <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </div>
                    <li className="sub-brand-nav-item">
                        <div className="relative inline-block text-left text-base">
                            <GamesDropdown />
                        </div>
                    </li>
                    <li className="sub-brand-nav-item hover:text-NVGreen tracking-wide">
                        <div className="relative inline-block text-left text-base">PeForce Experience</div>
                    </li>
                    <li className="sub-brand-nav-item hover:text-NVGreen tracking-wide">
                        <div className="relative inline-block text-left text-base">Drivers</div>
                    </li>
                    <li className="sub-brand-nav-item hover:text-NVGreen">News</li>
                    <li className="sub-brand-nav-item tracking-wide">Support&Shop</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default OuterNavBar;