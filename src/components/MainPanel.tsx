import { useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import SmallItemCard from './SmallItemCard';
import Dropdown from './Dropdown';

export default function MainPanel() {
  const { unCompleteToDoList: todoList } = useContext(
    GeneralContext
  ) as IGeneralContext;
  const [orderBy, setOrderBy] = useState<'dueDate' | 'priority'>('dueDate');

  const dropdownOptions = [
    {
      option: 'Due Date',
      onClick: () => setOrderBy('dueDate'),
      ItemIcon: null,
      additonalStyles: `${orderBy === 'dueDate' ? 'text-red-900' : 'false'}`,
    },
    {
      option: 'Priority',
      onClick: () => setOrderBy('priority'),
      ItemIcon: null,
      additonalStyles: `${orderBy === 'priority' ? 'text-gray-200' : 'false'}`,
    },
  ];

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

    if (priorityA < priorityB) {
      return -1;
    }

    if (priorityA > priorityB) {
      return 1;
    }

    return 0;
  });
  console.log(orderBy);

  return (
    <div className="col-span-6 flex justify-center">
      <div className="h-full w-full">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl">To Do:</h2>
          </div>
          <Dropdown invert title="Order By" items={dropdownOptions} />
        </div>
        <ul>
          {orderBy === 'dueDate'
            ? orderedByDate.map((todo) => {
                return (
                  <li key={todo.id}>
                    <SmallItemCard todo={todo} />
                  </li>
                );
              })
            : orderByPriority.map((todo) => {
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
