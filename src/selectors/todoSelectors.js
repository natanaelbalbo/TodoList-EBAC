import { selector } from 'recoil';
import { todoListState, filterState, FILTERS } from '../atoms/todoAtoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTERS.COMPLETED:
        return list.filter((todo) => todo.completed);
      case FILTERS.PENDING:
        return list.filter((todo) => !todo.completed);
      case FILTERS.ALL:
      default:
        return list;
    }
  },
});

export const todoStatsState = selector({
  key: 'todoStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const completedNum = todoList.filter((todo) => todo.completed).length;
    const pendingNum = totalNum - completedNum;

    return {
      total: totalNum,
      completed: completedNum,
      pending: pendingNum,
    };
  },
});
