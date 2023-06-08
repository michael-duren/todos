import ToDo from '../models/todo';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { toTitleCase } from '../utils/toTitleCase';
import CategoryIcon from './CategoryIcon';
import { isItemDue } from '../utils/isItemDo';
import dayjs from 'dayjs';
import realtiveTime from 'dayjs/plugin/relativeTime';
dayjs.extend(realtiveTime);

interface Props {
  todo: ToDo;
}

export default function SmallItemCard({ todo }: Props) {
  const { name, priority, dateDue, isCompleted, category } = todo;

  const buttonStyle =
    priority.toLowerCase() === 'high'
      ? 'bg-red-500 text-white'
      : priority.toLowerCase() === 'medium'
      ? 'bg-orange-500 text-white'
      : 'bg-blue-500 text-white';
  const itemUrgency = isItemDue(new Date(dateDue))
    ? 'bg-red-500 bg-opacity-20'
    : 'bg-white';

  return (
    <>
      {!isCompleted && (
        <div
          className={`flex ${itemUrgency} my-8 justify-between items-center border-2 p-4 rounded-xl`}
        >
          <div className="flex">
            <button className="group w-20 flex items-center">
              <PanoramaFishEyeIcon
                className={`group-hover:hidden rounded-full bg-opacity-70 hover:bg-opacity-100 ${buttonStyle}`}
              />
              <CheckCircleOutlineIcon
                className={`group-hover:visible invisible rounded-full bg-opacity-70 hover:bg-opacity-100 ${buttonStyle}`}
              />
            </button>
            <h4 className="text-gray-700 font-semibold hover:text-gray-900 hover:font-bold cursor-pointer">
              {toTitleCase(name)}
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-sm">Due: {dayjs(dateDue).fromNow()}</div>
            <CategoryIcon category={category} styles="text-gray-500" />
          </div>
        </div>
      )}
    </>
  );
}
