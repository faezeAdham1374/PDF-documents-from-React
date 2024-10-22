import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home';
import Header from './Components/Header';
import "../styles/tailwind/globals.css";
import Description from './Containers/Description';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descriptions" element={<Description />} />
      </Routes>
    </Router>
  );
};

export default App;
