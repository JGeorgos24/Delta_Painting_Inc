import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./RegisterForm.css";

class RegisterForm extends Component{
    constructor(props){
        super(props);

        this.state={
            username:"",
            password:"",
            email:"",
        }
    }

    handleChange=(e)=>{
        const{name, value} = e.target;
        // aka const name=e.target.name; const value = e.target.value
        this.setState({
            [name]:value,
        })
    }

    render() {
        return(
            <div className="Register-Container">
                <div className="Register-UserInput-Container">
                    <h1>Register</h1>
                    <form className="Login-Register-Form" onSubmit={(e) => this.props.handleRegister(e, this.state)}>

                        <input className="Login-Register-Input"
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={this.state.username}
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

                        <input className="Login-Register-Input"
                            type="text"
                            name="email"
                            placeholder="Enter Email Address"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required="required"
                        />

                        <input className="Register-SubmitButton" type="submit" value="Register" />   
                    </form>
                    
                    <Link className="Login-Register-Link" to="/login">Already Registered? Login Here...</Link>
                </div>
            </div>
        )
    }
}

export default RegisterForm;