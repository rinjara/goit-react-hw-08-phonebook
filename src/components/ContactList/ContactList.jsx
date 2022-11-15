import { ListItem, StyledList } from './ContactList.styled';
import { Contact } from './Contact';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = ({ onDeleteFriend }) => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <StyledList>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </ListItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
