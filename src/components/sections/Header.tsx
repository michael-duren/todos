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
      option: 'Dark Mode',
      onClick: () => setDarkMode(!darkMode),
      ItemIcon: DarkModeIcon,
    },
  ];

  return (
    <>
      <header className="border-b-2 flex items-center justify-between pb-4">
        <h1 className="text-3xl flex items-center justify-end">
          <span>
            <AssignmentTurnedInIcon fontSize="inherit" />
          </span>
          Todos
        </h1>
        <Dropdown invert={false} title="Actions" items={dropDownOptions} />
      </header>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ToDoForm setIsModalOpen={setIsModalOpen} isEdit={false} />
      </Modal>
    </>
  );
}
