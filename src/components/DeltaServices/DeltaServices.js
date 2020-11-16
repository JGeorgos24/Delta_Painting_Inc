import React from "react";
import {Link} from "react-router-dom";
import"./DeltaServices.css";

const DeltaServices = (props) => {
    return(
        <div className="DeltaService-Container"> 
            <div className="DeltaServices-Header">
                <h1>Services Provided by Delta Painting Inc.</h1>
                <p className="Service-Description">Delta Painting Inc. is a painting contractor that provides industrial and commercial painting services for any and all business needs. Shown below are some of the services that we specialize in. </p>
                <h2>Industrial &amp; Commerical Services</h2>
            </div>
            <section>
                
                <div className="Service-List">
                    <div className="A-Service">
                        <img className="Image-Thumbnail" src="https://i.imgur.com/GapcGwA.png" alt="service image" />
                        <div className="Text-Overlay">
                            <div className="Text-In-Overlay">Painting</div>
                        </div>
                    </div>

                    <div className="A-Service">
                        <img className="Image-Thumbnail" src="https://i.imgur.com/7IigL9J.jpg" alt="service image" />
                        <div className="Text-Overlay">
                            <div className="Text-In-Overlay">Floor Coating</div>
                        </div>
                    </div>

                    <div className="A-Service">
                        <img className="Image-Thumbnail" src="https://i.imgur.com/10tIELg.jpg" alt="service image" />
                        <div className="Text-Overlay">
                            <div className="Text-In-Overlay">Roof Coating</div>
                        </div>
                    </div>

                    <div className="A-Service">
                        <img className="Image-Thumbnail" src="https://i.imgur.com/5ylEhwP.png" alt="service image" />
                        <div className="Text-Overlay">
                            <div className="Text-In-Overlay">Pressure Washing &amp; Cleaning</div>
                        </div>
                    </div>

                    <div className="A-Service">
                        <img className="Image-Thumbnail" src="https://i.imgur.com/ZWHOFsy.png" alt="service image" />
                        <div className="Text-Overlay">
                            <div className="Text-In-Overlay">Sandblasting</div>
                        </div>
                    </div>

                    <div className="A-Service">
                        <img className="Image-Thumbnail" src="https://i.imgur.com/cVjscYW.jpg" alt="service image" />
                        <div className="Text-Overlay">
                            <div className="Text-In-Overlay">Waterproofing &amp; Sealant Applications</div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default DeltaServices;