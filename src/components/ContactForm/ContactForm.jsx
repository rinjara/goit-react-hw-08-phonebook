import { Field, Form, Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const phoneRegex = RegExp(
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
);

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[^0-9]+$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Name is required field!'),
  number: yup
    .string()
    .matches(phoneRegex, {
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
      <Form autoComplete="off">
        <label htmlFor="name">
          Friend Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number">
          Phone number:
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
