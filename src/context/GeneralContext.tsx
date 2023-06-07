import React, { createContext, useEffect, useState } from 'react';
import ToDo from '../models/todo';
import axios, { AxiosResponse } from 'axios';

export interface IGeneralContext {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todoList: ToDo[];
}

export const GeneralContext = createContext<IGeneralContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<ToDo[]>([]);

  useEffect(() => {
    axios
      .get('/api/todo')
      .then((res: AxiosResponse) => res.data)
      .then((todos) => setTodoList(todos))
      .catch((err) => console.error(err));
  }, []);

  return (
    <GeneralContext.Provider value={{ isModalOpen, setIsModalOpen, todoList }}>
      {children}
    </GeneralContext.Provider>
  );
};
