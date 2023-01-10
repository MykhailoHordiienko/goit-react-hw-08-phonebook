import { Contacts } from './Contacts/Contacts';
import { FormFild } from './FormFild/FormFild';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deliteUserContact } from 'Redux/contactsSlice';
import { addFilter } from 'Redux/filterSlice';

export const App = () => {
  const userList = useSelector(state => state.contacts.contacts);
  const userFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onHandleSubmit = (e, { resetForm }) => {
    const contactName = [];

    for (const contact of userList) {
      contactName.push(contact.name.toLowerCase());
    }

    if (contactName.includes(e.name.toLowerCase())) {
      toast(`😱 ${e.name} already in contacts list`);
      return;
    }
    const user = { ...e, id: nanoid() };
    dispatch(addContact(user));
    toast(`✅ ${e.name} added`);
    resetForm();
  };

  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = userFilter.toLowerCase();
    return userList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deliteContact = id => {
    dispatch(deliteUserContact(id));
    const delitedContact = userList.find(user => user.id === id);
    toast(`❌ ${delitedContact.name} delited from contacts list`);
  };

  const visiblContacts = getVisibleContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Toaster />
      <h2>Phonebook</h2>
      <FormFild onSubmit={onHandleSubmit} />
      <h4>Contacts</h4>
      <Filter value={userFilter} onChange={changeFilter} />
      {userList.length > 0 && (
        <Contacts contacts={visiblContacts} onDelite={deliteContact} />
      )}
    </div>
  );
};
