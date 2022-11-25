import { DelButton, Paragraph, Text } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsRTKSlice';
import { toast } from 'react-toastify';

export const Contact = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <Paragraph>
        <Text>{name}:</Text> {number}
      </Paragraph>
      <DelButton
        type="button"
        onClick={() => {
          deleteContact(id);
          toast.success(`Your contact ${name} was successfully deleted!`);
        }}
        disabled={isLoading}
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
};
