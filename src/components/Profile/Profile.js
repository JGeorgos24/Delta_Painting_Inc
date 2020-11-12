import React, {Component} from "react";
import {Link} from "react-router-dom";

 
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
            <div>
                <section>
                    {this.props.currentUser && 
                        <h1>Hello, {this.props.currentUser.username}</h1>
                    }
                </section>
                <section>
                    <button onClick={this.props.handleLogout}>Logout</button>
                </section>

            </div>
        )
    }
}

export default Profile;