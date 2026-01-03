import React from 'react';
import { useTodos } from '../context/TodoContext';
import './TodoStats.css';

/**
 * Componente de estatísticas
 * Otimizado com React.memo
 */
const TodoStats = React.memo(() => {
  const { stats } = useTodos();

  const percentage = stats.total > 0
    ? Math.round((stats.completed / stats.total) * 100)
    : 0;

  return (
    <div className="todo-stats">
      <div className="stats-item">
        <span className="stats-label">Total:</span>
        <span className="stats-value">{stats.total}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">Concluídas:</span>
        <span className="stats-value stats-completed">{stats.completed}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">Pendentes:</span>
        <span className="stats-value stats-pending">{stats.pending}</span>
      </div>
      <div className="stats-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="progress-text">{percentage}% concluído</span>
      </div>
    </div>
  );
});

TodoStats.displayName = 'TodoStats';

export default TodoStats;
