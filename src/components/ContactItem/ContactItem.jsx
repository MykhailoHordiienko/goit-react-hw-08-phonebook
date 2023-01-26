import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ListItem, ListIcon, Icon } from '@chakra-ui/react';
import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';

// import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelite }) => {
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      {name} : {number}
      <Button
        colorScheme="telegram"
        size="xs"
        type="button"
        ml="10px"
        disabled={isLoading}
        onClick={() => onDelite(id)}
      >
        <Icon as={DeleteIcon} ml={0} color="white.500" />
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  onDelite: PropTypes.func.isRequired,
};
