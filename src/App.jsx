import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  console.log(contacts);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(contact) {
    setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]);
  }

  function deleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contactId !== contact.id)
    );
  }

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      {contacts.length > 0 && (
        <>
          <h2 className="contactsTitle">Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList items={getVisibleContacts()} onDelete={deleteContact} />
        </>
      )}
    </div>
  );
}

export default App;
