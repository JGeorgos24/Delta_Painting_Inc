import React, {Component} from "react";
import {Link} from "react-router-dom";

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
            <form className="Login-Register-Form" onSubmit={(e) => this.props.handleRegister(e, this.state)}>

                <input className="Login-Register-Input"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />

                <input className="Login-Register-Input"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <input className="Login-Register-Input"
                    type="text"
                    name="email"
                    placeholder="Enter Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Register" />
                <Link className="Login-Register-Link" to="/login">Login</Link>
            </form>
        )
    }
}

export default RegisterForm;