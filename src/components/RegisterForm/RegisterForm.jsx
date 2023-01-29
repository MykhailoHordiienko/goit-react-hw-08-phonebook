import { Formik, Field } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import { StyledForm } from 'components/FormFild/FormFild.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { registerUser } from 'Redux/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = (e, { resetForm }) => {
    const { name, email, password, confirmPassword } = e;
    if (password !== confirmPassword) {
      return toast.error('Password do not match');
    }
    dispatch(registerUser({ name, email, password }));

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
          placeholder="Enter Email 📧"
          variant="filled"
          type="email"
          name="email"
          required
        />

        <Input
          as={Field}
          _active={{
            transform: 'scale(1.5)',
          }}
          width={['100%', '70%', '40%']}
          placeholder="Enter Password 🛂"
          variant="filled"
          type="password"
          name="password"
          required
        />

        <Input
          as={Field}
          _active={{
            transform: 'scale(1.5)',
          }}
          width={['100%', '70%', '40%']}
          placeholder="Confirm Password 👮🏻‍♀️"
          variant="filled"
          type="password"
          name="confirmPassword"
          required
        />

        <Button
          colorScheme="telegram"
          _active={{
            transform: 'scale(1.5)',
          }}
          type="submit"
        >
          Submit
        </Button>
      </StyledForm>
    </Formik>
  );
};
