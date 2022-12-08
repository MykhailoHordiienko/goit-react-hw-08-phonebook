import PropTypes from 'prop-types';

import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelite }) => {
  return (
    <>
      <li>
        {name} : {number}
        <Button type="button" onClick={() => onDelite(id)}>
          Delite
        </Button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  onDelite: PropTypes.func.isRequired,
};
