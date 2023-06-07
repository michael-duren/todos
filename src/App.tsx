import AddTodoForm from './components/AddTodoForm';
import AvatarPanel from './components/AvatarPanel';
import Header from './components/Header';
import ItemPanel from './components/ItemPanel';
import Layout from './components/Layout';
import MainPanel from './components/MainPanel';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <main className="min-h-[40rem]  grid grid-cols-12 grid-rows-1 mt-8">
          <div className="col-span-3  flex justify-center">
            <AvatarPanel />
          </div>
          <div className="col-span-6 flex justify-center">
            <MainPanel />
          </div>
          <div className="col-span-3  flex justify-center">
            <ItemPanel />
          </div>
        </main>
      </Layout>
      <Modal>
        <AddTodoForm />
      </Modal>
    </>
  );
}

export default App;
