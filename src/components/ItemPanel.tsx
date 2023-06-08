import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import { toTitleCase } from '../utils/toTitleCase';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import dayjs from 'dayjs';
import { isItemDue } from '../utils/isItemDo';

export default function ItemPanel() {
  const { selectedTodo } = useContext(GeneralContext) as IGeneralContext;

  const buttonStyle =
    (selectedTodo && selectedTodo.priority.toLowerCase()) === 'high'
      ? 'text-red-500 '
      : (selectedTodo && selectedTodo.priority.toLowerCase()) === 'medium'
      ? 'text-orange-500 '
      : 'text-blue-500 ';

  console.log(buttonStyle);

  return (
    <>
      {selectedTodo && (
        <div className="flex flex-col items-center shadow-lg m-2 p-2 rounded-xl">
          {/* INFO */}
          <div className="h-full flex flex-col items-center text-gray-700 m-8 w-full">
            <img
              className="rounded-xl w-60 h-60 object-contain"
              src={selectedTodo.image}
              alt={selectedTodo.name}
            />
            <div className="flex flex-col min-w-[15rem]  gap-4 p-2">
              {/* Title */}
              <div>
                <h2 className="text-xl  items-center flex justify-between">
                  <span className="text-gray-600">
                    {toTitleCase(selectedTodo?.name)}
                  </span>
                  <span>
                    <SportsScoreOutlinedIcon className={`${buttonStyle}`} />
                  </span>
                </h2>
                {isItemDue(new Date(selectedTodo.dateDue)) && (
                  <div className="text-red-500 text-sm">Past Due</div>
                )}
              </div>
              {/* Details */}
              <div className="flex mx-1 text-sm text-gray-500 justify-between">
                <div className="flex items-center gap-1">
                  <CalendarTodayIcon fontSize="small" />
                  <span>
                    {dayjs(selectedTodo.dateDue).format('ddd MMMM D')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CategoryOutlinedIcon fontSize="small" />
                  <span>{toTitleCase(selectedTodo.category)}</span>
                </div>
              </div>
              {/* Description */}
              <div className="text-sm">
                <div className="mb-1">Description:</div>
                <div className="text-xs text-gray-500">
                  {selectedTodo.description}
                </div>
              </div>
            </div>
          </div>
          {/* ACTIONS */}
          <div className=" w-full p-2 flex items-center justify-evenly">
            <button
              className="bg-green-500 shadow-lg transition-all duration-300 active:scale-105 text-xs text-white px-4 py-2 
            hover:bg-opacity-100 bg-opacity-80 rounded-xl"
            >
              <CheckOutlinedIcon fontSize="small" />
            </button>
            <button
              className="bg-blue-500 shadow-lg transition-all duration-300 active:scale-105 text-xs hover:bg-opacity-100 
            bg-opacity-80 text-white px-4 py-2 rounded-xl"
            >
              <EditOutlinedIcon fontSize="small" />
            </button>
            <button
              className="bg-red-500 text-xs transition-all duration-300 shadow-lg active:scale-105 
            hover:bg-opacity-100 bg-opacity-80 text-white px-4 py-2 rounded-xl"
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
