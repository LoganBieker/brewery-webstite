import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css'

import HomePage from './pages/HomePage';
import TheBrewery from './pages/TheBrewery';
import Beer from './pages/Beer'
import OnTap from './pages/OnTap'
import ContactUs from './pages/ContactUs.jsx';
import Location from './pages/Location.jsx';
import Mead from './pages/Mead.jsx';
import Other from './pages/Other.jsx';
import Events from './pages/Events.jsx';

function App() {
  console.log("Started App")
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/TheBrewery' element={<TheBrewery />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>
        <Route path='/Location' element={<Location />}></Route>
        <Route path='/OnTap' element={<OnTap />}></Route>
        <Route path='/Beer' element={<Beer />}></Route>
        <Route path='/Mead' element={<Mead />}></Route>
        <Route path='/Other' element={<Other />}></Route>
        <Route path='/Events' element={<Events />}></Route>
      </Routes>
    </Router>
  )
}

export default App
