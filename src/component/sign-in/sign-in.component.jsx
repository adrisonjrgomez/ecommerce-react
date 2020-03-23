import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-in/form-in.component";
import CustomButton from '../button/button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleOnChange = event => {
    const { value, name } = event.target;
    console.log(name);

    this.setState({ [name]: value });
  };

  render() {
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
          <CustomButton type="submit">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
