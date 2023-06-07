import CloseIcon from '@mui/icons-material/Close';
import { Category } from '../models/category';
import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import { Priority } from '../models/priority';

export default function AddTodoForm() {
  const { setIsModalOpen } = useContext(GeneralContext) as IGeneralContext;

  const inputs = [
    { placeholder: 'Name', name: 'name' },
    { placeholder: 'ImageURL', name: 'image' },
    { placeholder: 'Description', name: 'description' },
  ];

  return (
    <form className="flex h-full flex-col gap-4">
      <div className="flex justify-between">
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
          return (
            <>
              <label htmlFor="input.name">{input.placeholder}</label>
              <input
                type="text"
                className="my-4 p-2 border-2 rounded-xl"
                placeholder={input.placeholder}
                name={input.name}
              />
            </>
          );
        })}
        <label htmlFor="date">Due Date</label>
        <input
          name="dueDate"
          className=" my-4 p-2 border-2 rounded-xl"
          type="date"
        />
        <div className="grid my-4  gap-4 grid-cols-2">
          <div className="flex h-full gap-4 w-full flex-col">
            <label htmlFor="category">Category</label>
            <select name="category">
              {Object.entries(Category).map(([key, value]) => {
                return (
                  <option key={key} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <label htmlFor="priority">Priority</label>
            <select name="priority">
              {Object.entries(Priority).map(([key, value]) => {
                return (
                  <option key={key} value="value">
                    {value}
                  </option>
                );
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
