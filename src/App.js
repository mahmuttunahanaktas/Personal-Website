import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage'; import Blog from './components/Blog';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
