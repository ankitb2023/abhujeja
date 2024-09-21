import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { AllExperience } from './components/AllExperience';
import { AllProject } from './components/AllProject';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact Component={Main}></Route>
          <Route
            path="/viewAllExperience"
            exact
            Component={AllExperience}
          ></Route>
          <Route path="/viewAllProject" exact Component={AllProject}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
