import { useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import ToDoCardUnComplete from '../cards/ToDoCardUnComplete';
import Listbox from '../ui/Listbox';
import { sortBy } from '../../utils/sort';

export default function MainPanel() {
  const { unCompleteToDoList, darkMode } = useContext(
    GeneralContext
  ) as IGeneralContext;
  const [orderBy, setOrderBy] = useState<'Due Date' | 'Priority' | 'Category'>(
    'Due Date'
  );
  const orderOptions = ['Due Date', 'Priority', 'Category'];
  const sortedTodos = sortBy(orderBy, unCompleteToDoList);
  return (
    <div
      className={` col-span-6 ${
        darkMode
          ? 'animate-pulse temporary-bounce duration-300 shadow-lg-white'
          : ''
      }  flex justify-center p-4 rounded-xl`}
    >
      <div className="h-full  w-full">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`text-2xl ${darkMode ? 'text-white' : ''}`}>
              To Do:
            </h2>
          </div>
          <Listbox
            orderOptions={orderOptions}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        </div>
        <ul>
          {sortedTodos.map((todo) => {
            return (
              <li key={todo.id}>
                <ToDoCardUnComplete todo={todo} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
