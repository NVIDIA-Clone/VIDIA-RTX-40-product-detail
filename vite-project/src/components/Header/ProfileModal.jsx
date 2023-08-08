import { useState } from "react";

const ProfileModal = ({ handleClick, handleReg }) => {
  const [message, setMessage] = useState("");
  const [seepass, setSeePass] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    verify: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateData(formData)) {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(
        "https://vidia.onrender.com/VIDIA_database/users",
        options
      );
      await response.json();
      clearForm();
      setMessage("User successfully created!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function clearForm() {
    setFormData({
      username: "",
      password: "",
      verify: "",
    });
  }

  const togglePass = () => {
    setSeePass(!seepass);
  };

  const validateData = (data) => {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){10,}/;

    if (
      data.username === "" ||
      data.password === "" ||
      !regExp.test(data.password) ||
      data.username.length < 8 ||
      data.password !== data.verify
    ) {
      clearForm();
      setMessage(
        "Please enter a username of 8 letters or longer and a password that is minimum 10 characters, at least 1 uppercase, 1 lowercase, 1 number and 1 special symbol... "
      );
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-[#5c5e5c] p-6 rounded-lg shadow-lg w-[25%] relative">
        <button
          onClick={() => {
            handleReg();
            handleClick();
          }}
          className="absolute top-2 right-2 hover:text-gray-900 focus:outline-none"
        >
          X
        </button>
        <form
          className="flex items-center flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-4 text-2xl font-semibold">Register</h1>
          <label>Username</label>
          <input
            id="userName"
            className="input"
            placeholder="Choose a username"
            onChange={handleChange}
            value={formData.username}
            name="username"
          />
          <label className="">Password</label>
          <input
            id="password"
            className="input"
            placeholder="Choose a password"
            name="password"
            type={seepass ? "text" : "password"}
            onChange={handleChange}
            value={formData.password}
          />
          <label>Re-enter Password</label>
          <input
            id="verifyPassword"
            className="input"
            placeholder="Re-enter password"
            name="verify"
            type={seepass ? "text" : "password"}
            onChange={handleChange}
            value={formData.verify}
          />
          <div className="text-red-500">{message}</div>
          <button
            onClick={clearForm}
            className="btn-secondary  cursor-pointer hover:text-[#76b900]"
            type="button"
          >
            Reset Form
          </button>
          <button
            className="btn-tertiary  cursor-pointer hover:text-[#76b900]"
            onClick={togglePass}
            type="button"
          >
            Show Password
          </button>
          <button
            type="submit"
            className="btn-primary  cursor-pointer hover:text-[#76b900]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
