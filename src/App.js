import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner.js';

function App() {
  const { visible } = useSelector((state) => state.alert);
  
  return (
    <>
      <BrowserRouter>
        {visible ? <Spinner /> : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
