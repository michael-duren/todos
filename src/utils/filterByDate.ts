import ToDo from '../models/todo';

type OrderBy = 'Today' | 'Week' | 'Month' | 'Year';

export const filterByDate = (todo: ToDo, orderBy: OrderBy) => {
  const today = new Date();
  const todoDate = new Date(todo.dateCompleted!);
  const week = new Date();
  week.setDate(today.getDate() + 7);
  const month = new Date();
  month.setDate(today.getDate() + 30);
  const year = new Date();
  year.setDate(today.getDate() + 365);

  switch (orderBy) {
    case 'Today':
      return todoDate.getDate() === today.getDate();
    case 'Week':
      return todoDate <= week;
    case 'Month':
      return todoDate <= month;
    case 'Year':
      return todoDate <= year;
  }
};
