import React from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'
import Typography from '@material-ui/core/Typography';

class Contacts extends React.Component {

    render () {

        return (
            <Consumer>
                {value => (
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
                }
            </Consumer>
        )
    }
}

export default Contacts;
