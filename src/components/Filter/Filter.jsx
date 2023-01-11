import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const userFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={userFilter} onChange={changeFilter} />
    </>
  );
};
