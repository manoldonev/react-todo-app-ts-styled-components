import styled from 'styled-components/macro';
import { useTodoState } from '../../context/todo';
import TodoItem from './TodoItem';
import Header from './Header';

const Section = styled.section`
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
  list-style-type: none;
  padding-left: 0;
`;

export default function TodoList(): JSX.Element {
  const { items } = useTodoState();

  return (
    <Section>
      <StyledList>
        <Header />

        {items.map((item) => (
          <TodoItem key={item.id} data={item} />
        ))}
      </StyledList>
    </Section>
  );
}
