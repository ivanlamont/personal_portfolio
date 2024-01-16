import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mobile from './pages/Mobile';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import FinancialServices from './pages/FinancialServices';
import MainPage from './pages/MainPage';
import AboutPage from "./pages/AboutPage";
import Technologies from './pages/Technologies';
import Education from './pages/Education';

const colors = {
  "landing": ["#1a57c9", "#6795c9", "#a7b5d6", "#C8B8C8"],
  "finance":  ["#53b87e", "#8adeae", "#dff5e8", "#f5faf7"],
  "ed":  ["#f5d1b8", "#b57153", "#bd8e7b", "#fcf4eb"],
  "ai":  ["#dfd2fa", "#e5dcf7", "#e7e4ed", "#f5f2fa"],
  "mobile":  ["#c20c27", "#f5909f", "#f7d7dc", "#f7d7dc"],
  "tech":  ["#1aaee8", "#58c3ed", "#b6e1f2", "#e4f0f5"],
  "about":  ["#f6f7d2", "#d5d90b", "#f5f76a", "#f9fae6"],
}

function App() {
  return (
    <Router>
      <Routes >
          <Route path="/" element={<MainPage colorSet={colors.landing} />}></Route>
          <Route path="/FinancialServices" element={<FinancialServices colorSet={colors.finance} />}></Route>
          <Route path="/ArtificialIntelligence" element={<ArtificialIntelligence colorSet={colors.ai} />}></Route>
          <Route path="/Education" element={<Education colorSet={colors.ed} />}></Route>
          <Route path="/Mobile" element={<Mobile colorSet={colors.mobile}  />}></Route>
          <Route path="/Tech" element={<Technologies colorSet={colors.tech} />}></Route>
          <Route path="/About" element={<AboutPage colorSet={colors.about} />}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
