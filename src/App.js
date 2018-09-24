import React, { Component } from 'react'
import Contacts from './components/Contacts/Contacts'
import AddContact from './components/Contacts/AddContact'
import Header from './components/Layout/Header'
import { Provider } from './context'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Styles/index.css';

class App extends Component {
  render() {
    return (
        <Provider>
            <div>
                <Header branding="Contact Manager"/>
                <SimpleBar style = {{height: 'calc(100vh - 50px)'}}>
                    <AddContact />
                    <Contacts />
                </SimpleBar>
            </div>
        </Provider>
    );
  }
}

export default App;
