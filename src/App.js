import React, { Component } from 'react';
import './App.css';
import { Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button
              variant="contained"
              color="primary"
              >Test Button
          </Button>
      </div>
    );
  }
}

export default App;
