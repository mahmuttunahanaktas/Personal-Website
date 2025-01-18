import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage'; import Blog from './components/Blog';
import Projects from './components/Projects';
import Basarilar from './components/Basarilar';
import Iletisim from './components/Iletisim';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/MyProjects" element={<Projects />} />
        <Route path="/Basarilar" element={<Basarilar />} />
        <Route path="/Iletisim" element={<Iletisim />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
