import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';
import { useInput } from '../hooks/useInput';
import './TodoForm.css';

/**
 * Componente de formulário para adicionar novas tarefas
 * Otimizado com React.memo para evitar renderizações desnecessárias
 */
const TodoForm = React.memo(() => {
  const setTodoList = useSetRecoilState(todoListState);
  const inputProps = useInput('');

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  };

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
