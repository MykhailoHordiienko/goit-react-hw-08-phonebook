import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsOperations';
import toast from 'react-hot-toast';
import { List } from '@chakra-ui/react';
import { selectUserFilter, selectUserList } from 'Redux/selectors';

export const Contacts = () => {
  const userList = useSelector(selectUserList);
  const userFilter = useSelector(selectUserFilter);
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
    <List spacing={4} mt="20px">
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
    </List>
  );
};
