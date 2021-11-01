import type { DataItem } from './todo';

export enum FilterMode {
  All = 'all',
  Active = 'active',
  Done = 'done',
}

export function filter(items: DataItem[], filterMode: FilterMode): DataItem[] {
  if (filterMode === FilterMode.Done) {
    return items.filter((item) => item.done);
  }

  if (filterMode === FilterMode.Active) {
    return items.filter((item) => !item.done);
  }

  return [...items];
}

export function search(items: DataItem[], query: string): DataItem[] {
  const queryString = query.toLowerCase();
  if (query === '') {
    return [...items];
  }

  return items.filter((item) => item.text.toLowerCase().includes(queryString));
}
