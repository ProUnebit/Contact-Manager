import React, { Component } from 'react'
import Contacts from './components/Contacts'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
          <Header branding="Contact Manager"/>
          <Contacts />
      </div>
    );
  }
}

export default App;
