import React from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'

class Contacts extends React.Component {

    render () {

        return (
            <Consumer>
                {value => (
                    <React.Fragment>
                        {value.contacts.map(contact => {
                            return (
                                <Contact
                                    marginTop = { contact === value.contacts[0] ? {marginTop: '40px'} : null }
                                    key = {contact.id}
                                    contact = {contact}
                                    />
                            )
                        })}
                    </React.Fragment>
                    )
                }
            </Consumer>
        )
    }
}

export default Contacts;
