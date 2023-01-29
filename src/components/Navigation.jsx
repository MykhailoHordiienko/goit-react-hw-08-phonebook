import { Box, Flex } from '@chakra-ui/react';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { AppNavigation } from './AppNavigation/AppNavigation';
import { UserNavigation } from './UserNavigation/UserNavigation';

export const Navigation = () => {
  return (
    <Flex flexDirection="column" ml="auto" mr="auto" maxW="1400px">
      <Box
        as="header"
        width="100%"
        maxWidth="1400px"
        p={[4, 6, 8]}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderBottomRadius="40px"
      >
        <AppNavigation />
        <UserNavigation />
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Flex>
  );
};
