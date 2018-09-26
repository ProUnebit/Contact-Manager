import React from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'
import { Typography } from '@material-ui/core';

class Contacts extends React.Component {

    // state = {
    //     loading: true
    // }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         loading: false
        //     });
        // }, 2000)
    }

    render () {

        let contactList = value => (
                <React.Fragment>
                        <Typography
                            variant="display1"
                            align="center"
                            style = {{textTransform: 'uppercase', marginTop: '40px'}}>
                            <span style = {{color: '#FF7043', marginRight: '12px'}}>
                                Contact
                            </span>
                                List
                        </Typography>
                    {value.contacts.map(contact => {
                        return (
                            <Contact
                                marginTop = { contact === value.contacts[0] ? {marginTop: '30px'} : null }
                                key = {contact.id}
                                contact = {contact}
                                />
                        )
                    })}
                </React.Fragment>
                )

        // if (this.state.loading) {
        //     contactList = value => <LinearProgress color="secondary" style = {{marginTop: 5, backgroundColor: '#64FFDA'}}/>
        // }

        return <Consumer>{contactList}</Consumer>
    }
}

export default Contacts;
