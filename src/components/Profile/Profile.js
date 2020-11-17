import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Profile.css";

 
class Profile extends Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    componentDidMount = async (props) => {
        this.props.handleVerify();
    }

    render(props) {
        console.log(this.props.currentUser)
        return(
            <div className="Profile-Container">
               <div className="Profile-User-Container">
                <section>
                    <div>
                        {/* {this.props.currentUser && 
                            <h1>Hello, {this.props.currentUser.username}</h1>
                        } */}
                        <h1>Welcome to Your Profile</h1>
                    </div>

                    <div className="Profile-Careers">
                        <h4>Want to apply for a career at Delta Painting Inc. Click the link below...</h4>
                        <Link className="Profile-Links" to="/Careers">Careers</Link>
                    </div>

                    <div className="Profile-Contact">
                        <h4>Want to get get in contact with Delta Painting Inc. Click the link below...</h4>
                        <Link className="Profile-Links" to="/Contact">Contact</Link>
                    </div>

                    <div className="TimeSheets-Contact">
                        <h4>To log your hours for Delta Painting Inc. Click the link below...</h4>
                        <Link className="Profile-Links" to="/TimeSheets">Time Sheets</Link>
                    </div>
                        
                    <div>
                        <button className="Logout-Button" onClick={this.props.handleLogout}>Logout</button>
                    </div> 
                </section>
               </div>
            </div>
        )
    }
}

export default Profile;