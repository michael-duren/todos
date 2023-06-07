import { Categories } from './category';

export default interface ToDo {
  name: string;
  image: string;
  dateCreated: Date;
  dueDate: Date;
  description: string;
  isCompleted: boolean;
  priority: string;
  category: Categories;
}
