import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'
// import { Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header branding = "Contact Manager"/>
          <Contact
              name = "John Doe"
              email = "jdoe@gmail.com"
              phone = "555-55-5555"
              />
           <Contact
               name = "Marry Jane"
               email = "mjane@gmail.com"
               phone = "666-66-6666"
               />
      </div>
    );
  }
}

export default App;
