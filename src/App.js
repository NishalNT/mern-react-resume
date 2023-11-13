import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <div className="wrap-content">
      <div className="container">
        <h1 className="text-center font-semibold">RESUME</h1>
        <Home/>
      </div>
    </div>
  );
}

export default App;
