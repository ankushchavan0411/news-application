/**
 * @author Ankush Chavan
 * @description Here we have combine all our components
 */
import Layout from "./components/Layout";
import NewsList from "./components/NewsList";
import Loader from "./components/Loader";
function App() {
  return (
    <Layout>
      <Loader>
        <NewsList />
      </Loader>
    </Layout>
  );
}

export default App;
