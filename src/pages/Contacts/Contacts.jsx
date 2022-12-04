import React from 'react';
import { MainTitle, Title, Wrapper } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import { Filter } from 'components/Filter/Filter';

function Contacts() {
  return (
    <Wrapper>
      <ToastContainer />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}

export default Contacts;
