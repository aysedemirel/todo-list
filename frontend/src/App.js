import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Styles
import { GlobalStyle } from './GlobalStyle';
import "./App.css";
// components
import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Header />
    <div class="Content">
      <Navigate />
      <Routes>
        <Route path='/Today' element={<Home title={"Today"} planned={0} done={0}/>} />
        <Route path='/Tomorrow' element={<Home title={"Tomorrow"} planned={0} done={0}/>} />
        <Route path='/Week' element={<Home title={"This Week"} planned={0} done={0}/>} />
        <Route path='/Month' element={<Home title={"This Month"} planned={0} done={0}/>} />
        <Route path='/Year' element={<Home title={"This Year"} planned={0} done={0}/>} />
        <Route path='/Unplanned' element={<Home title={"Unplanned"} planned={0} done={0}/>} />
        <Route path='/All' element={<Home title={"All Items"} planned={0} done={0}/>} />
        <Route path='/Done' element={<Home title={"Done"} planned={0} done={0}/>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
    <GlobalStyle />
  </Router>
);

export default App;