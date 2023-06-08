import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Dropdown from './Dropdown';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import Modal from './Modal';
import ToDoForm from './ToDoForm';

export default function Header() {
  const { isModalOpen, setIsModalOpen } = useContext(
    GeneralContext
  ) as IGeneralContext;

  const dropDownOptions = [
    {
      option: 'Add Todo',
      onClick: () => setIsModalOpen(!isModalOpen),
      ItemIcon: AddCircleOutlineOutlinedIcon,
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
