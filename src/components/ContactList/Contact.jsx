import PropTypes from 'prop-types';

export const Contact = ({ name, number }) => {
  return (
    <>
      <span>{name}</span>: {number}
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
