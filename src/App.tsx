import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorThemeContext } from './context/colorContext'; // import the context
import MobilePage from './pages/Mobile';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import FinancialServices from './pages/FinancialServices';
import MainPage from './pages/MainPage';
import AboutPage from "./pages/AboutPage";
import Technologies from './pages/Technologies';
import Education from './pages/Education';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import chroma from "chroma-js";

const colorschemes_json = './colorschemes.json'

type ColorScheme = {
  [key: string]: string[];
  landing: string[];
  finance: string[];
  ed: string[];
  ai: string[];
  mobile: string[];
  tech: string[];
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
 // Add a closing parenthesis here

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
          <Route path="/Tech" element={<Technologies colorSet={colorList.tech} />}></Route>
          <Route path="/About" element={<AboutPage colorSet={colorList.about} />}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
