import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

import Home from "../Home/Home";


const Header = (props) => {
    return(
        <header> 
            <section>
                <img className="HeaderLogo" src="https://i.imgur.com/I0f24HE.png" alt="Delta Painting Inc Logo" /> 
            </section>
            <section className="NavBarOuter">
                <nav className="NavBarInner">
                    <Link className="LinksInNavBar" to="/Home">Home</Link>
                    <Link className="LinksInNavBar" to="/About">About</Link>
                    <Link className="LinksInNavBar" to="/Services">Services</Link>
                    <Link className="LinksInNavBar" to="/PhotoGallery">Photo Gallery</Link>
                    <Link className="LinksInNavBar" to="/Careers">Careers</Link>
                    <Link className="LinksInNavBar" to="/Contact">Contact</Link>
                    {props.loggedIn && <Link className="LinksInNavBar" to="/profile/person">Your Profile</Link>}
                </nav>
            </section>
        </header>
    )
}

export default Header;