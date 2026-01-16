import { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

export const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending',
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useLocalStorage('filter', FILTERS.ALL);

  const addTodo = useCallback(
    (text) => {
      if (!text.trim()) return;

      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    },
    [setTodos],
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    },
    [setTodos],
  );

  const removeTodo = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed);
      case FILTERS.PENDING:
        return todos.filter((todo) => !todo.completed);
      case FILTERS.ALL:
      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = useMemo(
    () => ({
      total: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      pending: todos.filter((todo) => !todo.completed).length,
    }),
    [todos],
  );

  const value = useMemo(
    () => ({
      todos,
      filteredTodos,
      filter,
      stats,
      addTodo,
      toggleTodo,
      removeTodo,
      setFilter,
    }),
    [
      todos,
      filteredTodos,
      filter,
      stats,
      addTodo,
      toggleTodo,
      removeTodo,
      setFilter,
    ],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um TodoProvider');
  }

  return context;
};
