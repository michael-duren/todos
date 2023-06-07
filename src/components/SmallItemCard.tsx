import ToDo from '../models/todo';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Props {
  todo: ToDo;
}

export default function SmallItemCard({ todo }: Props) {
  const {
    name,
    priority,
    description,
    dateCreated,
    dateDue,
    image,
    isCompleted,
    category,
  } = todo;

  const buttonStyle =
    priority.toLowerCase() === 'high'
      ? 'bg-red-500 text-white'
      : priority.toLowerCase() === 'medium'
      ? 'bg-orange-500 text-white'
      : 'bg-white text-black';

  return (
    <div className="flex my-8 items-center border-2 p-2 rounded-xl">
      <button className="group w-20 flex items-center">
        <PanoramaFishEyeIcon
          className={`group-hover:hidden rounded-full bg-opacity-70 hover:bg-opacity-100 ${buttonStyle}`}
        />
        <CheckCircleOutlineIcon
          className={`group-hover:visible invisible rounded-full bg-opacity-70 hover:bg-opacity-100 ${buttonStyle}`}
        />
      </button>
      <h4 className="text-gray-700 hover:text-gray-900 cursor-pointer">
        {name}
      </h4>
    </div>
  );
}
