import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <div>
      <StyledLabel htmlFor="filter">
        Find contacts by name:
        <StyledInput
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
        />
      </StyledLabel>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
