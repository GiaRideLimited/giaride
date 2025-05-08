import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Xend from './Pages/Xend';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrandPage from './Pages/ErrandPage';
import Drop from './Pages/Drop';
import HireCar from './Pages/HireCar';
import About from './Pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Main content routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/xend" element={<Xend />} />
            <Route path="/errand" element={<ErrandPage />} />
            <Route path="/drop" element={<Drop />} />
            <Route path="/hire-car" element={<HireCar />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
