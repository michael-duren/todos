import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Dropdown from './Dropdown';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function Header() {
  const dropDownOptions = [
    {
      option: 'Add Todo',
      onClick: () => console.log('Add Todo'),
      ItemIcon: AddCircleOutlineOutlinedIcon,
    },
  ];

  return (
    <header className="border-b-2 flex items-center justify-between pb-4">
      <h1 className="text-3xl flex items-center justify-end">
        <span>
          <AssignmentTurnedInIcon fontSize="inherit" />
        </span>
        Todos
      </h1>
      <Dropdown invert={false} title="Actions" items={dropDownOptions} />
    </header>
  );
}
