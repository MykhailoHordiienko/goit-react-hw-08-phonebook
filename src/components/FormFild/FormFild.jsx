import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactsOperations';

import toast from 'react-hot-toast';

import { Formik, Field } from 'formik';
import { Button, Label, StyledForm } from './FormFild.styled.js';

const initialValues = {
  name: '',
  phone: '',
};

export const FormFild = () => {
  const userList = useSelector(state => state.contacts.contacts);
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
    dispatch(addContact(user));
    toast(`✅ ${e.name} added`);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onHandleSubmit}>
      <StyledForm>
        <Label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="phone">
          Number
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
