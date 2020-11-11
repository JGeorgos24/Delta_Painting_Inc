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

    render() {
        return(
            <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Enter Username"
                    onChange={this.handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Login" />
                <Link className="RegisterLink" to="/register">Register</Link>
            </form>
        )
    }
}

export default LoginForm;