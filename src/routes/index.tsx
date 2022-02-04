import React from 'react';

import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import Agents from '../pages/Agents';
import Collection from '../pages/Collection';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/collections" element={<Collection />} />
      </Router>
    </BrowserRouter>
  );
}
