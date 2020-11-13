import React from "react";
import {Link} from "react-router-dom";
import "./About.css";

const About = (props) => {
    return(
        <div className="About-Wallpaper">
            <div className="About-Container"> 
                <h1 className="Page-Header">About Delta Painting Inc.</h1>

                <h2 className="About-Intro">
                    Want to know a little bit more about this history and background 
                    of Delta Painting, Inc. well if so you came to the right place! 
                    Below is a brief description about Delta Painting, Inc. 
                </h2>
                <br/>
                <h2 className="About-History">
                    Delta Painting Incorporated is a family owned business that is located
                    in Northwest Indiana and has been providing painting services since 
                    the start of the company in April of 2002. Delta Painting Inc was 
                    created in April of 2002 by a loving husband and father in essence 
                    to create a prosperous life for his family. And with his ambitious 
                    personality and work ethic Michael Georgos has done just that. 
                    Delta Painting Inc is a proud family owned business that is happy to 
                    help anyone in their community with any painting services they may need. 
                </h2>
            </div>
        </div>
    )
}

export default About;