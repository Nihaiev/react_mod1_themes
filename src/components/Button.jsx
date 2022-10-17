import styled from "styled-components";

const StyledButton = styled.button`
margin: ${(p) => p.theme.space[0]}px;
padding-top: ${(p) => p.theme.space[0]}px;
`;
export const Button = ({ type = 'button', children }) => {
    return <StyledButton type ={type}>{children }</StyledButton>
};

//58