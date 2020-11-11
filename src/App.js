import React, {Component} from "react";
import './App.css';

import { Route, Link, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import DeltaServices from "./components/DeltaServices/DeltaServices";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";

import RegisterForm from "./components/RegisterForm/RegisterForm"
import LoginForm from "./components/LoginForm/LoginForm";
import Profile from "./components/Profile/Profile";
import {registerUser, loginUser, verifyUser, allCities} from "./services/api_helper";

class App extends Component{
  constructor() {
    super();

    this.state={
      currentUser: null,
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    console.log(currentUser)
    this.setState({currentUser});
    this.props.history.push("/login");
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    console.log(currentUser)
    this.setState({currentUser});
    this.props.history.push("/Profile");
  }

  handleVerify = async() => {
    const currentUser = await verifyUser();
    if (currentUser){
      this.setState({currentUser: currentUser});
      this.props.history.push("/login");
    }
  }

  handleLogout = async(e, currentUser) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    currentUser= this.state.currentUser
    this.setState({currentUser:null})
    this.props.history.push("/login");
  }

  componentDidMount() {
    this.handleVerify();
  }

  render(props){
    return (
      <div className="App">
        <header className="App-header">
          <Header {...this.props} {...this.state}  currentUser={this.state.currentUser} handleVerify={this.handleVerify}/>

        </header>

        <main>
          <Route exact path="/Home"
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
              return <Careers {...this.state} />
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

        </main>

      </div>
    );    
  }

}

export default withRouter(App);
