import { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Criação do Context
const TodoContext = createContext();

// Filtros disponíveis
export const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending'
};

/**
 * Provider do contexto de Todos
 */
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useLocalStorage('filter', FILTERS.ALL);

  // Adicionar nova tarefa
  const addTodo = useCallback((text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, [setTodos]);

  // Alternar status de conclusão
  const toggleTodo = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [setTodos]);

  // Remover tarefa
  const removeTodo = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, [setTodos]);

  // Filtrar tarefas com memoização
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case FILTERS.COMPLETED:
        return todos.filter(todo => todo.completed);
      case FILTERS.PENDING:
        return todos.filter(todo => !todo.completed);
      case FILTERS.ALL:
      default:
        return todos;
    }
  }, [todos, filter]);

  // Estatísticas com memoização
  const stats = useMemo(() => ({
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length
  }), [todos]);

  // Valor do contexto com memoização
  const value = useMemo(() => ({
    todos,
    filteredTodos,
    filter,
    stats,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter
  }), [todos, filteredTodos, filter, stats, addTodo, toggleTodo, removeTodo, setFilter]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

/**
 * Hook customizado para acessar o contexto de Todos
 */
export const useTodos = () => {
  const context = useContext(TodoContext);
  
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um TodoProvider');
  }
  
  return context;
};
