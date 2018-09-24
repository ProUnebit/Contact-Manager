import React from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
    }
}

export class Provider extends React.Component {

    state = {
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
            },
            {
                id: 4,
                name: 'Alexey Ratnikov',
                email: 'aratnikov@gmail.com',
                phone: '888-88-8888'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
