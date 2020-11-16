import React from "react";
import {Link} from "react-router-dom";
import "./PhotoGallery.css";

const PhotoGallery = (props) => {
    return(
        <div className="PhotoGallery-Container"> 
            <section className="PhotoGallery-Header">
                <h1>Photo Gallery</h1>
            </section>
            <section>
                <div className="PhotoGallery-List">
                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/O71d3K2.jpg" alt="service image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>       

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/v9iF7da.png" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/um2Fvxv.jpg" alt="service image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>    

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/xANB3vw.jpg" alt="service image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/T3Ory15.jpg" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/IbVy665.jpg" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/MwGgUzV.png" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/a1hp2Th.png" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>   

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/16umGI9.jpg" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                    <div className="A-Job">
                        <img className="Job-Image-Thumbnail" src="https://i.imgur.com/L9sqSuH.png" alt="Photo Gallery Image" />
                        <div className="Job-Text-Overlay">
                            <div className="Job-Text-In-Overlay"></div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default PhotoGallery;