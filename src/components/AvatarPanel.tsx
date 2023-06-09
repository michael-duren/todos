import { Fragment, useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import ToDoCardComplete from './ToDoCardComplete';

export default function AvatarPanel() {
  const { completeToDoList } = useContext(GeneralContext) as IGeneralContext;

  return (
    <div className="col-span-3  flex justify-center">
      <div className="flex-col h-full w-full items-center justify-center">
        <div className="flex mx-8 justify-start gap-4 items-center">
          <img
            className="h-20 w-20 rounded-full"
            src="src/assets/Avatar-self.png"
            alt="user avatar"
          />
          <h3 className="text-lg">Michael Duren</h3>
        </div>
        <div className="m-8 rounded-xl bg-gray-50 shadow-lg p-4">
          <h4 className="text-xl">Completed:</h4>
          {completeToDoList.map((todo) => {
            return (
              <Fragment key={todo.id}>
                <ToDoCardComplete todo={todo} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
