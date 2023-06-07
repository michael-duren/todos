import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function Header() {
  return (
    <header className="border-b-2 pb-4">
      <h2 className="text-3xl flex items-center justify-end">
        <span>
          <AssignmentTurnedInIcon fontSize="inherit" />
        </span>
        Todo
      </h2>
    </header>
  );
}
