import React, { useReducer } from 'react';
import produce from 'immer';
import { createNew, getAll } from '../services/todo';
import type { DataItem } from '../services/todo';
import { FilterMode } from '../services/filter';

interface Action {
  type: ActionType;
  payload: string;
}

interface TodoState {
  items: DataItem[];
  filter: FilterMode;
}

const enum ActionType {
  AddItem,
  SearchItem,
  ToggleItem,
  ToggleFilter,
  ToggleMode,
}

const TodoStateContext = React.createContext<TodoState | null>(null);
const TodoDispatchContext = React.createContext<React.Dispatch<Action> | null>(null);

function todoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case ActionType.AddItem: {
      const nextId = (state.items.length + 1).toString();

      return produce(state, (draft: TodoState) => {
        draft.items.push(createNew({ id: nextId, text: action.payload }));
      });
    }
    case ActionType.ToggleItem: {
      const itemId = action.payload;
      if (!itemId) {
        throw new Error(`${action.type}: item id not specified`);
      }

      return produce(state, (draft) => {
        const itemToToggle = draft.items.find((item) => item.id === itemId);
        if (itemToToggle == null) {
          throw new Error(`${action.type}: item with id ${itemId} not found`);
        }
        itemToToggle.done = !itemToToggle.done;
      });
    }
    case ActionType.ToggleFilter: {
      const filterKey = action.payload;
      if (!(filterKey in FilterMode)) {
        throw new Error(`${action.type}: filter ${filterKey} not found`);
      }

      return produce(state, (draft) => {
        draft.filter = FilterMode[filterKey as keyof typeof FilterMode];
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TodoProvider({
  children,
  reducer = todoReducer,
}: {
  children?: React.ReactNode;
  reducer?: (state: TodoState, action: Action) => TodoState;
}): JSX.Element {
  const items = getAll();
  const [state, dispatch] = useReducer(reducer, { items, filter: FilterMode.All });

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoState(): TodoState {
  const context = React.useContext(TodoStateContext);
  if (context == null) {
    throw new Error('useTodoState must be within a TodoProvider');
  }

  return context;
}

function useTodoDispatch(): React.Dispatch<Action> {
  const context = React.useContext(TodoDispatchContext);
  if (context == null) {
    throw new Error('useTodoDispatch must be within a TodoProvider');
  }

  return context;
}

export { TodoProvider, useTodoState, useTodoDispatch, todoReducer, ActionType };
