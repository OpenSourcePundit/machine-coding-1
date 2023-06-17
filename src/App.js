import React from 'react';
import logo from './logo.svg';
import {useContext} from "react";
import {Routes,Route,Navigate,} from 'react-router-dom';

import {SearchPage} from './pages/searchPage';
import {HomePage} from './pages/homePage';
import {NavBar} from './component/navbar';


import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
