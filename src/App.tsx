import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <h1 className="text-red-500">Hello There</h1>
          <p>test</p>
        </main>
      </Layout>
    </>
  );
}

export default App;
