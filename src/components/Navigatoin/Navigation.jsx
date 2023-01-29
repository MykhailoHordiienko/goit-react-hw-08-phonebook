import {
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from '@chakra-ui/react';
import { Footer } from 'components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOutUser } from 'Redux/authOperations';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Flex flexDirection="column" ml="auto" mr="auto" maxW="1400px">
      <Box
        as="header"
        width="100%"
        maxWidth="1400px"
        p={[4, 6, 8]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px"
        borderBottomRadius="40px"
      >
        <Breadcrumb fontSize="2xl" as="b">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/"
              _active={{
                transform: 'scale(1.5)',
              }}
              _activeLink={{ color: 'orange' }}
              size="xl"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/contacts"
              _active={{
                transform: 'scale(1.5)',
              }}
              _activeLink={{ color: 'orange' }}
              size="xl"
            >
              Contacts
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box display="flex" gap={4} ml="auto">
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
              Logout
            </Button>
          )}
        </Box>
      </Box>

      <Outlet />

      <Footer />
    </Flex>
  );
};
