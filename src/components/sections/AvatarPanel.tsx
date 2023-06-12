import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import ToDoCardComplete from '../cards/ToDoCardComplete';

export default function AvatarPanel() {
  const { completeToDoList, darkMode } = useContext(
    GeneralContext
  ) as IGeneralContext;

  return (
    <div className="col-span-3  flex justify-center">
      <div className="flex-col h-full w-full items-center justify-center">
        <div
          className={`flex ${
            darkMode &&
            ' shadow-lg-white animate-pulse temporary-bounce duration-300'
          } mx-8 justify-start gap-4 p-2 rounded-xl items-center`}
        >
          <img
            className="h-20 w-20 rounded-full"
            src="src/assets/Avatar-self.png"
            alt="user avatar"
          />
          <h3 className={`text-lg ${darkMode && 'text-white'}`}>
            Michael Duren
          </h3>
        </div>
        <div
          className={`m-8 2 rounded-xl ${
            !darkMode
              ? ' bg-gray-50  shadow-lg'
              : '  text-white shadow-lg-white'
          }  p-4 `}
        >
          <h4 className="text-xl">Completed:</h4>
          {completeToDoList.map((todo) => {
            return (
              <div className="flex flex-col items-center" key={todo.id}>
                <ToDoCardComplete todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
