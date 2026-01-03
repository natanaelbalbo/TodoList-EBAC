import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import './App.css';

/**
 * Componente principal da aplicação
 */
function App() {
  return (
    <TodoProvider>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">📝 Todo List</h1>
          <p className="app-subtitle">
            Gerencie suas tarefas de forma eficiente
          </p>
        </header>

        <main className="app-content">
          <TodoForm />
          <TodoStats />
          <TodoFilter />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;
