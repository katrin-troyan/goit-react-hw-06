import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList';
import contactsData from './components/ContactList/contactsData.json';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

export default function App() {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(savedContacts || contactsData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = newContact => {
    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };
    setContacts(prev => [...prev, contactToAdd]);
  };

  const handleDeleteContact = idToDelete => {
    setContacts(prev => prev.filter(contact => contact.id !== idToDelete));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
