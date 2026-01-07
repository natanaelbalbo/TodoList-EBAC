import { atom } from 'recoil';

// Filtros disponíveis
export const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending'
};

/**
 * Átomo para armazenar a lista de tarefas
 * Usa localStorage para persistência
 */
export const todoListState = atom({
  key: 'todoListState', // ID único do átomo
  default: JSON.parse(localStorage.getItem('todos')) || [], // Estado inicial
  effects: [
    // Effect para sincronizar com localStorage
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('todos', JSON.stringify(newValue));
      });
    }
  ]
});

/**
 * Átomo para armazenar o filtro atual
 * Usa localStorage para persistência
 */
export const filterState = atom({
  key: 'filterState',
  default: localStorage.getItem('filter') || FILTERS.ALL,
  effects: [
    // Effect para sincronizar com localStorage
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('filter', newValue);
      });
    }
  ]
});
