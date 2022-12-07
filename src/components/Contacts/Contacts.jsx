import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = ({ contacts, onDelite }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} onDelite={onDelite} />
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
