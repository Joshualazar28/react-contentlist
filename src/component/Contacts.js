import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Consumer } from "../Context"
export class Contacts extends Component {



    deleteContact = (id) => {

        const { contacts } = this.state;
        const newContact = contacts.filter((contact) => contact.id != id);
        this.setState({
            contacts: newContact,
        });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value

                    return (
                        <React.Fragment>
                            {contacts.map((contact) => (
                                <Contact
                                    key={contact.id}
                                    Contact={contact}

                                />
                            ))}
                        </React.Fragment>
                    )

                }}
            </Consumer>
        )


    }

}
export default Contacts;
