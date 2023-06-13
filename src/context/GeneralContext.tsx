import React, { createContext, useEffect, useState } from 'react';
import ToDo from '../models/todo';
import agent from '../api/agent';
import { filterByDate } from '../utils/filterByDate';

export interface IGeneralContext {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  unCompleteToDoList: ToDo[];
  setUnCompleteToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
  selectedTodo: ToDo | null;
  setSelectedTodo: React.Dispatch<React.SetStateAction<ToDo | null>>;
  completeToDoList: ToDo[];
  setCompleteToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
  lateView: boolean;
  setLateView: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  filteredCompleteToDoList: ToDo[];
  setFilteredCompleteToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export const GeneralContext = createContext<IGeneralContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unCompleteToDoList, setUnCompleteToDoList] = useState<ToDo[]>([]);
  const [completeToDoList, setCompleteToDoList] = useState<ToDo[]>([]);
  const [filteredCompleteToDoList, setFilteredCompleteToDoList] = useState<
    ToDo[]
  >([]);
  const [selectedTodo, setSelectedTodo] = useState<ToDo | null>(null);
  const [lateView, setLateView] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    agent.TodoItems.listUnComplete()
      .then((items) => {
        setUnCompleteToDoList(items);
        setSelectedTodo(items[0]);
      })
      .catch((error) => console.error(error));

    agent.TodoItems.listComplete()
      .then((items) => {
        setCompleteToDoList(items);
        setFilteredCompleteToDoList(
          completeToDoList.filter((toDo) => filterByDate(toDo, 'Today'))
        );
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
      setDarkMode(true);
    }
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        unCompleteToDoList,
        setUnCompleteToDoList,
        selectedTodo,
        setSelectedTodo,
        completeToDoList,
        setCompleteToDoList,
        lateView,
        setLateView,
        darkMode,
        setDarkMode,
        filteredCompleteToDoList,
        setFilteredCompleteToDoList,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
