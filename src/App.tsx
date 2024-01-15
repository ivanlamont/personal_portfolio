import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mobile from './pages/Mobile';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import FinancialServices from './pages/FinancialServices';
import MainPage from './pages/MainPage';
import AboutPage from "./pages/AboutPage";
import Technologies from './pages/Technologies';

const colors = {
  "landing": ["#1a57c9", "#6795c9", "#a7b5d6", "#C8B8C8"],
  "finance":  ["#1a97c9", "#67d5c9", "#87e5d6", "#88c8A8"],
  "ai":  ["#1a97c9", "#67d5c9", "#87e5d6", "#88c8A8"],
  "mobile":  ["#1a97c9", "#67d5c9", "#87e5d6", "#88c8A8"],
  "tech":  ["#1a97c9", "#67d5c9", "#87e5d6", "#88c8A8"],
  "about":  ["#1a97c9", "#67d5c9", "#87e5d6", "#88c8A8"],
}

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainPage colorSet={colors.landing} />}></Route>
          <Route path="/FinancialServices" element={<FinancialServices colorSet={colors.finance} />}></Route>
          <Route path="/ArtificialIntelligence" element={<ArtificialIntelligence colorSet={colors.ai} />}></Route>
          <Route path="/Mobile" element={<Mobile colorSet={colors.mobile}  />}></Route>
          <Route path="/Tech" element={<Technologies colorSet={colors.tech} />}></Route>
          <Route path="/About" element={<AboutPage colorSet={colors.about} />}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
