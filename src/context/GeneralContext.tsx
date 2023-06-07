import React, { createContext, useState } from 'react';

export interface IGeneralContext {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GeneralContext = createContext<IGeneralContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <GeneralContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </GeneralContext.Provider>
  );
};
