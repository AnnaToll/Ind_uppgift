import { Component } from "react";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <label for="password-textfield">Email</label>
                <input type="text" id="user-name-textfield" name="user-name" className="form-field" />
                <label for="password-textfield">Password</label>
                <input type="password" id="password-textfield" name="password" />
                <input type="checkbox" id="checkbox-pwd" />
                <label for="checkbox-pwd">Show password</label>
                <button>Create new account</button>
            </div>
        );
    }
}

export default LoginComponent;