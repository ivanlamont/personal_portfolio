import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobilePage from './pages/Mobile';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import FinancialServices from './pages/FinancialServices';
import MainPage from './pages/MainPage';
import AboutPage from "./pages/AboutPage";
import Education from './pages/Education';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import chroma from "chroma-js";
import Technologies from './components/TechnologiesSection';
import ManagerPage from './pages/ManagerPage';

const colorschemes_json = './colorschemes.json'

type ColorScheme = {
  [key: string]: string[];
  landing: string[];
  finance: string[];
  ed: string[];
  ai: string[];
  mobile: string[];
  tech: string[];
  languages: string[];
  management: string[];
  principles: string[];
  about: string[];
}

function flipColor(color: string): chroma.Color {
  if (chroma(color).luminance() > 0.5)
    return chroma(color).darken(2);
  else
    return chroma(color).brighten(2);
}

function flipScheme(colorList: ColorScheme) {
  const newColorList = {} as ColorScheme;
  Object.entries(colorList).forEach(([key, value]) => {
    value.forEach((color, index) => { 
      newColorList[key][index] = flipColor(color).hex();
    });
  });
  return newColorList
}

function App() {
  const [colorList, setColorList] = useState<ColorScheme>({} as ColorScheme);
  const [colorTheme] = useState('light');

  useEffect(() => {
    axios
    .get(colorschemes_json)
    .then((result) => setColorList(result.data))
    .catch(err=>console.log('color scheme load error=>',err))
  },[]);

  if (Object.keys(colorList).length == 0)
    return <Heading color="white">Loading...</Heading>
  else {
    const activeColors = colorTheme === 'light' ? colorList : flipScheme(colorList);
    return ColorApp(activeColors);
  }
}

function ColorApp(colorList: ColorScheme) {
  return (
    <Router>
      <Routes >
          <Route path="/" element={<MainPage colorSet={colorList.landing} />}></Route>
          <Route path="/FinancialServices" element={<FinancialServices colorSet={colorList.finance} />}></Route>
          <Route path="/ArtificialIntelligence" element={<ArtificialIntelligence colorSet={colorList.ai} />}></Route>
          <Route path="/Education" element={<Education colorSet={colorList.ed} />}></Route>
          <Route path="/Mobile" element={<MobilePage colorSet={colorList.mobile}  />}></Route>
          <Route path="/Manager" element={<ManagerPage colorSet={colorList.management} />}></Route>
          <Route path="/Principles" element={<Technologies colorSet={colorList.principles} sourceFile="./principles.json" />}></Route>
          <Route path="/Languages" element={<Technologies colorSet={colorList.languages} sourceFile="./languages.json"  />}></Route>
          <Route path="/Tech" element={<Technologies colorSet={colorList.tech} sourceFile="./tech.json"  />}></Route>
          <Route path="/About" element={<AboutPage colorSet={colorList.about} />}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
