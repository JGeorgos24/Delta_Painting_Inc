import React, { Component } from "react";
import "./Careers.css";
import {Link, withRouter} from "react-router-dom";
import emailjs from 'emailjs-com';

class Careers extends Component{
    constructor(props) {
        super(props);

        this.state={
            firstName: "",
            lastName: "",
            emailAddress: "",
            phone: "",
            address1:"",
            city:"",
            states:"",
            zip:"",
            unionPainter: "",
            unionName:"",
            qualifications: "",
            resume:"",
        }
    }

    sendEmail= async (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8grhulh', 'careers_template', e.target, 'user_DrwIKcQYggJOAcbPPmG0M')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          this.props.history.push("/Careers");
    }

    handleChange = async (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit= async (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value,
        })
        this.sendEmail(e);
    }


    render(){
        console.log(this.state)
    return(
        <div> 
            <section>
                <h1>Careers Page Render</h1>
            </section>
            <section>
                <h2>Careers Delta Painting Inc.</h2>
                <p className="inputDescription">Input direcions for career submitions here... </p>
                <form className="CareerInfo" onSubmit={this.handleSubmit}>
                    <div>
                        First Name: 
                        <input className = 'firstName'
                            type = 'text'
                            name = 'firstName'
                            placeholder = 'Enter First Name'
                            value={this.state.firstName}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Last Name: 
                        <input className = 'lastName'
                            type = 'text'
                            name = 'lastName'
                            placeholder = 'Enter Last Name'
                            value={this.state.lastName}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Email Address: 
                        <input className = 'emailAddress'
                            type = 'text'
                            name = 'emailAddress'
                            placeholder = 'Enter Valid Email Address'
                            value={this.state.emailAddress}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Phone: 
                        <input className = 'phone'
                            type = 'text'
                            name = 'phone'
                            placeholder = 'Enter Phone Number'
                            value={this.state.phone}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Address: 
                        <input className = 'address1'
                            type = 'text'
                            name = 'address1'
                            placeholder = 'Enter Address'
                            value={this.state.address1}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    City: 
                        <input className = 'city'
                            type = 'text'
                            name = 'city'
                            placeholder = 'Enter City'
                            value={this.state.city}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    State: 
                        <select className = "states"
                            value={this.state.onChange}
                            name="states"
                            value={this.state.states}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                            >
                            <option value="NoState">Select State...</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky"> Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>                        
                    </div>

                    <div>
                    Postal-Code: 
                        <input className = 'zip'
                            type = 'text'
                            name = 'zip'
                            placeholder = 'Enter Postal Code'
                            value={this.state.zip}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Are you in a International Union of Painters and Allied Trades Union: 
                        <select className = 'unionPainter'
                            value={this.state.onChange}
                            name="unionPainter"
                            value={this.state.unionPainter}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                            >
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div>
                    If Yes, what union?:  
                        <input className = 'unionName'
                            type = 'text'
                            name = 'unionName'
                            placeholder = 'Enter Union Name'
                            value={this.state.unionName}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Qualifications:
                        <input className = 'qualifications'
                            type = 'textarea'
                            name = 'qualifications'
                            placeholder = 'Enter Your Qualifications. (ex: Brush and Roll, Sandblast, ect...)'
                            value={this.state.qualifications}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>

                    <div>
                    Resume:  
                        <input className = 'resume'
                            type = 'file'
                            name = 'resume'
                            placeholder = 'Upload Resume'
                            value={this.state.resume}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>
                    
                    <input className="submitButton" type="submit"/>

                </form>
            </section>
        </div>
    )        
    }
}

export default withRouter(Careers);