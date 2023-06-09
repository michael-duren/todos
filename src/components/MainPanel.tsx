import { useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import SmallItemCard from './SmallItemCard';
import Listbox from './Listbox';

export default function MainPanel() {
  const { unCompleteToDoList: todoList } = useContext(
    GeneralContext
  ) as IGeneralContext;
  const [orderBy, setOrderBy] = useState<'Due Date' | 'Priority' | 'Category'>(
    'Due Date'
  );
  const orderOptions = ['Due Date', 'Priority', 'Category'];

  const orderedByDate = [...todoList].sort((a, b) => {
    const dateA = new Date(a.dateDue);
    const dateB = new Date(b.dateDue);

    return dateA.getTime() - dateB.getTime();
  });

  const orderByPriority = [...todoList].sort((a, b) => {
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

  const orderByCategory = [...todoList].sort((a, b) => {
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="col-span-6 flex justify-center">
      <div className="h-full w-full">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl">To Do:</h2>
          </div>
          <Listbox
            orderOptions={orderOptions}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </div>
        <ul>
          {orderBy === 'Due Date'
            ? orderedByDate.map((todo) => {
                return (
                  <li key={todo.id}>
                    <SmallItemCard todo={todo} />
                  </li>
                );
              })
            : orderBy === 'Priority'
            ? orderByPriority.map((todo) => {
                return (
                  <li key={todo.id}>
                    <SmallItemCard todo={todo} />
                  </li>
                );
              })
            : orderByCategory.map((todo) => {
                return (
                  <li key={todo.id}>
                    <SmallItemCard todo={todo} />
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
