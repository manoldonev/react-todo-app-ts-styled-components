import styled from 'styled-components/macro';
import type { FilterMode } from '../../../services/filter';
import type InputMode from '../../../services/mode';
import ActionList from '../ActionList';
import Filter from '../Filter';

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  border-top: 0.1rem solid #ddd;
  background-color: #f4fce8;
  margin: 0 -2rem -1rem -2rem;
  padding: 0 2rem;
  color: #707070;
`;

const TextWrapper = styled.span`
  margin-right: auto;
`;

const Counter = styled.span`
  font-weight: bold;
`;

export default function Footer({
  count,
  filterMode,
  inputMode,
}: {
  count: number;
  filterMode: FilterMode;
  inputMode: InputMode;
}): JSX.Element {
  return (
    <StyledFooter>
      <ActionList mode={inputMode} />
      <TextWrapper>
        <Counter>{count}</Counter>
        {' items left'}
      </TextWrapper>
      <Filter mode={filterMode} />
    </StyledFooter>
  );
}
