import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";

const Home = (props) => {
    return(
        <div className="Home-Container">
            <img className="Home-Wallpaper" src="https://i.imgur.com/Fk9KDs3.png" alt="Delta Painting Inc Homescreen Wallpaper"/>
        </div>
    )
}

export default Home;