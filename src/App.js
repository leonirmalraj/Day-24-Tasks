import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Career from './components/Career';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import './styles.css';
import DefaultLayout from './layouts/DefaultLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route index element ={<Home/>}/>
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
