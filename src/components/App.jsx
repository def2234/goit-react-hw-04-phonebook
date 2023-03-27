import { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts.js';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    const toFind = data.name.toLowerCase();
    if (contacts.find(item => item.name.toLowerCase() === toFind)) {
      alert(`${data.name} is alrady in contacts`);
    } else {
      const createContact = { ...data, id: nanoid() };

      setContacts(prevContacts => [...prevContacts, createContact]);
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContact = () => {
    const normalizedName = filter.toLowerCase();
    const filterContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
    return filterContact;
  };

  return (
    <>
      <h2>Phone book</h2>
      <FormContacts createContact={createContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={filterContact()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;
