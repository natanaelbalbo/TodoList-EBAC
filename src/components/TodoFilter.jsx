import React from 'react';
import { useTodos, FILTERS } from '../context/TodoContext';
import './TodoFilter.css';

/**
 * Componente de filtros
 * Otimizado com React.memo
 */
const TodoFilter = React.memo(() => {
  const { filter, setFilter, stats } = useTodos();

  const filterButtons = [
    { key: FILTERS.ALL, label: 'Todas', count: stats.total },
    { key: FILTERS.PENDING, label: 'Pendentes', count: stats.pending },
    { key: FILTERS.COMPLETED, label: 'Concluídas', count: stats.completed }
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filterButtons.map(({ key, label, count }) => (
          <button
            key={key}
            className={`filter-button ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label} <span className="filter-count">({count})</span>
          </button>
        ))}
      </div>
    </div>
  );
});

TodoFilter.displayName = 'TodoFilter';

export default TodoFilter;
