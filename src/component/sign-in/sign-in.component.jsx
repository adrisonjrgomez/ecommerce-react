import React from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";
import FormInput from "../form-in/form-in.component";
import CustomButton from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    const { signInEmail } = this.props;

    event.preventDefault();
    const { email, password } = this.state;
    signInEmail({ email, password });
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { signInGoogle } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            value={this.state.email}
            handleChange={this.handleOnChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleOnChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInGoogle: () => dispatch(googleSignInStart()),
  signInEmail: (credential) => dispatch(emailSignInStart(credential)),
});

export default connect(null, mapDispatchToProps)(SignIn);
