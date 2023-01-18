import { Contacts } from './Contacts/Contacts';
import { FormFild } from './FormFild/FormFild';
import { toast, Toaster } from 'react-hot-toast';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then()
      .catch(e => toast.error(e));
  }, [dispatch]);

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 20,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <h2>Phonebook</h2>
      <FormFild />
      <h4>Contacts</h4>
      <Filter />
      {userList.length > 0 && <Contacts />}
    </div>
  );
};
