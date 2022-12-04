import { ListItem, StyledList } from './ContactList.styled';
import { Contact } from './Contact';
import { useFetchContactsQuery } from 'redux/contacts/contactsRTKSlice';
import { selectFilter } from 'redux/filter/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const filterName = useSelector(selectFilter).toLowerCase().trim();
  const filteredContacts =
    filterName === ''
      ? contacts
      : contacts.filter(friend =>
          friend.name.toLowerCase().includes(filterName)
        );

  const shouldShow = contacts && isLoggedIn;

  return (
    <div>
      {shouldShow && (
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
