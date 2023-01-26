import {
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from '@chakra-ui/react';
import { Footer } from 'components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Flex flexDirection="column" ml="auto" mr="auto" maxW="1400px">
      <Box
        as="heder"
        position="fixed"
        width="100%"
        maxWidth="1400px"
        p={[2, 4, 6]}
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
              _activeLink={{ color: 'orange' }}
              size="xl"
            >
              Contacts
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box display="flex" gap={4} ml="auto">
          <Button
            as={NavLink}
            to="/register"
            _activeLink={{
              transform: 'scale(1.1)',
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            colorScheme="telegram"
            _active={{
              transform: 'scale(1.5)',
            }}
          >
            Signup
          </Button>
          <Button
            as={NavLink}
            to="/login"
            _activeLink={{
              transform: 'scale(1.1)',
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            colorScheme="telegram"
            _active={{
              transform: 'scale(1.5)',
            }}
          >
            Login
          </Button>
        </Box>
      </Box>

      <Outlet />

      <Footer />
    </Flex>
  );
};
