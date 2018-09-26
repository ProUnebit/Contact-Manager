import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/Contacts/Contacts'
import AddContact from './components/Contacts/AddContact'
import Header from './components/Layout/Header'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import { Provider } from './context'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Styles/index.css';
import { LinearProgress } from '@material-ui/core';

class App extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

  render() {

    return (
        <Provider>
            <Router>
                {this.state.loading ?
                    <LinearProgress color="secondary" style = {{marginTop: 15, backgroundColor: '#64FFDA'}}/>
                    :
                    <div>
                        <Header branding="Contact Manager"/>
                        <SimpleBar style = {{height: 'calc(100vh - 50px)'}}>
                            <Switch>
                                <Route exact path="/" component = {Contacts}/>
                                <Route exact path="/contact/add" component = {AddContact}/>
                                <Route exact path="/about" component = {About}/>
                                <Route component = {NotFound}/>
                            </Switch>
                        </SimpleBar>
                    </div>
                }
            </Router>
        </Provider>
        )
    }
}

export default App;
