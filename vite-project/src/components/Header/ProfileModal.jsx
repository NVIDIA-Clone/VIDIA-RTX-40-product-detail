import { useState } from "react";

const ProfileModal = () => {
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    verify: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData(formData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      username: "",
      password: "",
      verify: "",
    });
  };
  const clearPassword = () => {
    setFormData({ ...formData, password: "", verify: "" });
  };

  const resetForm = () => {
    clearForm();
  };

  const validateData = (data) => {
    let username = false;
    let password = false;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){10,}/;

    if (data.username === "") {
      setMessage("Please enter a username of 8 letters or longer");
    } else if (data.username.length < 8) {
      setMessage("Please enter a username of 8 letters or longer");
    } else {
      username === true;
    }
    if (data.password === "") {
      setMessage("Please enter a valid password");
    } else if (regExp.test(data.password)) {
      password = true;
    } else if (!regExp.test(data.password)) {
      clearPassword();
      setMessage("Password does not meet requirements, please re-enter");
    } else {
      setMessage("");
    }

    if (data.password !== data.verify) {
      clearPassword();
      setMessage("Passwords do not match, try again.");
    }
  };

  return (
    <div
      id="overlay"
      className="fixed flex top-0 left-0 h-full w-full bg-[transparent] z-9998 justify-center items-center"
    >
      <div className="flex z-60 h-[45rem] w-[30rem] top-1/2 left-1/2 bg-[red]  z-9999 ">
        <form
          className="flex flex-col justify-center items-center h-full w-full gap-x-.25rem "
          onSubmit={handleSubmit}
        >
          <h1>Register</h1>
          <label>Username</label>
          <input
            id="userName"
            placeholder="Choose a username"
            onChange={handleChange}
            value={formData.username}
            name="username"
          ></input>
          <label>Password</label>
          <input
            id="password"
            placeholder="Choose a password"
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
          ></input>
          <label>Re-enter Password</label>
          <input
            id="verifyPassword"
            placeholder="Re-enter password"
            name="verify"
            type="password"
            onChange={handleChange}
            value={formData.verify}
          ></input>
          <div>{message}</div>
          <button type="submit">Submit</button>
          <button onClick={resetForm}>Reset Form</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;