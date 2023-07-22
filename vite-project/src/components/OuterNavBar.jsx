import {useState} from 'react';
import ProductDropdown from './ProductDropdown';

const OuterNavBar = () => {
    
    const [productsMenuActive, setProductsMenuActive] = useState(false);
    
    return (
        <>
        <nav className="h-[66px] w-full bg-black text-NVNavBarGray font-Sig hover:cursor-pointer flex flex-row items-center" >
            <div className="sub-brand-nav-container py-0 px-8 flex">
                <span className="sub-brand-name text-NVWhiteTxt font-semibold text-2xl ">PeForce</span>
                <ul className="flex">
                    <li className="sub-brand-nav-item group relative dropdown"></li>
                        <div className="relative inline-block text-left">
                            <ProductDropdown />
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
        </>
    )
}

export default OuterNavBar;