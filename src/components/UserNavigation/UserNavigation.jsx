import { logOutUser } from 'Redux/authOperations';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

export const UserNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user.name);

  return (
    <Box display="flex" gap={4}>
      {!isLoggedIn && (
        <Button
          as={NavLink}
          to="/register"
          _activeLink={{
            transform: 'scale(1.1)',
            color: 'orange',
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          colorScheme="telegram"
          _active={{
            transform: 'scale(1.5)',
            color: 'orange',
          }}
        >
          Signup
        </Button>
      )}
      {!isLoggedIn && (
        <Button
          as={NavLink}
          to="/login"
          _activeLink={{
            transform: 'scale(1.1)',
            color: 'orange',
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          colorScheme="telegram"
          _active={{
            transform: 'scale(1.5)',
            color: 'orange',
          }}
        >
          Login
        </Button>
      )}
      {isLoggedIn && (
        <Button
          onClick={() => {
            dispatch(logOutUser());
          }}
          colorScheme="telegram"
          _active={{
            transform: 'scale(1.5)',
            color: 'orange',
          }}
        >
          Logout {user}🥷🏻
        </Button>
      )}
    </Box>
  );
};
