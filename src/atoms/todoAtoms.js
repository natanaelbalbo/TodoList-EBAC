import { atom } from 'recoil';

export const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending',
};

export const todoListState = atom({
  key: 'todoListState',
  default: JSON.parse(localStorage.getItem('todos')) || [],
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('todos', JSON.stringify(newValue));
      });
    },
  ],
});

export const filterState = atom({
  key: 'filterState',
  default: localStorage.getItem('filter') || FILTERS.ALL,
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('filter', newValue);
      });
    },
  ],
});
