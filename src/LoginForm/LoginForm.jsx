import { Formik, Field } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import { StyledForm } from 'components/FormFild/FormFild.styled';
import { useDispatch } from 'react-redux';
import { logInUser } from 'Redux/authOperations';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const onHandleSubmit = (e, { resetForm }) => {
    const { email, password } = e;
    dispatch(logInUser({ email, password }));
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
