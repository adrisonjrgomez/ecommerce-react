import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";
import FormInput from "../form-in/form-in.component";
import CustomButton from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ signInGoogle, signInEmail }) => {
  const  [credential, setCredential ] = useState({ email: "", password: "" });

  const { email, password } = credential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInEmail({ email, password });
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setCredential({ ...credential, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          value={email}
          handleChange={handleOnChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          handleChange={handleOnChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInGoogle} isGoogleButton>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInGoogle: () => dispatch(googleSignInStart()),
  signInEmail: (credential) => dispatch(emailSignInStart(credential)),
});

export default connect(null, mapDispatchToProps)(SignIn);
