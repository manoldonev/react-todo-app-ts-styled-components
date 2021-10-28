import styled from 'styled-components/macro';
import { useTodoState } from '../../context/todo';

const StyledSection = styled.section`
  background-color: #fff;
  padding: 2rem 2rem 1rem 2rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.2rem;
  margin: 3rem auto;
  min-width: 32rem;
  max-width: 60rem;
  position: relative;
`;

const StyledList = styled.ul`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0;
  background: #f2f2f2;
  border: 1px solid rgba(229, 229, 229, 0.5);
  color: #888;
`;

export default function TodoList(): JSX.Element {
  const { items } = useTodoState();

  return (
    <StyledSection>
      <StyledList>
        {items.map((item) => (
          <ul key={item.id}>{item.text}</ul>
        ))}
      </StyledList>
    </StyledSection>
  );
}
