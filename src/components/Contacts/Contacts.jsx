import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deliteUserContact } from 'Redux/contactsSlice';
import toast from 'react-hot-toast';

export const Contacts = () => {
  const userList = useSelector(state => state.contacts.contacts);
  const userFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deliteContact = id => {
    dispatch(deliteUserContact(id));
    const delitedContact = userList.find(user => user.id === id);
    toast(`❌ ${delitedContact.name} delited from contacts list`);
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
      {visiblContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelite={deliteContact}
          />
        );
      })}
    </ul>
  );
};
