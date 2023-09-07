import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CarDetails from './components/CarDetails';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/car/:id' element={<CarDetails />} />
    </Routes>
  </Router>
);
