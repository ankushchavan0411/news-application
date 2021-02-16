/**
 * @author Ankush Chavan
 * @description Here we have combine all our components
 */
import Layout from "./components/Layout";
import NewsList from "./components/NewsList";
function App() {
  return (
    <Layout>
      <NewsList />
    </Layout>
  );
}

export default App;
