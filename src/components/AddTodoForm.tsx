import CloseIcon from '@mui/icons-material/Close';
import { Category } from '../models/category';
import { Fragment, useContext, useState } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import { Priority } from '../models/priority';
import { FormToDo } from '../models/todo';

export default function AddTodoForm() {
  const initialState: FormToDo = {
    name: '',
    image: '',
    dateCreated: '',
    dateDue: '',
    description: '',
    isCompleted: false,
    priority: '',
    category: '',
  };
  const [formData, setFormData] = useState(initialState);
  const { setIsModalOpen } = useContext(GeneralContext) as IGeneralContext;

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newToDo = { ...formData, dateCreated: new Date() };

    console.log(newToDo);
  };

  const inputs = [
    { placeholder: 'Name', name: 'name' },
    { placeholder: 'ImageURL', name: 'image' },
    { placeholder: 'Description', name: 'description' },
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
              <label key={input.name} htmlFor="input.name">
                {input.placeholder}
              </label>
              <input
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
        <label htmlFor="date">Due Date</label>
        <input
          name="dateDue"
          onChange={onChange}
          className=" my-4 p-2 border-2 rounded-xl"
          type="date"
        />
        <div className="grid my-4  gap-4 grid-cols-2">
          <div className="flex h-full gap-4 w-full flex-col">
            <label htmlFor="category">Category</label>
            <select onChange={onChange} name="category">
              {Object.entries(Category).map(([key, value]) => {
                return <option key={key}>{value}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <label htmlFor="priority">Priority</label>
            <select onChange={onChange} name="priority">
              {Object.entries(Priority).map(([key, priority]) => {
                return <option key={key}>{priority}</option>;
              })}
            </select>
          </div>
        </div>
        <button
          className="bg-black rounded-lg m-8 text-white p-2"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
