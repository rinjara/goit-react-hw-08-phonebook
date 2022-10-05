import { Formik } from 'formik';
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from './ContactForm.styled';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const phoneRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, {
      message:
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan',
      excludeEmptyString: false,
    })
    .required('Name is required field!'),
  number: yup
    .string()
    .matches(phoneRegEx, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      excludeEmptyString: false,
    })
    .required('Number is required field!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <StyledForm autoComplete="off">
        <StyledLabel htmlFor="name">Friend Name:</StyledLabel>
        <StyledInput type="text" name="name" />
        <StyledErrorMessage name="name" component="div" />

        <StyledLabel htmlFor="number">Phone number:</StyledLabel>
        <StyledInput type="tel" name="number" />
        <StyledErrorMessage name="number" component="div" />

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
