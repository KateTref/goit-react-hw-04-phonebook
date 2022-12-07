import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />
        {contacts.length > 0 && (
          <>
            <h2 className="contactsTitle">Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              items={visibleContacts}
              onDelete={this.deleteContact}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
