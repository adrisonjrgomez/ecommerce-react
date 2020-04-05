import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-in/form-in.component";
import CustomButton from "../button/button.component";

import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUp }) => {
  const [newUserData, setNewUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = newUserData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUp({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="Submit">SignUp</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispacth) => ({
  signUp: (userData) => dispacth(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
