import CloseIcon from '@mui/icons-material/Close';
import { Category } from '../../models/category';
import { useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import { Priority } from '../../models/priority';
import { EditFormToDo, FormToDo } from '../../models/todo';
import agent from '../../api/agent';
import { toast } from 'react-hot-toast';
import { toTitleCase } from '../../utils/toTitleCase';

interface Props {
  editedTodo?: EditFormToDo;
  isEdit: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToDoForm({
  editedTodo,
  isEdit,
  setIsModalOpen,
}: Props) {
  const initialState = editedTodo ?? {
    name: '',
    image: '',
    dateCreated: '',
    dateDue: '',
    description: '',
    isCompleted: false,
    priority: Priority.HIGH,
    category: Category.WORK,
  };
  const [formData, setFormData] = useState<FormToDo | EditFormToDo>(
    initialState
  );
  const { setUnCompleteToDoList, setSelectedTodo } = useContext(
    GeneralContext
  ) as IGeneralContext;

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isEdit) {
      const newToDo = { ...formData, dateCreated: new Date().toISOString() };
      if (newToDo.image === '') {
        newToDo.image =
          'https://www.easeus.com/images_2019/tb/free/2022/json1/images/img.png';
      }
      setFormData(initialState);
      setIsModalOpen(false);

      try {
        await agent.TodoItems.create(newToDo);
        const newToDos = await agent.TodoItems.listUnComplete();
        setUnCompleteToDoList(newToDos);
        const addedToDo = newToDos.filter(
          (todo) => newToDo.name === todo.name
        )[0];
        setSelectedTodo(addedToDo);
        toast.success('ToDo added successfully');
      } catch (error) {
        console.log(error);
        toast.error('Error adding ToDo');
      }
    }

    if (isEdit) {
      setIsModalOpen(false);
      try {
        await agent.TodoItems.edit(formData, editedTodo!.id);
        const newToDos = await agent.TodoItems.listUnComplete();
        setUnCompleteToDoList(newToDos);
        const updatedItem = newToDos.filter(
          (item) => item.id === editedTodo!.id
        )[0];
        setSelectedTodo(updatedItem);
        toast.success(`${toTitleCase(formData.name)} updated successfully`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col gap-4">
      <div className="flex my-4 justify-between">
        <h3 className="text-xl">{isEdit ? 'Edit ToDo' : 'Add ToDo'}</h3>
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-gray-600 hover:text-gray-900"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex mx-8 flex-col">
        <label htmlFor="Name">Name</label>
        <input
          required
          onChange={onChange}
          value={formData.name}
          type="text"
          className="my-4 p-2 border-2 rounded-xl"
          placeholder="Name"
          name="name"
        />
        <label htmlFor="ImageURL">ImageURL</label>
        <input
          onChange={onChange}
          value={formData.image}
          type="text"
          className="my-4 p-2 border-2 rounded-xl"
          placeholder="https://www.easeus.com/images_2019/tb/free/2022/json1/images/img.png"
          name="image"
        />
        <label htmlFor="description">Description</label>
        <textarea
          required
          className="border-2 text-sm my-2 rounded-xl p-2"
          name="description"
          onChange={onChange}
          cols={30}
          rows={5}
          placeholder="description"
          value={formData.description}
        ></textarea>
        <label htmlFor="date">Due Date</label>
        <input
          required
          name="dateDue"
          onChange={onChange}
          className=" my-4 p-2 border-2 rounded-xl"
          type="date"
          value={
            formData.dateDue ? formData.dateDue : new Date().toDateString()
          }
        />
        <div className="grid my-4  gap-4 grid-cols-2">
          <div className="flex h-full gap-4 w-full flex-col">
            <label htmlFor="category">Category</label>
            <select
              value={formData.category}
              onChange={onChange}
              name="category"
              className="p-2 rounded-xl"
            >
              {Object.entries(Category).map(([key, value]) => {
                return <option key={key}>{value}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <label htmlFor="priority">Priority</label>
            <select
              onChange={onChange}
              value={formData.priority}
              name="priority"
              className="p-2 rounded-xl"
            >
              {Object.entries(Priority).map(([key, priority]) => {
                return <option key={key}>{priority}</option>;
              })}
            </select>
          </div>
        </div>
        <button
          className="bg-gray-700 rounded-lg hover:bg-gray-900 active:scale-105 transition-all duration-300 m-8 text-white p-2"
          type="submit"
        >
          {isEdit ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
}
