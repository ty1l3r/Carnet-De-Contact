import React, {Component} from 'react';
import Contact from "./Contact";

class List extends Component {

    state = {
        contacts: [
            {
                id: 1,
                nom: 'Hakha',
                email: 'hakha@msn.com',
                tel: '06 74 53 64 58'
            },
            {
                id: 2,
                nom: 'Bob',
                email: 'hakha@msn.com',
                tel: '06 74 53 64 58'
            },
            {
                id: 3,
                nom: 'Hector',
                email: 'hakha@msn.com',
                tel: '06 74 53 64 58'
            }
        ]
    }

    supprime = (id) => {
        const nvContacts = this.state.contacts.filter(contact =>
            contact.id !== id)
        this.setState({
                contacts: nvContacts
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        supprimeClick={() => this.supprime(contact.id)}
                    />
                ))}
            </div>
        );
    }
}

export default List;