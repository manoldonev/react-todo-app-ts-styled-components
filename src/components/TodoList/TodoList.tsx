import styled from 'styled-components/macro';
import { useTodoState } from '../../context/todo';
import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';
import { filter, search } from '../../services/filter';
import InputToggle from './InputToggle';

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

const Paragraph = styled.p`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0;
  background: #f2f2f2;
  border: 1px solid rgba(229, 229, 229, 0.5);
  color: #888;
`;

export default function TodoList(): JSX.Element {
  const { items, filterMode, inputMode, query } = useTodoState();
  const filteredItems = filter(search(items, query), filterMode);
  const itemCount = filteredItems.length;

  let listContent;
  if (filteredItems.length === 0) {
    listContent = <Paragraph>There are no items.</Paragraph>;
  } else {
    listContent = (
      <StyledList data-testid="todo-list">
        {filteredItems.map((item) => (
          <TodoItem key={item.id} data={item} />
        ))}
      </StyledList>
    );
  }

  return (
    <Section>
      <Header />
      <InputToggle mode={inputMode} query={query} />

      {listContent}

      <Footer count={itemCount} filterMode={filterMode} inputMode={inputMode} />
    </Section>
  );
}
