import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}

export class Provider extends React.Component {

    state = {
        // Fake data
        contacts: [
            {
                id: 1,
                name: 'John Lennon',
                email: 'jlenon@gmail.com',
                phone: '555-55-5555'
            },
            {
                id: 2,
                name: 'Mary Jane',
                sex: 'Female',
                email: 'mjane@gmail.com',
                phone: '666-66-6666'
            },
            {
                id: 3,
                name: 'Elon Musk',
                email: 'emusk@gmail.com',
                phone: '777-77-7777'
            },
            {
                id: 4,
                name: 'Alexey Ratnikov',
                sex: 'Male',
                email: 'aratnikov@gmail.com',
                phone: '888-88-8888'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({
                contacts: res.data
            }))
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
