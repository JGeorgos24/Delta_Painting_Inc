import React, { Component } from "react";
import "./Header.css";
import {Link} from "react-router-dom";

import Home from "../Home/Home";

class Header extends Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    componentDidMount = async (props) => {
        this.props.handleVerify();
    }

    render(props){
        return(
            <header className="Header-Container"> 
                <section>
                    <img className="HeaderLogo" src="https://i.imgur.com/I0f24HE.png" alt="Delta Painting Inc Logo" /> 
                </section>
                <section className="NavBarOuter">
                    <nav className="NavBarInner">
                        <Link className="LinksInNavBar" to="/">Home</Link>
                        <Link className="LinksInNavBar" to="/About">About</Link>
                        <Link className="LinksInNavBar" to="/DeltaServices">Services</Link>
                        <Link className="LinksInNavBar" to="/PhotoGallery">Photo Gallery</Link>
                        <Link className="LinksInNavBar" to="/Careers">Careers</Link>
                        <Link className="LinksInNavBar" to="/Contact">Contact</Link>
                        {!this.props.currentUser ? <Link className="LinksInNavBar" to="/login">Login/Register</Link> : <Link className="LinksInNavBar" to="/Profile">Profile</Link>}
                    </nav>
                </section>
            </header>
        )        
    }

}

export default Header;