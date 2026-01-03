import React from 'react';
import { useTodos } from '../context/TodoContext';
import { useInput } from '../hooks/useInput';
import './TodoForm.css';

/**
 * Componente de formulário para adicionar novas tarefas
 * Otimizado com React.memo para evitar renderizações desnecessárias
 */
const TodoForm = React.memo(() => {
  const { addTodo } = useTodos();
  const inputProps = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputProps.value);
    inputProps.reset();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Digite uma nova tarefa..."
        {...inputProps}
      />
      <button type="submit" className="todo-button add-button">
        Adicionar
      </button>
    </form>
  );
});

TodoForm.displayName = 'TodoForm';

export default TodoForm;
