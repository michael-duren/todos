import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import SmallItemCard from './SmallItemCard';

export default function MainPanel() {
  const { todoList } = useContext(GeneralContext) as IGeneralContext;
  console.log(todoList);

  return (
    <div className="h-full w-full">
      <h2>Welcome Michael Duren</h2>
      <h3 className="text-2xl">To Do:</h3>
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
