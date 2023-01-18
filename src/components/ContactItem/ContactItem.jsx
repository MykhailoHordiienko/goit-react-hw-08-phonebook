import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelite }) => {
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <li>
      {name} : {number}
      <Button type="button" disabled={isLoading} onClick={() => onDelite(id)}>
        Delite
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  onDelite: PropTypes.func.isRequired,
};
