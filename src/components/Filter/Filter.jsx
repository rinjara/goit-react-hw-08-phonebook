import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { StyledInput, StyledLabel } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <StyledLabel htmlFor="filter">
        Find contacts by name:
        <StyledInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </StyledLabel>
    </div>
  );
};
