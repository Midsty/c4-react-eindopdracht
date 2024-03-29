import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1>C4 React Angular</h1>

      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Lijst van familie </Link>
          </li>
          <li>
            <Link to="user/create">Maak familie aan</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
