import styled from "styled-components";
import { Button } from "./Button";

const Text = styled.p`
  color: ${(p) => p.theme.colors.accent};
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.l};
  padding-top: ${(p) => p.theme.space[4]}px; // спейсінги
  padding-bottom: ${(p) => p.theme.space[3]}px;
`;

export const App = () => {
  return (
    <>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta
        obcaecati deserunt nobis suscipit eaque?
      </Text>
      <Button>Search</Button>
      <Button>Filter</Button>
      <Button>ShowModal</Button>
      <Button type="submit">Login</Button>
    </>
  );
};
