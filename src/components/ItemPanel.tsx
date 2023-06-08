import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import { toTitleCase } from '../utils/toTitleCase';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';

export default function ItemPanel() {
  const { selectedTodo } = useContext(GeneralContext) as IGeneralContext;

  const buttonStyle =
    (selectedTodo && selectedTodo.priority.toLowerCase()) === 'high'
      ? 'text-red-500 text-white'
      : (selectedTodo && selectedTodo.priority.toLowerCase()) === 'medium'
      ? 'text-orange-500 text-white'
      : 'text-blue-500 text-white';

  return (
    <>
      {selectedTodo && (
        <div className="h-full border-2 p-2 rounded-xl shadow-lg text-gray-700 m-8 w-full">
          <img
            className="rounded-xl"
            src={selectedTodo.image}
            alt={selectedTodo.name}
          />
          <div className="flex flex-col gap-4 p-2">
            <h2 className="text-xl items-center flex justify-between text-gray-900">
              <span>{toTitleCase(selectedTodo?.name)}</span>
              <span>
                <SportsScoreOutlinedIcon className={buttonStyle} />
              </span>
            </h2>
            <p className="text-sm">{selectedTodo.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
