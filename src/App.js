import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';

function App() {
  return (
    <>
    <Router>
      <div className="react-router bg-gray-500">
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/FirstPage'>First Page</Link>
            </li>
            <li>
              <Link to='/SecondPage'>Second Page</Link>
            </li>
        </ul>
      </div>

      <Routes>
        <Route path='/'>

        </Route>
        <Route path='/FirstPage' element={<FirstPage />}>

        </Route>
        <Route path='/SecondPage' element={<SecondPage />}>

        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
