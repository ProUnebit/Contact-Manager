import React from 'react'
import Contact from './Contact'

class Contacts extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-55-5555'
                },
                {
                    id: 2,
                    name: 'Marry Jane',
                    email: 'mjane@gmail.com',
                    phone: '666-66-6666'
                },
                {
                    id: 3,
                    name: 'Brad Traversy',
                    email: 'btraversy@gmail.com',
                    phone: '777-77-7777'
                }
            ]
        }
    }

    render () {

        let { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => {
                    return (
                        <Contact
                            marginTop = { contact === contacts[0] ? {marginTop: '120px'} : null }
                            key = {contact.id}
                            contact = {contact}
                            />
                    )
                })}
            </div>
        )
    }
}

export default Contacts;
