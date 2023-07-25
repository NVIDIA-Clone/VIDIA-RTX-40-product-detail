import ProductDropdown from './ProductDropdown';
import GamesDropdown from './GamesDropdown';

const OuterNavBar = () => {
    
    return (
        <>
        <nav className="h-[66px] w-full bg-black text-NVNavBarGray font-Sig hover:cursor-pointer flex flex-row items-center" >
            <div className="sub-brand-nav-container py-0 px-8 flex">
                <span className="sub-brand-name text-NVWhiteTxt font-semibold text-2xl ">PeForce</span>
                <ul className="flex items-center space-x-0.5">
                    <li className="sub-brand-nav-item relative dropdown"></li>
                        <span className="relative inline-block text-left text-base">
                            <ProductDropdown /> 
                        </span>
                    <li className="sub-brand-nav-item">
                        <span className="relative inline-block text-left text-base">
                            <GamesDropdown />
                        </span>
                    </li>
                    <li className="sub-brand-nav-item hover:text-NVGreen tracking-wide p-1">
                        <span className="relative inline-block text-left text-base">PeForce Experience</span>
                    </li>
                    <li className="sub-brand-nav-item hover:text-NVGreen tracking-wide p-1">
                        <span className="relative inline-block text-left text-base">Drivers</span>
                    </li>
                    <li className="sub-brand-nav-item hover:text-NVGreen tracking-wide">
                    <span className="relative inline-block text-left text-base">News</span>
                    </li>
                    <li className="sub-brand-nav-item tracking-wide">Support&Shop</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default OuterNavBar;