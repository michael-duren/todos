import axios, { AxiosResponse } from 'axios';
import ToDo, { EditFormToDo, FormToDo } from '../models/todo';

const getData = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(getData),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(getData),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(getData),
  del: <T>(url: string) => axios.delete<T>(url).then(getData),
};

const TodoItems = {
  listAll: () => requests.get<ToDo[]>('/api/todo'),
  listComplete: () => requests.get<ToDo[]>('/api/todo/complete'),
  listUnComplete: () => requests.get<ToDo[]>('/api/todo/uncomplete'),
  single: (id: string) => requests.get<ToDo>(`/api/todo/${id}`),
  create: (newItem: FormToDo) => requests.post<void>('/api/todo', newItem),
  edit: (newItem: EditFormToDo | FormToDo, id: number) =>
    requests.put<void>(`/api/todo/${id}`, newItem),
  complete: async (newItem: ToDo, id: number) => {
    newItem.isCompleted = true;
    newItem.dateCompleted = new Date();
    await requests.put<void>(`/api/todo/${id}`, newItem);
  },
  unComplete: async (newItem: ToDo, id: number) => {
    newItem.isCompleted = false;
    newItem.dateCompleted = null;
    await requests.put<void>(`/api/todo/${id}`, newItem);
  },
  delete: (id: number) => requests.del<void>(`/api/todo/${id}`),
};

const agent = {
  TodoItems,
};

export default agent;
