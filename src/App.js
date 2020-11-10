import React, {Component} from "react";
import './App.css';

import { Route, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";


class App extends Component{
  constructor() {
    super();

    this.state={

    }
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header {...this.state} />

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

          <Route exact path="/Services"
            render={ (props) => {
              return <Services {...this.state} />
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

        </main>

      </div>
    );    
  }

}

export default App;
