import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
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
    const data = { ...values, id: nanoid() };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
    resetForm();
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleSubmit} />

          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={this.state.contacts} />
        </div>
      </>
    );
  }
}
