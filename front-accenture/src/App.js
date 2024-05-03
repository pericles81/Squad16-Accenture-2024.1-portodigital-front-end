import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/login'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" Component={Login} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
