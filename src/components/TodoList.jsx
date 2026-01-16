import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';
import { filteredTodoListState } from '../selectors/todoSelectors';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = React.memo(() => {
  const filteredTodos = useRecoilValue(filteredTodoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const toggleTodo = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa encontrada</p>
        <p className="empty-state-subtitle">
          Adicione uma nova tarefa para começar!
        </p>
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
