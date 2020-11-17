import React, {Component} from "react";
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import DeltaServices from "./components/DeltaServices/DeltaServices";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import TimeSheets from "./components/TimeSheets/TimeSheets";


import RegisterForm from "./components/RegisterForm/RegisterForm"
import LoginForm from "./components/LoginForm/LoginForm";
import Profile from "./components/Profile/Profile";
import {registerUser, loginUser, verifyUser, allCities} from "./services/api_helper";

class App extends Component{
  constructor() {
    super();

    this.state={
      currentUser: null,
      error:"",
      loggedInUser: false,
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    console.log(currentUser)
    this.setState({currentUser});
    this.props.history.push("/Profile");
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    console.log("MADE IT HERE 1")
    const currentUser = await loginUser(loginData);
    console.log("MADE IT HERE 2")
    if(currentUser){
      this.setState({
        loggedInUser: true,
        error:"",
        currentUser
      });      
    }
    let loggedInUser= this.state.loggedInUser;
    console.log(this.state)
    console.log(currentUser)


    if(loggedInUser === true){
      this.setState({
        currentUser,
        loggedInUser: true,
        error:"",
      })
      this.props.history.push("/Profile");      
    }
    if(loggedInUser === false){
      console.log(this.state)
      this.setState({
        error: "Incorrect Login Credentials"
      })
    }
  }

  handleVerify = async() => {
    const currentUser = await verifyUser();
    if (currentUser){
      this.setState({
        loggedInUser: true,
        currentUser: currentUser
      });
      this.props.history.push("/login");
    }
  }

  handleLogout = async(e, currentUser) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    currentUser= this.state.currentUser
    this.setState({
      currentUser:null,
      loggedInUser: false
    })
    this.props.history.push("/login");
  }

  componentDidMount = async() => {
    this.handleVerify();
  }

  render(props){
    return (
      <div className="App">
        <header className="App-header">
          <Header {...this.props} {...this.state}  currentUser={this.state.currentUser} handleVerify={this.handleVerify}/>

        </header>

        <div id="wrap">
        <main>
          <Route exact path="/"
            render={ (props) => {
              return <Home {...this.state} />
            }} 
          />

          <Route exact path="/About"
            render={ (props) => {
              return <About {...this.state} />
            }} 
          />

          <Route exact path="/DeltaServices"
            render={ (props) => {
              return <DeltaServices {...this.state} />
            }} 
          />

          <Route exact path="/PhotoGallery"
            render={ (props) => {
              return <PhotoGallery {...this.state} />
            }} 
          />

          <Route exact path="/Careers"
            render={ (props) => {
              return <Careers {...this.props} {...this.state} />
            }} 
          />

          <Route exact path="/Contact"
            render={ (props) => {
              return <Contact {...this.state} />
            }} 
          />

        <Route path="/login" render={(props) => {
          return <LoginForm 
            {...this.state} 
            handleLogin={this.handleLogin}
            handleVerify={this.handleVerify}
            currentUser={this.state.currentUser}
          />
          }} 
        />

        <Route path="/register" render={(props) => {
          return <RegisterForm 
            {...this.state} 
            handleRegister={this.handleRegister}
            handleVerify={this.handleVerify} 
            currentUser={this.state.currentUser}
          />
          }} 
        />
  
        <Route path="/Profile" render={(props) => {
          return <Profile
            {...this.props}
            {...this.state} 
            handleLogout={this.handleLogout}
            handleVerify={this.handleVerify}  
            currentUser={this.state.currentUser}
          />
          }} 
        />

        <Route path="/TimeSheets" render={(props) => {
          return <TimeSheets
            {...this.props}
            {...this.state} 
            handleLogout={this.handleLogout}
            handleVerify={this.handleVerify}  
            currentUser={this.state.currentUser}
          />
          }} 
        />

        </main>
        </div>

        <footer>
          <Footer {...this.props} {...this.state}  currentUser={this.state.currentUser} handleVerify={this.handleVerify}/>
        </footer>

      </div>
    );    
  }

}

export default withRouter(App);
