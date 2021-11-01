import InputMode from '../../../services/mode';
import InputBox from '../InputBox';
import SearchBox from '../SearchBox';

export default function InputToggle({ mode, query }: { mode: InputMode; query: string }): JSX.Element | null {
  switch (mode) {
    case InputMode.Add: {
      return <InputBox />;
    }
    case InputMode.Search: {
      return <SearchBox query={query} />;
    }
    default: {
      return null;
    }
  }
}
