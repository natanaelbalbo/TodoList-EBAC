import React from 'react';
import './TodoItem.css';

const TodoItem = React.memo(({ todo, onToggle, onRemove }) => {
  const handleToggle = () => onToggle(todo.id);
  const handleRemove = () => onRemove(todo.id);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`} className="todo-text">
          {todo.text}
        </label>
      </div>
      <button
        className="todo-button delete-button"
        onClick={handleRemove}
        aria-label="Remover tarefa"
      >
        ✕
      </button>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
