import ToDo from '../../models/todo';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { toTitleCase } from '../../utils/toTitleCase';
import CategoryIcon from '../ui/CategoryIcon';
import { isItemDue } from '../../utils/isItemDo';
import dayjs from 'dayjs';
import realtiveTime from 'dayjs/plugin/relativeTime';
import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import toast from 'react-hot-toast';
import agent from '../../api/agent';
dayjs.extend(realtiveTime);

interface Props {
  todo: ToDo;
}

export default function ToDoCardUnComplete({ todo }: Props) {
  const { darkMode } = useContext(GeneralContext) as IGeneralContext;
  const { name, priority, dateDue, category } = todo;
  const {
    unCompleteToDoList: todoList,
    setSelectedTodo,
    setUnCompleteToDoList,
    setCompleteToDoList,
    lateView,
  } = useContext(GeneralContext) as IGeneralContext;

  const selectItem = (id: number) => {
    const selectedItem = todoList.filter((item) => item.id === id);
    setSelectedTodo(selectedItem[0]);
  };

  const buttonStyle =
    priority.toLowerCase() === 'high'
      ? 'bg-red-500 text-white'
      : priority.toLowerCase() === 'medium'
      ? 'bg-orange-500 text-white'
      : 'bg-blue-500 text-white';

  const itemUrgencyLight =
    isItemDue(new Date(dateDue)) && lateView
      ? 'bg-red-500 bg-opacity-20'
      : 'bg-white';
  const itemUrgencyDark =
    isItemDue(new Date(dateDue)) && lateView
      ? 'bg-red-500 bg-opacity-60 shadow-lg-white'
      : 'bg-gray-600 shadow-lg-white';

  const onComplete = async () => {
    try {
      const completedTodo = { ...todo };
      await agent.TodoItems.complete(completedTodo, completedTodo.id);
      toast.success(`${toTitleCase(name)} Completed`);
      setSelectedTodo(null);
      const newTodoItems = await agent.TodoItems.listUnComplete();
      setUnCompleteToDoList(newTodoItems);
      const completeToDoItems = await agent.TodoItems.listComplete();
      setCompleteToDoList(completeToDoItems);
    } catch (error) {
      console.log(error);
      toast.error('Problem completing item');
    }
  };

  return (
    <>
      <div
        className={`flex ${
          darkMode ? itemUrgencyDark : itemUrgencyLight
        } my-8 shadow-lg justify-between items-center  p-4 rounded-xl`}
      >
        <div className="flex">
          <button onClick={onComplete} className="group w-20 flex items-center">
            <PanoramaFishEyeIcon
              className={`group-hover:hidden rounded-full bg-opacity-70 hover:bg-opacity-100 ${buttonStyle}`}
            />
            <CheckCircleOutlineIcon
              className={`group-hover:visible invisible rounded-full bg-opacity-70 hover:bg-opacity-100 ${buttonStyle}`}
            />
          </button>
          <h4
            onClick={() => selectItem(todo.id)}
            className={`${
              !darkMode
                ? 'text-gray-700 font-semibold hover:text-gray-900 hover:font-bold cursor-pointer'
                : 'text-gray-300 font-semibold hover:text-gray-100 hover:font-bold cursor-pointer'
            }`}
          >
            {toTitleCase(name)}
          </h4>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`${
              darkMode ? 'text-gray-300' : 'text-gray-500'
            } text-sm `}
          >
            <i>Due {dayjs(dateDue).fromNow()}</i>
          </div>
          <CategoryIcon
            category={category}
            styles={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
          />
        </div>
      </div>
    </>
  );
}
