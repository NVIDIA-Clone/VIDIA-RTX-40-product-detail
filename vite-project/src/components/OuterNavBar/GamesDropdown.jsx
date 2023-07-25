const GamesDropdown = () => {
    return (
    <div className="group/games relative dropdown px-4 hover:text-white tracking-wide">
            <a className="flex">Games & Tech
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </a>
            <div className="group-hover/games:block dropdown-menu hidden absolute h-auto ">
                <ul className="top-0 w-72 space-y-1 bg-white">
                    <li className="group/dlss py-1 m-1.5" ><a className="block text-NVDropDownGray hover:text-black">DLSS & Raytracing</a>
                        <div className="group/dlss dropdown px-4 hover:text-black tracking-wide">
                            <ul className="flex">
                                <div className="group-hover/dlss:block bg-white box-content inset-x-72 top-1.5 dropdown-menu hidden absolute h-fit w-56 space-y-2 p-1 shadow-2xl">
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>DLSS</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX Games</a></li>
                                </div>
                            </ul> 
                        </div>        
                    </li>
                    <li className="group/architecture py-1 m-2"><a className="block text-NVDropDownGray hover:text-black">Architecture</a>
                        <div className="group-hover/architecture dropdown px-4 hover:text-black tracking-wide">
                            <ul className="flex">
                                <div className="group-hover/architecture:block bg-white box-content inset-x-72 inset-y-12 dropdown-menu hidden absolute h-fit w-56 space-y-1.5 p-1 shadow-2xl">
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>VIDA Ada Lovelace Architecture</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Max-Q</a></li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className="group/gaming py-1 m-2"><a className="block text-NVDropDownGray hover:text-black">Gaming</a>
                        <div className="group/gaming dropdown px-4 hover:text-black tracking-wide">
                            <ul className="flex">
                                <div className="group-hover/gaming:block bg-white box-content inset-x-72 inset-y-12 dropdown-menu hidden absolute h-fit w-56 space-y-1.5 p-1 shadow-2xl">
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Game Ready Drivers</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Reflex</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>G-SYNC</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>VR</a></li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className="group/studiocreatortools py-1 m-2"><a className="block text-NVDropDownGray hover:text-black">Studio Creator Tools</a>
                        <div className="group/studiocreatortools dropdown px-4 hover:text-black tracking-wide">
                            <ul className="flex">
                                <div className="group-hover/studiocreatortools:block bg-white box-content inset-x-72 inset-y-12 dropdown-menu hidden absolute h-fit w-56 space-y-1.5 p-1 shadow-2xl">
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Studio</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>NVIDIA Encoder</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Broadcast App</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>RTX Remix</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Omniverse</a></li>
                                    <li className="block text-NVDropDownGray relative hover:text-NVGreen"><a>Canvas App</a></li>
                                </div>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default GamesDropdown;
