import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { AllExperience } from './components/AllExperience';
import { AllProject } from './components/AllProject';
import { Layout } from './components/Layout';
import { usePageVisibility } from './customhook/usePageVisibility';
import { ScrollAnimation } from './components/ScrollAnimation';
 
function App() {
  usePageVisibility();
 
  return (
    <Router>
      <ScrollAnimation>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewAllExperience" element={<AllExperience />} />
          <Route path="/viewAllProject" element={<AllProject />} />
        </Routes>
      </Layout>
      </ScrollAnimation>
    </Router>
  );
}
 
export default App;