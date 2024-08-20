import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner.js';
import ProtecteRoute from './components/ProtecteRoute.js';
import PublicRoute from './components/PublicRoute.js';

function App() {
  const { visible } = useSelector((state) => state.alert);
  
  return (
    <>
      <BrowserRouter>
        {visible ? <Spinner /> : (
          <Routes>
            <Route path="/" 
            element={
              <ProtecteRoute>
                <HomePage />
              </ProtecteRoute>
            } />
            <Route path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } />
            <Route path="/register" 
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
