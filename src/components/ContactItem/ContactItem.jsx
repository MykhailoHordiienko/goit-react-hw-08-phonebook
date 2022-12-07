import PropTypes from 'prop-types';

import { Button } from './ContactItem.styled';

export const ContactItem = ({ contacts, onDelite }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} : {number}
            <Button type="button" onClick={() => onDelite(id)}>
              Delite
            </Button>
          </li>
        );
      })}
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelite: PropTypes.func.isRequired,
};
