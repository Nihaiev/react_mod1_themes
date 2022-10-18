import styled from 'styled-components';
import { HiArchive, HiArrowCircleDown, HiArrowCircleUp } from 'react-icons/hi';

import { Button } from './Button';
import { Box } from './Box';

const Text = styled.p`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px; // спейсінги
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const App = () => {
  return (
    <Box
      bg="primary"
      olor="text"
      pt={3}
      width="50%"
      display="flex"
      alignItems="center"
      border="normal"
      borderColor="accent"
      as="main"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
      repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
      eaque?
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </Text>
      <Button icon={HiArchive}>Search</Button>
      <Button icon={HiArrowCircleDown}>Filter</Button>
      <Button icon={HiArrowCircleUp}>ShowModal</Button>
      <Button type="submit">Login</Button>
      <Button type="submit" disabled>
        Login
      </Button>
    </Box>
  );
};
