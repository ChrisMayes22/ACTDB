import './App.css';
import Home from './pages/home/home';
import Crud from './pages/crud/crud';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link to="/"><button>Quiz</button></Link>
            </li>
            <li className="navbar__list-item">
              <Link to="crud"><button>Get Questions</button></Link>
            </li>
          </ul>
        </nav>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/crud'} element={<Crud/>}/>
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
