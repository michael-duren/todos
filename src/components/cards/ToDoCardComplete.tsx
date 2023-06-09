import { toTitleCase } from '../../utils/toTitleCase';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CategoryIcon from '../ui/CategoryIcon';
import dayjs from 'dayjs';
import ToDo from '../../models/todo';

export default function ToDoCardComplete({ todo }: { todo: ToDo }) {
  const { id, name, category, dateCompleted } = todo;
  return (
    <div key={id} className="w-64 my-8 bg-white shadow-sm p-4 rounded-xl">
      <div className={`flex  justify-between mb-2 items-center  `}>
        <div className="flex">
          <div className="flex items-center gap-2">
            <CheckOutlinedIcon
              fontSize="small"
              className="text-white p-1 bg-green-500 rounded-full"
            />
            <h4 className="text-gray-700 text-sm font-semibold hover:text-gray-900 hover:font-bold cursor-pointer">
              {toTitleCase(name)}
            </h4>
          </div>
        </div>
        <CategoryIcon category={category} styles="text-gray-500" />
      </div>
      <p className="text-[0.7rem] font-light text-right">
        Completed on {dayjs(dateCompleted).format('MM/DD/YYYY')}
      </p>
    </div>
  );
}
