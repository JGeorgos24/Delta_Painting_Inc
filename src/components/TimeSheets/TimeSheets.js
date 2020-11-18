import React, { Component } from "react";
import "./TimeSheets.css";
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';

class TimeSheets extends Component{
    constructor(props) {
        super(props);

        this.state={
            firstName: "",
            lastName: "",
            emailAddress: "",
            phone: "",
            jobEstimate: "",
            reasonOfContact: "",
        }
    }

    sendEmail= (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cd5k55g', 'DPI_TimeSheets_Template', e.target, 'user_vDB0NW6WdBHuLD2l4yN1p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
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
        <div className="TimeSheets-Container"> 
            <div className="TimeSheets-UserInput-Container">
                <section>
                    <h2>Time Sheets for Delta Painting Inc.</h2>
                    <p className="inputDescription">Please fill out the form with the correct amount of hours you worked this week.</p>
                    <p>Please fill out the form below.</p>
                    <form className="TimeSheetsInfo" onSubmit={this.handleSubmit}>
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
                        Week Start Date: 
                            <input className = 'WeekStartDate'
                                type = 'text'
                                name = 'WeekStartDate'
                                placeholder = 'Enter Week Start Date (MM/DD/YY)'
                                value={this.state.WeekStartDate}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Week End Date: 
                            <input className = 'WeekEndDate'
                                type = 'text'
                                name = 'WeekEndDate'
                                placeholder = 'Enter Week End Date (MM/DD/YY)'
                                value={this.state.WeekEndDate}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Monday: 
                            <input className = 'Monday'
                                type = 'text'
                                name = 'Monday'
                                placeholder = 'Enter Hours for Monday'
                                value={this.state.Monday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Tuesday: 
                            <input className = 'Tuesday'
                                type = 'text'
                                name = 'Tuesday'
                                placeholder = 'Enter hours for Tuesday'
                                value={this.state.Tuesday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Wednesday: 
                            <input className = 'Wednesday'
                                type = 'text'
                                name = 'Wednesday'
                                placeholder = 'Enter Hours for Wednesday'
                                value={this.state.Wednesday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Thursday: 
                            <input className = 'Thursday'
                                type = 'text'
                                name = 'Thursday'
                                placeholder = 'Enter Hours for Thursday'
                                value={this.state.Thursday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Friday: 
                            <input className = 'Friday'
                                type = 'text'
                                name = 'Friday'
                                placeholder = 'Enter Hours for Friday'
                                value={this.state.Friday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Saturday: 
                            <input className = 'Saturday'
                                type = 'text'
                                name = 'Saturday'
                                placeholder = 'Enter Hours for Saturday'
                                value={this.state.Saturday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>

                        <div>
                        Sunday: 
                            <input className = 'Sunday'
                                type = 'text'
                                name = 'Sunday'
                                placeholder = 'Enter Hours for Sunday'
                                value={this.state.Sunday}
                                onChange = {this.handleChange}
                                onSubmit={this.handleSubmit}
                            />                        
                        </div>
                        
                        <input className="submitButton" type="submit"/>
                    </form>
                </section>
                <Link className="LinksInNavBar" to="/Profile">Back to Profile</Link>
            </div>
        </div>
    )        
    }

}

export default TimeSheets;