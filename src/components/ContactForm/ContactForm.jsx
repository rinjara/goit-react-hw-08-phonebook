import { Formik } from 'formik';
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from './ContactForm.styled';
import * as yup from 'yup';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsRTKSlice';
import { toast } from 'react-toastify';

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

export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async (values, { resetForm }) => {
    const isSameNameInTheList = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (isSameNameInTheList) {
      toast.error(`${values.name} is already in the list!`);
      return;
    }
    try {
      await addContact(values);
      toast.success('Contact added');
      resetForm();
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div>
      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
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
      )}
    </div>
  );
};
