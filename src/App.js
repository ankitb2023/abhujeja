import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Main}></Route>
      </Routes>
    </Router>
  );
}

export default App;
