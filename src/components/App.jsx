import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, Wrapper, Title } from './App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.compairNames(values);
    const data = { ...values, id: nanoid() };
    this.setState(({ contacts }) => {
      return { contacts: [data, ...contacts] };
    });
    resetForm();
  };

  compairNames = friendInfo => {
    const { contacts } = this.state;

    contacts.map(({ name }) =>
      name === friendInfo.name
        ? alert(`${friendInfo.name} is already in Contacts!`)
        : friendInfo
    );
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredFriends = () => {
    const { filter, contacts } = this.state;

    const normalizedFilterValue = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  deleteFriend = friendId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== friendId),
    }));
  };

  render() {
    const { handleSubmit, handleFilterChange, deleteFriend } = this;
    const { filter } = this.state;
    const filteredFriends = this.getFilteredFriends();

    return (
      <Wrapper>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={handleSubmit} />

        <Title>Contacts</Title>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactList contacts={filteredFriends} onDeleteFriend={deleteFriend} />
      </Wrapper>
    );
  }
}
