import type { DataItem } from './todo';

export enum FilterMode {
  All = 'all',
  Active = 'active',
  Done = 'done',
}

export function applyFilter(items: DataItem[], filter: FilterMode): DataItem[] {
  if (filter === FilterMode.Done) {
    return items.filter((item) => item.done);
  }

  if (filter === FilterMode.Active) {
    return items.filter((item) => !item.done);
  }

  return [...items];
}
