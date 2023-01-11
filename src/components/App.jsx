import { Contacts } from './Contacts/Contacts';
import { FormFild } from './FormFild/FormFild';
import { Toaster } from 'react-hot-toast';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const userList = useSelector(state => state.contacts.contacts);

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
      <FormFild />
      <h4>Contacts</h4>
      <Filter />
      {userList.length > 0 && <Contacts />}
    </div>
  );
};
