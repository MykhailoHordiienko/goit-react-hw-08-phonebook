import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactsOperations';

import toast from 'react-hot-toast';

import { Formik, Field } from 'formik';
import { StyledForm } from './FormFild.styled.js';
import { Button, Input } from '@chakra-ui/react';
import { selectIsLoadingContacts, selectUserList } from 'Redux/selectors.js';

const initialValues = {
  name: '',
  number: '',
};

export const FormFild = () => {
  const userList = useSelector(selectUserList);
  const isLoading = useSelector(selectIsLoadingContacts);

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
    const user = { ...e };
    dispatch(addContact(user))
      .unwrap()
      .then(() => toast(`✅ ${e.name} added`))
      .catch(e => toast.error(e));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onHandleSubmit}>
      <StyledForm>
        <Input
          as={Field}
          _active={{
            transform: 'scale(1.5)',
          }}
          width={['100%', '70%', '40%']}
          placeholder="Enter Name 🙋🏼‍♀️"
          variant="filled"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Input
          as={Field}
          _active={{
            transform: 'scale(1.5)',
          }}
          width={['100%', '70%', '40%']}
          placeholder="Enter Phone-Number 📲"
          variant="filled"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button
          colorScheme="telegram"
          _active={{
            transform: 'scale(1.5)',
          }}
          type="submit"
          disabled={isLoading}
        >
          Add contact
        </Button>
      </StyledForm>
    </Formik>
  );
};
