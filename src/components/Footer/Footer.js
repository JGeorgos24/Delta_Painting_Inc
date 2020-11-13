import React, { Component } from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

import Home from "../Home/Home";

class Footer extends Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    render(props){
        return(
            <div className="footerContainer"> 
                <section className="FooterLeft">
                     <h4>&copy; 2002 Delta Painting, Inc.</h4>
                </section>
                <section className="FooterRight">
                    <h4 className="FooterContactInfo">Contact Information: </h4> 
                    <h5 className="FooterContactInfo">Phone: 219-947-5105</h5>
                    <h5 className="FooterContactInfo">Cell: 219-313-4103</h5>
                    <h5 className="FooterContactInfo">Email: mgeorgos@comcast.net</h5>
                </section>
            </div>
        )        
    }

}

export default Footer;