import ToDoForm from './components/ToDoForm';
import AvatarPanel from './components/AvatarPanel';
import ItemPanel from './components/ItemPanel';
import Layout from './components/Layout';
import MainPanel from './components/MainPanel';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Layout>
        <AvatarPanel />
        <MainPanel />
        <ItemPanel />
      </Layout>
      <Modal>
        <ToDoForm isEdit={false} />
      </Modal>
    </>
  );
}

export default App;
