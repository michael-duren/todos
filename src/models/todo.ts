import { Category } from './category';
import { Priority } from './priority';

export default interface ToDo {
  name: string;
  image: string;
  dateCreated: Date;
  dateDue: Date;
  description: string;
  isCompleted: boolean;
  priority: Priority;
  category: Category;
}

export interface FormToDo {
  name: string;
  image: string;
  dateCreated: string;
  dateDue: string;
  description: string;
  isCompleted: boolean;
  priority: string;
  category: string;
}
