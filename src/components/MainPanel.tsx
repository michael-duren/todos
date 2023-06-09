import { useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import ToDoCardUnComplete from './ToDoCardUnComplete';
import Listbox from './Listbox';
import { sortBy } from '../utils/sort';

export default function MainPanel() {
  const { unCompleteToDoList } = useContext(GeneralContext) as IGeneralContext;
  const [orderBy, setOrderBy] = useState<'Due Date' | 'Priority' | 'Category'>(
    'Due Date'
  );
  const orderOptions = ['Due Date', 'Priority', 'Category'];
  const sortedTodos = sortBy(orderBy, unCompleteToDoList);
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
