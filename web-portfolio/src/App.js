import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//static elements
import Navbar from './Features/Navigation/Navbar';

//Pages
import Home from './Pages/Home';

function App() {
  return (
      <Router>
        <div>
          <Navbar />
        </div>
        <div id='PageBody'>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
