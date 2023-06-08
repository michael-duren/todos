import AvatarPanel from './components/AvatarPanel';
import ItemPanel from './components/ItemPanel';
import Layout from './components/Layout';
import MainPanel from './components/MainPanel';

function App() {
  return (
    <Layout>
      <AvatarPanel />
      <MainPanel />
      <ItemPanel />
    </Layout>
  );
}

export default App;
