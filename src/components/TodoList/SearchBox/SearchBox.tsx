import type { ChangeEvent } from 'react';
import { ActionType, useTodoDispatch } from '../../../context/todo';
import { StyledInput } from '../InputBox';

export default function SearchBox({ query }: { query: string }): JSX.Element {
  const dispatch = useTodoDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    dispatch({ type: ActionType.SearchItem, payload: value });
  }

  return <StyledInput placeholder="Search" value={query} onChange={handleChange} />;
}
