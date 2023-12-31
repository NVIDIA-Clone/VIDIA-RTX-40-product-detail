import { useState } from "react";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleReg = () => {
    setModal(!modal);
  };

  return (
    <div className="flex items-center">
      <div id="profileBtn" onClick={handleClick}>
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
            stroke="#696969"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
            stroke="#696969"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#696969"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {modal && (
        <ProfileModal handleClick={handleClick} handleReg={handleReg} />
      )}
      {open && (
        <div>
          <ul className="flex p-[15px] gap-[10px] text-[#696969] text-sm">
            <li
              id="registerBtn"
              onClick={handleReg}
              className=" p-.5  hover:text-[#1a1a1a]"
            >
              Register
            </li>
            <li id="loginBtn" className=" p-.5  hover:text-[#1a1a1a]">
              Login
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
