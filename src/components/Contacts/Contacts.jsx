import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsOperations';
import toast from 'react-hot-toast';

export const Contacts = () => {
  const userList = useSelector(state => state.contacts.contacts);
  const userFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deliteContact = id => {
    const delitedContact = userList.find(user => user.id === id);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast(`❌ ${delitedContact.name} delited from contacts list`))
      .catch(e => toast.error(e));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = userFilter.toLowerCase();
    return userList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visiblContacts = getVisibleContacts();

  return (
    <ul>
      {visiblContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
            onDelite={deliteContact}
          />
        );
      })}
    </ul>
  );
};
