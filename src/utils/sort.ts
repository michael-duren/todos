import ToDo from '../models/todo';

export const orderByDate = (todoList: ToDo[]): ToDo[] => {
  return [...todoList].sort((a, b) => {
    const dateA = new Date(a.dateDue);
    const dateB = new Date(b.dateDue);

    return dateA.getTime() - dateB.getTime();
  });
};

export const orderByPriority = (todoList: ToDo[]): ToDo[] => {
  return [...todoList].sort((a, b) => {
    const priorityA =
      a.priority.toLowerCase() === 'high'
        ? 1
        : a.priority.toLowerCase() === 'medium'
        ? 2
        : 3;
    const priorityB =
      b.priority.toLowerCase() === 'high'
        ? 1
        : b.priority.toLowerCase() === 'medium'
        ? 2
        : 3;

    return priorityA < priorityB ? -1 : priorityA > priorityB ? 1 : 0;
  });
};

export const orderByCategory = (todoList: ToDo[]): ToDo[] => {
  return [...todoList].sort((a, b) => a.category.localeCompare(b.category));
};

export const sortBy = (
  sortOption: 'Due Date' | 'Priority' | 'Category',
  todoList: ToDo[]
): ToDo[] => {
  switch (sortOption) {
    case 'Priority':
      return orderByPriority(todoList);
    case 'Category':
      return orderByCategory(todoList);
    default:
      return orderByDate(todoList);
  }
};
