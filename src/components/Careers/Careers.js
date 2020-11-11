import React, { Component } from "react";
// import "./careers.css";
import {Link} from "react-router-dom";

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
            state:"",
            zip:"",
            unionPainter: "",
            unionName:"",
            qualifications: "",
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit= (event) => {
        event.preventDefault();
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value,
        })
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
                    <form>
                        First Name: 
                        <input className = 'firstName'
                            type = 'text'
                            name = 'firstName'
                            placeholder = 'Enter First Name'
                            value={this.state.firstName}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
                    </form>

                    <form>
                    Last Name: 
                        <input className = 'lastName'
                            type = 'text'
                            name = 'lastName'
                            placeholder = 'Enter Last Name'
                            value={this.state.lastName}
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
                    Address 1: 
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
                        <input className = 'state'
                            type = 'text'
                            name = 'state'
                            placeholder = 'Enter State'
                            value={this.state.state}
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                        />                        
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
                    {/* <br/> */}
                        <input className = 'qualifications'
                            type = 'textarea'
                            name = 'qualifications'
                            placeholder = 'Enter Your Qualifications. (ex: Brush and Roll, Sandblast, ect...'
                            value={this.state.qualifications}
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

export default Careers;