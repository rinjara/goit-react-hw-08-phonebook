import { Contact } from './Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
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
