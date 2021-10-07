import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {

    switch (action.type)
    {
        case 'DELETE_CONTACT':

            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload)
            };


        default:
            return state;
    }


};


export class Provider extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: "joshualazr",
                email: "joshualazar140@gmail.com",
                phone: "11034-4334-522-3",
            },
            {
                id: 2,
                name: "elisha lazar",
                email: "elisha@gmail.com",
                phone: "11034-4334-522-3",
            },

            {
                id: 3,
                name: "rumail ijaz",
                email: "rumailIjaz@gmail.com",
                phone: "11034-4334-522-3",
            },
        ],


        dispatch: action => this.setState(state =>
            reducer(state, action))

    };






    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer