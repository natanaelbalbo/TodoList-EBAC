import React from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import './TodoList.css';

/**
 * Componente da lista de tarefas
 * Otimizado com React.memo
 */
const TodoList = React.memo(() => {
  const { filteredTodos, toggleTodo, removeTodo } = useTodos();

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa encontrada</p>
        <p className="empty-state-subtitle">Adicione uma nova tarefa para começar!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </ul>
  );
});

TodoList.displayName = 'TodoList';

export default TodoList;
