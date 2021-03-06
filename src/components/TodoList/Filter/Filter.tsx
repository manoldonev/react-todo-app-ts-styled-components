import styled from 'styled-components/macro';
import { ActionType, useTodoDispatch } from '../../../context/todo';
import { FilterMode } from '../../../services/filter';

const FilterList = styled.ul`
  flex: 0 0 auto;
  list-style-type: none;
  padding-left: 0;
`;

const FilterItem = styled.li`
  display: inline;
`;

const Button = styled.button.attrs({ type: 'button' })<{ active: boolean }>`
  text-transform: capitalize;
  background-color: transparent;
  color: inherit;
  margin: 0.3rem;
  padding: 0.3rem 0.7rem;
  text-decoration: none;
  border: 0.1rem solid transparent;
  border-radius: 0.3rem;

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  ${(props) =>
    props.active &&
    `
    border-color: rgba(175, 47, 47, 0.2);
  `}
`;

export default function Filter({ mode }: { mode: FilterMode }): JSX.Element {
  const dispatch = useTodoDispatch();

  function toggleFilter(key: string): void {
    dispatch({ type: ActionType.ToggleFilter, payload: key });
  }

  return (
    <FilterList>
      {Object.entries(FilterMode).map(([key, value]) => (
        <FilterItem key={key}>
          <Button active={value === mode} onClick={() => toggleFilter(key)}>
            {value}
          </Button>
        </FilterItem>
      ))}
    </FilterList>
  );
}
