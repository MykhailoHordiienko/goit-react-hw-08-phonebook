import PropTypes from 'prop-types';
import { Button } from './Contacts.styled';

export const Contacts = ({ contacts, onDelite }) => {
  return (
    <ul>
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
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelite: PropTypes.func.isRequired,
};
