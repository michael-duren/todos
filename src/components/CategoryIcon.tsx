import { Category } from '../models/category';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import { toTitleCase } from '../utils/toTitleCase';

interface Props {
  category: Category;
  styles?: string;
}

export default function CategoryIcon({ category, styles }: Props) {
  switch (toTitleCase(category)) {
    case Category.WORK:
      return <WorkOutlineIcon className={` ${styles} `} />;
    case Category.SCHOOL:
      return <SchoolOutlinedIcon className={` ${styles} `} />;
    case Category.PERSONAL:
      return <PersonOutlineOutlinedIcon className={` ${styles} `} />;
    case Category.HEALTH:
      return <FavoriteBorderOutlinedIcon className={` ${styles} `} />;
    case Category.HOME:
      return <CottageOutlinedIcon className={` ${styles} `} />;
    case Category.FAMILY:
      return <Diversity3OutlinedIcon className={` ${styles} `} />;
    case Category.EXERCISE:
      return <DirectionsRunOutlinedIcon className={` ${styles} `} />;
    default:
      return <WorkOutlineIcon className={` ${styles} `} />;
  }
}
