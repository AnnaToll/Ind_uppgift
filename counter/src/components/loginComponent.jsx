import { Component } from "react";

class LoginComponent extends Component {
    state = {
        errorMessageEmail: '',
        errorMessagePwd: '',
        pwdType: 'password'
    }

    render() {
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <label htmlFor="password-textfield">Email</label>
                <input type="text" id="user-name-textfield" name="user-name" onChange={(e) => {
                    this.handleChangeEmail(e.target.value);
                }} />
                <p className="error-message form-field">{this.state.errorMessageEmail}</p>
                <label htmlFor="password-textfield">Password</label>
                <input type={this.state.pwdType} id="password-textfield" name="password" onChange={(e) => {
                    this.handleChangePwd(e.target.value);
                }} />
                <p className="error-message">{this.state.errorMessagePwd}</p>
                <input type="checkbox" id="checkbox-pwd" onClick={(e) => {
                    this.handleClickPwdCheckbox(e.target);
                }} />
                <label htmlFor="checkbox-pwd">Show password</label>
                <button type="submit">Sign in</button>
                <button>Or create new account</button>
            </div>
        );
    }
    handleChangeEmail = (value) => {
        if (value == '') {
            this.setState({ errorMessageEmail: '' })
            return;
        }
        if (!value.includes('@') || !value.includes('.'))
            this.setState({ errorMessageEmail: 'invalid email' })
        else if (value.includes('@') && value.includes('.'))
            this.setState({ errorMessageEmail: ''})        
    }

    handleChangePwd = (value) => {
        if (value == '') {
            this.setState({ errorMessagePwd: '' })
            return;
        }
        if (!/[A-Z]/g.test(value) || !/[0-9]/g.test(value))
            this.setState({ errorMessagePwd: 'Password must contain uppercase letters and numbers' })
        else if (/[A-Z]/g.test(value) && /[0-9]/g.test(value))
            this.setState({ errorMessagePwd: ''})        
    }

    handleClickPwdCheckbox = (checkBox) => {
        this.setState( checkBox.checked ? { pwdType: 'text'} : { pwdType: 'password'});
    }
}

export default LoginComponent;