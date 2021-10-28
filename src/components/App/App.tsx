import { TodoProvider } from '../../context/todo';
import TodoList from '../TodoList';

function App(): JSX.Element {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
