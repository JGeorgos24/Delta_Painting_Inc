import React, { Component } from "react";
import "./Contact.css";
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state={
            FirstName: "",
            LastName: "",
            emailAddress: "",
            phone: "",
            jobEstimate: "",
            reasonOfContact: "",
        }
    }

    sendEmail= (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8grhulh', 'test_run_1', e.target, 'user_DrwIKcQYggJOAcbPPmG0M')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit= (e) => {
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
                <h1>Contact Page Render</h1>
            </section>
            <section>
                <h2>Contact Delta Painting Inc.</h2>
                <p className="inputDescription">Please fill out the form below to contact Delta Painting, Inc. When filling out the form please input your most recent and valid contact information so Delta Painting, Inc. can contact you back as soon as possible.  </p>
                <form className="ContactInfo" onSubmit={this.handleSubmit}>
                    <form>
                        First Name: 
                        <input className = 'firstName'
                            type = 'text'
                            name = 'FirstName'
                            placeholder = 'Enter First Name'
                            value={this.state.FirstName}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </form>

                    <form>
                    Last Name: 
                        <input className = 'lastName'
                            type = 'text'
                            name = 'LastName'
                            placeholder = 'Enter Last Name'
                            value={this.state.LastName}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </form>

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
                    Job Estimate: 
                        <select className = 'jobEstimate'
                            value={this.state.onChange}
                            name="jobEstimate"
                            value={this.state.jobEstimate}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                            >
                            <option value="Select...">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        {/* <input className = 'jobEstimate'
                            type = 'text'
                            name = 'jobEstimate'
                            placeholder = 'Enter Yes or No'
                            onChange = {this.onChange}
                        />                         */}
                    </div>

                    <div>
                    Reason of Contact: 
                    {/* <br/> */}
                        <input className = 'reasonOfContact'
                            type = 'textarea'
                            name = 'reasonOfContact'
                            placeholder = 'Enter Your Reasoning for Contacting Delta Painting, Inc.'
                            value={this.state.reasonOfContact}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </div>
                    
                    <input className="submitButton" type="submit"/>

                </form>
            </section>

            <Link to="/ContactUs">Contact Us</Link>
        </div>
    )        
    }

}

export default Contact;