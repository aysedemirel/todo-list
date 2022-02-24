import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Styles
import { GlobalStyle } from './GlobalStyle';
import "./App.css";
// components
import Header from './components/Header';
import Navigate from './components/Navigate';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Header />
    <div class="Content">
      <Navigate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
    <GlobalStyle />
  </Router>
);

export default App;