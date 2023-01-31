import { Heading, Input } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'Redux/filterSlice';
import { selectUserFilter } from 'Redux/selectors';

export const Filter = () => {
  const userFilter = useSelector(selectUserFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <>
      <Heading size="md" mt="50px">
        Find contacts by name
      </Heading>
      <Input
        mt="20px"
        width={['100%', '50%', '25%']}
        placeholder="Enter Name 💁🏼‍♀️"
        variant="filled"
        type="text"
        value={userFilter}
        onChange={changeFilter}
      />
    </>
  );
};
