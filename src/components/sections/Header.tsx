import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Dropdown from '../ui/Dropdown';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import Modal from '../ui/Modal';
import ToDoForm from '../forms/ToDoForm';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import dayjs from 'dayjs';

export default function Header() {
  const {
    isModalOpen,
    setIsModalOpen,
    setLateView,
    lateView,
    darkMode,
    setDarkMode,
  } = useContext(GeneralContext) as IGeneralContext;

  const dropDownOptions = [
    {
      option: 'Add Todo',
      onClick: () => setIsModalOpen(!isModalOpen),
      ItemIcon: AddCircleOutlineOutlinedIcon,
    },
    {
      option: 'Toggle Late View',
      onClick: () => setLateView(!lateView),
      ItemIcon: lateView ? RadioButtonCheckedIcon : RadioButtonUncheckedIcon,
    },
    {
      option: darkMode ? 'Light Mode' : 'Dark Mode',
      onClick: () => setDarkMode(!darkMode),
      ItemIcon: darkMode ? DarkModeOutlinedIcon : DarkModeIcon,
    },
  ];

  return (
    <>
      <header
        className={`${
          !darkMode && 'border-b-2'
        } flex items-center justify-between pb-4`}
      >
        <div className="flex gap-2 flex-col">
          <h1
            className={`text-3xl ${
              darkMode && 'text-white'
            } flex items-center justify-start`}
          >
            <span>
              <AssignmentTurnedInIcon fontSize="inherit" />
            </span>
            Todos
          </h1>
          <div className={`${darkMode ? 'text-white' : ''} text-sm`}>
            {dayjs(new Date()).format('dddd, MMMM D, YYYY')}
          </div>
        </div>
        <Dropdown invert={false} title="Actions" items={dropDownOptions} />
      </header>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ToDoForm setIsModalOpen={setIsModalOpen} isEdit={false} />
      </Modal>
    </>
  );
}
