import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'
import Header from './components/Header'
// import { Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header branding = "Contact Manager"/>
          <Contacts />
      </div>
    );
  }
}

export default App;
