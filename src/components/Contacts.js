import React from 'react'
import Contact from './Contact'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../Styles/index.css';
import { Consumer } from '../context'

class Contacts extends React.Component {

    render () {

        return (
            <Consumer>
                {value => (
                    <SimpleBar style = {{height: '100vh'}}>
                        {value.contacts.map(contact => {
                            return (
                                <Contact
                                    marginTop = { contact === value.contacts[0] ? {marginTop: '100px'} : null }
                                    key = {contact.id}
                                    contact = {contact}
                                    />
                            )
                        })}
                    </SimpleBar>
                    )
                }
            </Consumer>
        )
    }
}

export default Contacts;
