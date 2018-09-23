import React from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

class Contacts extends React.Component {

    render () {

        return (
            <Consumer>
                {value => (
                    <div style = {{height: '100vh', overflowX: 'hidden'}}>
                        {value.contacts.map(contact => {
                            return (
                                <Contact
                                    marginTop = { contact === value.contacts[0] ? {marginTop: '100px'} : null }
                                    key = {contact.id}
                                    contact = {contact}
                                    />
                            )
                        })}
                    </div>
                    )
                }
            </Consumer>
        )
    }
}

export default Contacts;
