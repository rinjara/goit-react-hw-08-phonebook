import { DelButton, Paragraph, Text } from './ContactList.styled';
import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, onDeleteFriend }) => {
  return (
    <>
      <Paragraph>
        <Text>{name}:</Text> {number}
      </Paragraph>
      <DelButton
        type="button"
        onClick={() => {
          onDeleteFriend(id);
        }}
      >
        Delete
      </DelButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteFriend: PropTypes.func.isRequired,
};
