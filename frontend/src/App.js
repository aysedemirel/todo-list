import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Styles
import { GlobalStyle } from './GlobalStyle';
// components
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path= '/*' element= {<NotFound />}/>
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;