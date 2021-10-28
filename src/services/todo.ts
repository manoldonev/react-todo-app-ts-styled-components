export interface DataItem {
  id: string;
  text: string;
  done: boolean;
}

export function getAll(): DataItem[] {
  return [
    {
      id: '1',
      text: 'Learn JavaScript',
      done: true,
    },
    {
      id: '2',
      text: 'Learn React',
      done: false,
    },
    {
      id: '3',
      text: 'Build a React app',
      done: false,
    },
  ];
}

export function createNew({ id, text }: { id: string; text: string }): DataItem {
  return { id, text, done: false };
}
