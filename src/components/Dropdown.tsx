import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface Item {
  option: string;
  onClick: () => void;
  ItemIcon:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      })
    | null;
}

interface DropdownProps {
  title: string;
  items: Item[];
  invert: boolean;
}

export default function Dropdown({ items, title, invert }: DropdownProps) {
  if (invert) {
    return (
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white   px-4 py-2 text-sm font-medium text-black hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
              {title}
              <ExpandMoreOutlinedIcon
                className="ml-2 -mr-1 h-5 w-5 text-gray-900 hover:text-gray-700"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map(({ option, onClick, ItemIcon }) => {
                return (
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={onClick}
                          className={`${
                            active
                              ? 'bg-gray-300 bg-opacity-50'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {ItemIcon !== null &&
                            (active ? (
                              <ItemIcon className="mr-1" />
                            ) : (
                              <ItemIcon className="mr-1" />
                            ))}
                          {option}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black   px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {title}
            <ExpandMoreOutlinedIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-100 hover:text-gray-300"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {items.map(({ option, onClick }) => {
              return (
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={onClick}
                        className={`${
                          active ? 'bg-gray-300 bg-opacity-50' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <AddCircleOutlinedIcon className="mr-1" />
                        ) : (
                          <AddCircleOutlineOutlinedIcon className="mr-1" />
                        )}
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
