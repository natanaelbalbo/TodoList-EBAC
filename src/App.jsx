import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import VitrineProdutos from './components/VitrineProdutos';
import './App.css';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import userState from './state/user';

/**
 * Componente principal da aplicação
 */
function App() {
  // State para alternar entre TodoList e Vitrine de Produtos
  const usuario = useRecoilValue(userState);

  const [mostrarVitrine, setMostrarVitrine] = useState(true);

  return (
    <>
      {/* Botão para alternar entre as views */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        gap: '10px'
      }}>
        <button
          onClick={() => setMostrarVitrine(false)}
          style={{
            padding: '12px 24px',
            backgroundColor: !mostrarVitrine ? '#667eea' : '#fff',
            color: !mostrarVitrine ? '#fff' : '#333',
            border: '2px solid #667eea',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
        >
          📝 Todo List
        </button>
        <button
          onClick={() => setMostrarVitrine(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: mostrarVitrine ? '#667eea' : '#fff',
            color: mostrarVitrine ? '#fff' : '#333',
            border: '2px solid #667eea',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
        >
          🛍️ Vitrine Produtos
        </button>
      </div>

      {/* Renderiza a view selecionada */}
      {mostrarVitrine ? (
        <VitrineProdutos />
      ) : (
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
      )}
    </>
  );
}

export default App;
