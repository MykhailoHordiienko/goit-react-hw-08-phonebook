import { Formik, Field } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import { StyledForm } from 'components/FormFild/FormFild.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const onHandleSubmit = (e, { resetForm }) => {
    console.log(e);
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
