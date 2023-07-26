const Footer = () => {
  return (
    <>
      <footer className="p-[30px] h-[144px] flex justify-center w-full mt-auto sm:flex-col sm:items-center sm:p-[15px]">
        <div className="w-3/4 p-[30px 130.5px] flex flex-col sm:items-center">
          <div className="flex justify-between sm:flex-col sm:items-center">
            <div className="flex items-center mb-[15px] sm:m-[0]">
              <img
                src="/images/blackNvidiaEye.png"
                alt="nvidia logo"
                className="h-[24px]"
              />
              <p className="text-xl font-black font-Sig">VIDIA</p>
            </div>
            <p className="text-[#CCCCCC] font-Sig font-semibold tracking-wide mb-1 cursor-pointer sm:m-[0]">
              United States
            </p>
          </div>

          <div className="m{b}-{4px} flex items-start flex-col sm:items-center">
            <ul className="inline-block w-full sm:justify-center sm:flex-wrap sm:flex">
              <li className="text-[#696969] inline-block mr-1 hover:text-[#181818] pl-1 after:content-['|'] cursor-pointer">
                {' '}
                Privacy Policy{' '}
              </li>
              <li className="text-[#696969] hover:text-[#181818] inline-block mr-1   after:content-['|'] cursor-pointer">
                {' '}
                Manage My Privacy{' '}
              </li>
              <li className="text-[#696969] hover:text-[#181818] inline-block mr-1 after:content-['|'] cursor-pointer">
                {' '}
                Do Not Sell or Share My Data{' '}
              </li>
              <li className="text-[#696969] hover:text-[#181818] inline-block mr-1   after:content-['|'] cursor-pointer">
                {' '}
                Legal{' '}
              </li>
              <li className="text-[#696969] hover:text-[#181818] inline-block mr-1 after:content-['|'] cursor-pointer">
                {' '}
                Accessibility{' '}
              </li>
              <li className="text-[#696969] hover:text-[#181818] inline-block mr-1  after:content-['|'] cursor-pointer">
                {' '}
                Corporate Policies{' '}
              </li>
              <li className="text-[#696969]  hover:text-[#181818] inline-block mr-1 pl-1 after:content-['|'] cursor-pointer">
                {' '}
                Product Security{' '}
              </li>
              <li className="text-[#696969]  hover:text-[#181818] inline-block mr-1 cursor-pointer">
                {' '}
                Contact
              </li>
            </ul>
            <p className="text-[#696969] text-xs mt-2 sm:m-[0] sm:p-[5px]">
              Copyright © 2023 VIDIA Corporation
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
