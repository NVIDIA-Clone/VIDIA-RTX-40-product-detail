const MoreDropdown = () => {
    return (
    <div className="group/more relative dropdown px-4 hover:text-white tracking-wide">
            <a className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="5" fill="currentColor">
                    <path d="M12613.6,1800.5a2.654,2.654,0,1,0-2.6,2.5A2.575,2.575,0,0,0,12613.6,1800.5Zm2.7,0a2.708,2.708,0,1,0,2.7-2.5A2.6,2.6,0,0,0,12616.3,1800.5Zm8.1,0a2.654,2.654,0,1,0,2.6-2.5A2.575,2.575,0,0,0,12624.4,1800.5Z" transform="translate(-12608.3 -1798)"></path>
                </svg>
            </a>
            <div className="group-hover/more:block dropdown-menu hidden absolute h-auto ">
                <ul className="top-0 w-72 space-y-1 bg-white">
                    <li className="group/support py-1 m-1.5" ><a className="block text-NVDropDownGray hover:text-NVGreen">Support</a>
                    </li>
                    <li className="group/more py-1 m-2"><a className="block text-NVDropDownGray hover:text-NVGreen">Shop</a>
                      
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default MoreDropdown;


