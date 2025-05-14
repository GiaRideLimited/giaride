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
import Travel from './Pages/Travel';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ScrollToTop from './Utils/ScrollToTop'; 

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Main content routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/xend" element={<Xend />} />
            <Route path="/errand" element={<ErrandPage />} />
            <Route path="/drop" element={<Drop />} />
            <Route path="/hire-car" element={<HireCar />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
