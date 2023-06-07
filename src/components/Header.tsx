import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Dropdown from './Dropdown';

export default function Header() {
  return (
    <header className="border-b-2 flex items-center justify-between pb-4">
      <h1 className="text-3xl flex items-center justify-end">
        <span>
          <AssignmentTurnedInIcon fontSize="inherit" />
        </span>
        Todos
      </h1>
      <Dropdown />
    </header>
  );
}
