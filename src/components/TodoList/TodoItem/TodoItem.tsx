import styled from 'styled-components/macro';
import { ActionType, useTodoDispatch } from '../../../context/todo';
import type { DataItem } from '../../../services/todo';

const StyledTodoItem = styled.li<{ done: boolean }>`
  background-color: #fff;
  border: none;
  border-bottom: 0.1rem solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  ${(props) =>
    props.done &&
    `
    text-decoration: line-through;
    color: #aaa;
  `}
`;

const Wrapper = styled.div`
  margin: 1rem 0;
  min-height: 2rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.4rem;
`;

export default function TodoItem({ data }: { data: DataItem }): JSX.Element {
  const { id, text, done } = data;
  const dispatch = useTodoDispatch();

  function handleChange(): void {
    dispatch({ type: ActionType.ToggleItem, payload: id });
  }

  return (
    <StyledTodoItem done={done}>
      <Wrapper>
        <label htmlFor={id}>
          <Checkbox id={id} checked={done} onChange={handleChange} />
          {text}
        </label>
      </Wrapper>
    </StyledTodoItem>
  );
}
