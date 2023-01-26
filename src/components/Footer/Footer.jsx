import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Flex
      as={'footer'}
      alignItems={'center'}
      justifyContent={'center'}
      borderTop="1px"
      borderTopRadius="40px"
    >
      <Text>&#169; 2023</Text>
    </Flex>
  );
};
