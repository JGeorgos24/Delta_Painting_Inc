import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./LoginForm.css"
 
class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state={
            username:"",
            password:"",
        }
    }

    handleChange=(e)=>{
        const{name, value} = e.target;
        // aka const name=e.target.name; const value = e.target.value
        this.setState({
            [name]:value,
        })
    }

    componentDidMount() {
        this.props.handleVerify();
    }

    render() {
        return(
            <div className="Login-Container">
                <div className="Login-UserInput-Container">
                    <h1>Login</h1>
                    {this.props.error && <div>{this.props.error}</div>}
                    <form className="Login-Register-Form" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                        <input className="Login-Register-Input"
                            type="text"
                            name="username"
                            value={this.state.username}
                            placeholder="Enter Username"
                            onChange={this.handleChange}
                            required="required"
                        />

                        <input className="Login-Register-Input"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required="required"
                        />

                        <input className="Login-SubmitButton" type="submit" value="Login" /> 
                    </form> 
                    
                    <Link className="Login-Register-Link" to="/register">Don't have an account? Register Here...</Link>    
                </div>           
            </div>
        )
    }
}

export default LoginForm;