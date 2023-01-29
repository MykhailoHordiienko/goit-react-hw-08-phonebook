import { Heading } from '@chakra-ui/react';
import { HomeSection } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeSection>
      <Heading mt={'auto'} mb={'auto'}>
        Welcome to your Phone Book {`💁🏼‍♀️`}
      </Heading>
      <Heading ml={'auto'} mt={5} mb={'auto'}>
        Please Signup or Login {`👆🏻`}
      </Heading>
    </HomeSection>
  );
}
