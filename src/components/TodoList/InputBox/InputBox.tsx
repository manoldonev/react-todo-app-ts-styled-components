import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { ActionType, useTodoDispatch } from '../../../context/todo';

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  display: block;
  width: 100%;
  height: 3.4rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
`;

export default function InputBox(): JSX.Element {
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.code === 'Enter') {
      dispatch({ type: ActionType.AddItem, payload: value.trim() });
      setValue('');
    }
  }

  // prettier-ignore
  return (
    <StyledInput
      placeholder="Add New"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
}
