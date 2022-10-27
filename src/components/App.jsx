import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, Wrapper, Title } from './App.styled';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const compairNames = friendInfo => {
    const found = contacts.find(
      ({ name }) => name.toLowerCase() === friendInfo.name.toLowerCase()
    );
    if (found) alert(`${friendInfo.name} already in the list`);
    return found;
  };

  const handleSubmit = (values, { resetForm }) => {
    const result = compairNames(values);
    if (result) return;

    values.id = nanoid();
    setContacts(prevState => [values, ...prevState]);
    resetForm();
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredFriends = () => {
    const normalizedFilterValue = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const deleteFriend = friendId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== friendId)
    );
  };

  const filteredFriends = getFilteredFriends();

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleSubmit} />

      <Title>Contacts</Title>
      <Filter onChange={handleFilterChange} value={filter} />
      <ContactList contacts={filteredFriends} onDeleteFriend={deleteFriend} />
    </Wrapper>
  );
};
