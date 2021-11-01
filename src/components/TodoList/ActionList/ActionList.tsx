import type { MouseEvent } from 'react';
import styled from 'styled-components/macro';
import { ActionType, useTodoDispatch } from '../../../context/todo';
import InputMode from '../../../services/mode';
import AddIcon from '../../../assets/add.svg';
import SearchIcon from '../../../assets/search.svg';

const StyledList = styled.ul`
  flex: 0 0 auto;
  list-style-type: none;
  border-right: 0.1rem solid #ccc;
  margin-right: 1.5rem;
  padding: 0;
`;

const ActionItem = styled.li`
  display: inline;
`;

const ImageButton = styled.button.attrs({ type: 'button' })<{ active: boolean }>`
  border: 0;
  margin: 0 0.8rem 0 0;
  padding: 0.4rem 1.5rem;
  height: calc(max(1.8rem, 18px));
  width: calc(max(1.8rem, 18px));
  cursor: pointer;
  transition: 0.3s all;
  opacity: 0.4;
  ${(props) => props.active && `opacity: 1;`}

  &:hover {
    opacity: 1;
  }
`;

const AddButton = styled(ImageButton)`
  background: url('${AddIcon}') no-repeat center;
`;

const SearchButton = styled(ImageButton)`
  background: url('${SearchIcon}') no-repeat center;
`;

export default function ActionList({ mode }: { mode: InputMode }): JSX.Element {
  const dispatch = useTodoDispatch();

  function handleClick(e: MouseEvent<HTMLButtonElement>): void {
    dispatch({ type: ActionType.ToggleMode, payload: e.currentTarget.value });
  }

  return (
    <StyledList>
      <ActionItem>
        <AddButton
          onClick={handleClick}
          active={mode === InputMode.Add}
          value={InputMode.Add}
          aria-label="Create Mode"
          data-testid="action-add"
        />
      </ActionItem>
      <ActionItem>
        <SearchButton
          onClick={handleClick}
          active={mode === InputMode.Search}
          value={InputMode.Search}
          aria-label="Search Mode"
          data-testid="action-search"
        />
      </ActionItem>
    </StyledList>
  );
}
