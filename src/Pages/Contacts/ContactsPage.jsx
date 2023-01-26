import { Contacts } from '../../components/Contacts/Contacts';
import { FormFild } from '../../components/FormFild/FormFild';
import { toast } from 'react-hot-toast';
import { Filter } from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contactsOperations';
import { Section } from 'components/StyledSection/StyledSection';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then()
      .catch(e => toast.error(e));
  }, [dispatch]);

  return (
    <Section>
      <FormFild />
      <h4>Contacts</h4>
      <Filter />
      {userList.length > 0 && <Contacts />}
    </Section>
  );
};
