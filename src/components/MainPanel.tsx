import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import SmallItemCard from './SmallItemCard';
import Dropdown from './Dropdown';

export default function MainPanel() {
  const { todoList } = useContext(GeneralContext) as IGeneralContext;

  const dropdownOptions = [
    {
      option: 'Due Date',
      onClick: () => console.log('Due Date'),
      ItemIcon: null,
    },
    {
      option: 'Priority',
      onClick: () => console.log('Priority'),
      ItemIcon: null,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl">To Do:</h2>
        </div>
        <Dropdown invert title="Order By" items={dropdownOptions} />
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <SmallItemCard todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
