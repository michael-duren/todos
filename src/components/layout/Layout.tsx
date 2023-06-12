import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../../context/GeneralContext';
import Header from '../sections/Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { darkMode } = useContext(GeneralContext) as IGeneralContext;

  return (
    <div
      className={`h-full w-full ${
        darkMode ? 'bg-gray-950' : ''
      } min-h-[100vh] p-8`}
    >
      <Header />
      <main className="min-h-[40rem]  grid grid-cols-12 grid-rows-1 mt-8">
        {children}
      </main>
    </div>
  );
}
