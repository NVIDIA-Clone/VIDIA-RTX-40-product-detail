const Footer = () => {
    // need to add responsiveness for smaller screens
  return (
    <>
    <body className="flex flex-col min-h-screen"><div className="flex-grow"></div></body> 
    {/* above should be removed, just a placeholder */}
    <footer className="p-[30px 130.5px] sm:h-[8rem] h-[144px] xs:h-[9rem] xxs:h-[11rem] w-full mt-auto sm:flex sm:flex-col sm:justify-between">
      <div className="flex justify-between w-full h-1/5 sm:flex-col sm:items-center sm:mb-1">
        <div className="flex items-center sm:pb-1">
        <img
          src="/public/images/blackNvidiaEye.png"
          alt="nvidia logo"
          className="h-[20px]"
          />
        <p className="font-black font-Sig">VIDIA</p>
          </div>
        <p className="text-[#CCCCCC] font-Sig font-semibold tracking-wide mb-1">
          United States
        </p>
      </div>
      <div className="flex justify-end">
        
      </div>
      <div className="m{b}-{4px} flex flex-wrap w-full items-center flex-col">
        <ul className="inline-block text-center ">
          <li className="text-[#666666] inline-block mr-1  pl-1 after:content-['|']">
            {" "}
            Privacy Policy{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1   after:content-['|']">
            {" "}
            Manage My Privacy{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1 after:content-['|']">
            {" "}
            Do Not Sell or Share My Data{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1   after:content-['|']">
            {" "}
            Legal{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1 after:content-['|']">
            {" "}
            Accessibility{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1  after:content-['|']">
            {" "}
            Corporate Policies{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1 pl-1 after:content-['|']">
            {" "}
            Product Security{" "}
          </li>
          <li className="text-[#666666] inline-block mr-1 "> Contact</li>
        </ul>
        <p className="text-[#666666] text-xs mt-2">Copyright © 2023 VIDIA Corporation</p>
      </div>
    </footer>
    </>
  );
};
export default Footer;
