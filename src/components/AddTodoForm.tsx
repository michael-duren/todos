import CloseIcon from '@mui/icons-material/Close';
import { Category } from '../models/category';
import { Fragment, useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import { Priority } from '../models/priority';
import { FormToDo } from '../models/todo';
import agent from '../api/agent';
import { toast } from 'react-hot-toast';

export default function AddTodoForm() {
  const initialState: FormToDo = {
    name: '',
    image: '',
    dateCreated: '',
    dateDue: '',
    description: '',
    isCompleted: false,
    priority: Priority.HIGH,
    category: Category.WORK,
  };
  const [formData, setFormData] = useState(initialState);
  const { setIsModalOpen, setUnCompleteToDoList, setSelectedTodo } = useContext(
    GeneralContext
  ) as IGeneralContext;

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newToDo = { ...formData, dateCreated: new Date().toISOString() };
    setFormData(initialState);
    setIsModalOpen(false);

    try {
      await agent.TodoItems.create(newToDo);
      const newToDos = await agent.TodoItems.listUnComplete();
      setUnCompleteToDoList(newToDos);
      setSelectedTodo(newToDos[0]);
      toast.success('ToDo added successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error adding ToDo');
    }
  };

  const inputs = [
    { placeholder: 'Name', name: 'name' },
    { placeholder: 'ImageURL', name: 'image' },
  ];

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col gap-4">
      <div className="flex my-4 justify-between">
        <h3 className="text-xl">Add ToDo</h3>
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-gray-600 hover:text-gray-900"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex mx-8 flex-col">
        {inputs.map((input) => {
          const key = input.name as keyof FormToDo;
          const value = formData[key];

          return (
            <Fragment key={input.name}>
              <label key={input.name} htmlFor={input.name}>
                {input.placeholder}
              </label>
              <input
                required
                onChange={onChange}
                value={value.toString()}
                type="text"
                className="my-4 p-2 border-2 rounded-xl"
                placeholder={input.placeholder}
                name={input.name}
              />
            </Fragment>
          );
        })}
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
          value={formData.dateDue}
        />
        <div className="grid my-4  gap-4 grid-cols-2">
          <div className="flex h-full gap-4 w-full flex-col">
            <label htmlFor="category">Category</label>
            <select
              value={formData.category}
              onChange={onChange}
              name="category"
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
          Add
        </button>
      </div>
    </form>
  );
}
