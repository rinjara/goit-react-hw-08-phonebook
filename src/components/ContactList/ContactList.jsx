import { ListItem, StyledList } from './ContactList.styled';
import { Contact } from './Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteFriend }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteFriend={onDeleteFriend}
          />
        </ListItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  onDeleteFriend: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
