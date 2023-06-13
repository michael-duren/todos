import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import { Priority } from '../../models/priority';

interface Props {
  priority: Priority;
  additionalStyles?: string;
}

export default function PriorityFlag({ priority, additionalStyles }: Props) {
  const buttonStyle =
    priority.toLowerCase() === 'high'
      ? 'text-red-500 '
      : priority.toLowerCase() === 'medium'
      ? 'text-orange-500 '
      : 'text-blue-500 ';

  return (
    <span>
      <SportsScoreOutlinedIcon
        className={`${buttonStyle} ${additionalStyles}`}
      />
    </span>
  );
}
