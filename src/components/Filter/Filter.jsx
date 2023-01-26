import { Heading, Input } from '@chakra-ui/react';
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
      <Heading size="md" mt="50px">
        Find contacts by name
      </Heading>
      <Input
        _active={{
          transform: 'scale(1.5)',
        }}
        mt="20px"
        width={['100%', '50%', '25%']}
        placeholder="Enter Phone-Number 📲"
        variant="filled"
        type="text"
        value={userFilter}
        onChange={changeFilter}
      />
    </>
  );
};
