import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/selectors';

export const AppNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Breadcrumb fontSize="2xl" as="b">
      <BreadcrumbItem>
        {!isLoggedIn && (
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
        )}
      </BreadcrumbItem>
      {isLoggedIn && (
        <BreadcrumbItem>
          (
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
          )
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
