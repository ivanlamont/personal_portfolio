import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mobile from './pages/Mobile';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import FinancialServices from './pages/FinancialServices';
import About from './pages/About';
import MainPage from './pages/MainPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/FinancialServices" element={<FinancialServices />}></Route>
                <Route path="/ArtificialIntelligence" element={<ArtificialIntelligence />}></Route>
                <Route path="/Mobile" element={<Mobile />}></Route>
                <Route path="/About" element={<About />}></Route>
            </Routes>
        </Router>
    )
}