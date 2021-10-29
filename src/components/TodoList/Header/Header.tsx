import styled from 'styled-components/macro';

const StyledHeader = styled.h1`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

export default function Header(): JSX.Element {
  return <StyledHeader>Things to do</StyledHeader>;
}
