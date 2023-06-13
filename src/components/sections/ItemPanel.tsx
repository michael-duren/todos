import { useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import { toTitleCase } from '../../utils/toTitleCase';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import dayjs from 'dayjs';
import { isItemDue } from '../../utils/isItemDo';
import agent from '../../api/agent';
import { toast } from 'react-hot-toast';
import Modal from '../ui/Modal';
import ToDoForm from '../forms/ToDoForm';
import PriorityFlag from '../ui/PriorityFlag';

export default function ItemPanel() {
  const {
    selectedTodo,
    setSelectedTodo,
    setUnCompleteToDoList,
    setCompleteToDoList,
    darkMode,
  } = useContext(GeneralContext) as IGeneralContext;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onComplete = async () => {
    try {
      const completedTodo = { ...selectedTodo! };
      await agent.TodoItems.complete(completedTodo, completedTodo.id);
      toast.success(`${selectedTodo?.name} Completed`);
      setSelectedTodo(null);
      const newTodoItems = await agent.TodoItems.listUnComplete();
      const completeToDoItems = await agent.TodoItems.listComplete();
      setCompleteToDoList(completeToDoItems);
      setUnCompleteToDoList(newTodoItems);
    } catch (error) {
      console.log(error);
      toast.error('Problem completing item');
    }
  };

  const onDelete = async () => {
    try {
      await agent.TodoItems.delete(selectedTodo!.id);
      toast.success(`${selectedTodo?.name} Deleted`);
      setSelectedTodo(null);
      const newTodoItems = await agent.TodoItems.listUnComplete();
      setUnCompleteToDoList(newTodoItems);
    } catch (error) {
      console.log(error);
      toast.error('Problem deleting item');
    }
  };

  return (
    <>
      <div className="col-span-3   flex justify-center">
        {selectedTodo && (
          <div
            className={`flex flex-col ${
              darkMode ? ' shadow-xl-white ' : ''
            } items-center shadow-lg m-2 p-2 rounded-xl`}
          >
            {/* INFO */}
            <div className="h-full flex flex-col items-center text-gray-700 m-8 w-full">
              <img
                className="rounded-xl w-60 h-60 object-contain"
                src={selectedTodo.image}
                alt={selectedTodo.name}
              />
              <div className="flex flex-col w-[15rem]  gap-4 p-2">
                {/* Title */}
                <div>
                  <h2 className="text-xl  items-center flex justify-between">
                    <span
                      className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      } `}
                    >
                      {toTitleCase(selectedTodo?.name)}
                    </span>
                    <PriorityFlag priority={selectedTodo.priority} />
                  </h2>
                  {isItemDue(new Date(selectedTodo.dateDue)) && (
                    <div className="text-red-500 text-sm">Past Due</div>
                  )}
                </div>
                {/* Details */}
                <div
                  className={`flex mx-1 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  } justify-between`}
                >
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
                  <div className={`${darkMode ? 'text-gray-400' : ''} mb-1`}>
                    Description:
                  </div>
                  <div
                    className={`text-xs ${
                      darkMode ? 'text-gray-400' : ' text-gray-500'
                    }`}
                  >
                    {selectedTodo.description}
                  </div>
                </div>
              </div>
            </div>
            {/* ACTIONS */}
            <div className=" w-full p-2 flex items-center justify-evenly">
              <button
                onClick={onComplete}
                className="bg-green-500 shadow-lg transition-all duration-300 active:scale-105 text-xs text-white px-4 py-2 
            hover:bg-opacity-100 bg-opacity-80 rounded-xl"
              >
                <CheckOutlinedIcon fontSize="small" />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 shadow-lg transition-all duration-300 active:scale-105 text-xs hover:bg-opacity-100 
            bg-opacity-80 text-white px-4 py-2 rounded-xl"
              >
                <EditOutlinedIcon fontSize="small" />
              </button>
              <button
                onClick={onDelete}
                className="bg-red-500 text-xs transition-all duration-300 shadow-lg active:scale-105 
            hover:bg-opacity-100 bg-opacity-80 text-white px-4 py-2 rounded-xl"
              >
                <DeleteOutlineOutlinedIcon fontSize="small" />
              </button>
            </div>
          </div>
        )}
      </div>
      {selectedTodo && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <ToDoForm
            setIsModalOpen={setIsModalOpen}
            editedTodo={{
              ...selectedTodo,
              dateCreated: selectedTodo.dateCreated.toString(),
              dateDue: selectedTodo.dateDue.toString(),
            }}
            isEdit={true}
          />
        </Modal>
      )}
    </>
  );
}
