const Footer = () => {
  return (
    <>
    <body className="flex flex-col min-h-screen"><div className="flex-grow"></div></body>
    <footer className="p-4 h-[144px] w-full mt-auto">
      <div className="flex justify-start w-full h-1/5">
        <img
          src="/public/images/blackNvidiaEye.png"
          alt="nvidia logo"
          className="h-full"
        />
        <p className="font-black font-Sig">VIDIA</p>
      </div>
      <div className="flex justify-end">
        <p className="text-[#CCCCCC] font-Sig font-semibold tracking-wide mb-1">
          United States
        </p>
      </div>
      <div className="m{b}-{4px} flex flex-wrap w-full justify-center">
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
      </div>
      <div className="mt-2">
        <p className="text-[#666666] text-xs">Copyright © 2023 VIDIA Corporation</p>
      </div>
    </footer>
    </>
  );
};
export default Footer;
