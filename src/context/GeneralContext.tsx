import React, { createContext, useEffect, useState } from 'react';
import ToDo from '../models/todo';
import agent from '../api/agent';

export interface IGeneralContext {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todoList: ToDo[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
  selectedTodo: ToDo | null;
  setSelectedTodo: React.Dispatch<React.SetStateAction<ToDo | null>>;
}

export const GeneralContext = createContext<IGeneralContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ToDo | null>(null);

  useEffect(() => {
    agent.TodoItems.list()
      .then((items) => {
        setTodoList(items);
        setSelectedTodo(items[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        todoList,
        setTodoList,
        selectedTodo,
        setSelectedTodo,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
