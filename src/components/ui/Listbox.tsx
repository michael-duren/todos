import { Fragment, useContext } from 'react';
import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import CheckIcon from '@mui/icons-material/Check';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';

interface Props {
  orderBy: string;
  setOrderBy: (value: 'Due Date' | 'Priority') => void;
  orderOptions: string[];
}

export default function Example({ orderBy, setOrderBy, orderOptions }: Props) {
  const { darkMode } = useContext(GeneralContext) as IGeneralContext;

  return (
    <Listbox value={orderBy} onChange={setOrderBy}>
      <div className="w-32 relative mt-1">
        <Listbox.Button
          className={`relative w-full cursor-default rounded-lg ${
            darkMode ? 'bg-none text-white' : 'bg-white'
          }  py-2 pl-3 pr-10 text-left shadow-md 
          focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white
          focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm`}
        >
          <span className="block truncate">{orderBy}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <UnfoldMoreIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md ${
              darkMode && 'bg-opacity-80'
            } bg-white
             py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
          >
            {orderOptions.map((option) => (
              <Listbox.Option
                key={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${darkMode && 'opacity-80'} ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute text-lg inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        <CheckIcon fontSize="inherit" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
