import { Popover, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import ToDo from '../../models/todo';
import dayjs from 'dayjs';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';

interface Props {
  children: React.ReactNode;
  todo: ToDo;
}

export default function TodoPopdown({ children, todo }: Props) {
  const { darkMode } = useContext(GeneralContext) as IGeneralContext;
  const { name, description, dateCompleted } = todo;
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className={`${open ? '' : 'text-opacity-90'} w-full`}>
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
                  darkMode ? 'bg-gray-400' : 'bg-white'
                } rounded-xl p-4 text-black`}
              >
                <div>{name}</div>
                <p className="text-[0.7rem] font-light text-right">
                  Completed on {dayjs(dateCompleted).format('MM/DD/YYYY')}
                </p>
                <p className="text-xs mt-2">{description}</p>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
