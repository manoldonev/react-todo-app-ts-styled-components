import { Key } from 'ts-key-enum';
import { ActionType, useTodoDispatch } from '../../context/todo';
import useKeyboardShortcut from '../../hooks/useKeyboardShortcut';
import InputMode from '../../services/mode';

export default function useTodoKeyboardShortcuts(): void {
  const dispatch = useTodoDispatch();
  const createModeKeys = [Key.Shift, 'A'];
  const searchModeKeys = [Key.Shift, 'S'];
  const noInputModeKeys = [Key.Escape];

  useKeyboardShortcut(createModeKeys, () =>
    dispatch({ type: ActionType.ToggleMode, payload: InputMode.Add.toString() }),
  );
  useKeyboardShortcut(searchModeKeys, () =>
    dispatch({ type: ActionType.ToggleMode, payload: InputMode.Search.toString() }),
  );
  useKeyboardShortcut(noInputModeKeys, () =>
    dispatch({ type: ActionType.ToggleMode, payload: InputMode.None.toString() }),
  );
}
