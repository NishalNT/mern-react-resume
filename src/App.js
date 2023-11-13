import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <div className="wrap-content">
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
