import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterState, FILTERS } from '../atoms/todoAtoms';
import { todoStatsState } from '../selectors/todoSelectors';
import './TodoFilter.css';

const TodoFilter = React.memo(() => {
  const [filter, setFilter] = useRecoilState(filterState);
  const stats = useRecoilValue(todoStatsState);

  const filterButtons = [
    { key: FILTERS.ALL, label: 'Todas', count: stats.total },
    { key: FILTERS.PENDING, label: 'Pendentes', count: stats.pending },
    { key: FILTERS.COMPLETED, label: 'Concluídas', count: stats.completed },
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
