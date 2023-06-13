import { useContext, useEffect, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import ToDoCardComplete from '../cards/ToDoCardComplete';
import ListSelection from '../ui/ListSelection';
import { filterByDate } from '../../utils/filterByDate';

export default function AvatarPanel() {
  const {
    completeToDoList,
    setFilteredCompleteToDoList,
    filteredCompleteToDoList,
    darkMode,
  } = useContext(GeneralContext) as IGeneralContext;
  type OrderBy = 'Today' | 'Week' | 'Month' | 'Year';
  const [orderBy, setOrderBy] = useState<OrderBy>('Today');
  const orderOptions: OrderBy[] = ['Today', 'Week', 'Month', 'Year'];

  useEffect(() => {
    setFilteredCompleteToDoList(
      completeToDoList.filter((toDo) => filterByDate(toDo, orderBy))
    );
  }, [orderBy]);

  return (
    <div
      className={`col-span-3 ${
        darkMode && 'animate-pulse temporary-bounce duration-300'
      }   flex justify-center`}
    >
      <div className="flex-col h-full w-full items-center justify-center">
        <div
          className={`flex ${
            darkMode && ' shadow-lg-white '
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
          <div className="flex mb-4 justify-between items-center">
            <h4 className="text-xl">Completed:</h4>
            <ListSelection
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              orderOptions={orderOptions}
            />
          </div>
          <div className="max-h-[50vh] overflow-y-scroll ">
            {filteredCompleteToDoList.map((todo) => {
              return (
                <div className="flex mr-2 flex-col items-center" key={todo.id}>
                  <ToDoCardComplete todo={todo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
