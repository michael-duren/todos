import { toTitleCase } from '../../utils/toTitleCase';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CategoryIcon from '../ui/CategoryIcon';
import dayjs from 'dayjs';
import ToDo from '../../models/todo';
import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';

export default function ToDoCardComplete({ todo }: { todo: ToDo }) {
  const { darkMode } = useContext(GeneralContext) as IGeneralContext;
  const { id, name, category, dateCompleted } = todo;
  return (
    <div
      key={id}
      className={`w-72  my-4 ${
        !darkMode ? 'bg-white' : 'bg-gray-600'
      }  shadow-sm p-4 rounded-xl`}
    >
      <div className={`flex  justify-between mb-2 items-center  `}>
        <div className="flex">
          <div className="flex items-center gap-2">
            <CheckOutlinedIcon
              fontSize="small"
              className="text-white p-1 bg-green-500 rounded-full"
            />
            <h4
              className={` text-sm font-semibold hover:font-bold cursor-pointer ${
                !darkMode
                  ? 'text-gray-700  hover:text-gray-900 '
                  : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              {toTitleCase(name)}
            </h4>
          </div>
        </div>
        <CategoryIcon
          category={category}
          styles={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
        />
      </div>
      <p className="text-[0.7rem] font-light text-right">
        Completed on {dayjs(dateCompleted).format('MM/DD/YYYY')}
      </p>
    </div>
  );
}
