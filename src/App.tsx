import AvatarPanel from './components/sections/AvatarPanel';
import ItemPanel from './components/sections/ItemPanel';
import Layout from './components/layout/Layout';
import MainPanel from './components/sections/MainPanel';

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
