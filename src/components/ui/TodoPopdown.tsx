import { Popover, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import ToDo from '../../models/todo';
import dayjs from 'dayjs';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import PriorityFlag from './PriorityFlag';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface Props {
  children: React.ReactNode;
  todo: ToDo;
}

export default function TodoPopdown({ children, todo }: Props) {
  const { darkMode } = useContext(GeneralContext) as IGeneralContext;
  const { name, description, dateCompleted, priority } = todo;
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={`${open ? '' : 'text-opacity-90'} outline-none w-full`}
          >
            {children}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="z-10 mt-3 w-full max-w-sm  px-4 sm:px-0 lg:max-w-3xl">
              <div
                className={` text-sm ${
                  darkMode ? 'bg-gray-400' : 'bg-gray-100'
                } rounded-xl p-4 text-black`}
              >
                <div className="flex  items-center justify-between">
                  <span>{name}</span>
                  <PriorityFlag priority={priority} />
                </div>
                <p className="text-[0.7rem] font-light">
                  Completed on {dayjs(dateCompleted).format('MM/DD/YYYY')}
                </p>
                <p className="text-xs mt-2">{description}</p>
                <div className="mt-4 flex justify-start gap-4 items-center">
                  <button
                    className="bg-orange-500 shadow-lg transition-all duration-300 active:scale-105 text-xs text-white px-2 py-2 h-8 
            hover:bg-opacity-100 bg-opacity-80 rounded-xl"
                  >
                    Undo
                  </button>
                  <button
                    className="bg-red-500 shadow-lg transition-all duration-300 active:scale-105 text-xs aspect-square items-center flex justify-center text-white px-2 py-2 h-8 
            hover:bg-opacity-100 bg-opacity-80 rounded-xl"
                  >
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
