import { ListItem, StyledList } from './ContactList.styled';
import { Contact } from './Contact';
import { useFetchContactsQuery } from 'redux/contactsRTKSlice';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const filterName = useSelector(selectFilter).toLowerCase().trim();
  const filteredContacts =
    filterName === ''
      ? contacts
      : contacts.filter(friend =>
          friend.name.toLowerCase().includes(filterName)
        );

  return (
    <div>
      {contacts && (
        <StyledList>
          {filteredContacts.map(contact => (
            <ListItem key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </ListItem>
          ))}
        </StyledList>
      )}

      {isLoading && <b> Loading...</b>}

      {error && toast.error('Something wrong :( Please, try again later!')}
    </div>
  );
};
