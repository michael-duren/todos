import axios, { AxiosResponse } from 'axios';
import ToDo from '../models/todo';

const getData = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(getData),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(getData),
  put: <T>(url: string, body: {}) => axios.post<T>(url, body).then(getData),
  del: <T>(url: string) => axios.delete<T>(url).then(getData),
};

const TodoItems = {
  list: () => requests.get<ToDo[]>('/api/todo'),
  single: (id: string) => requests.get<ToDo>(`/api/todo/${id}`),
  create: (newItem: ToDo) => requests.post<void>('/api/todo', newItem),
  edit: (newItem: ToDo, id: string) =>
    requests.put<void>(`/api/todo/${id}`, newItem),
  delete: (id: string) => requests.del<void>(`/api/todo/${id}`),
};

const agent = {
  TodoItems,
};

export default agent;
