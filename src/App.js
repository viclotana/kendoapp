import React, {useState} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
        <div className="content">
          <h2 style={{ display: 'flex', justifyContent: 'space-evenly' }}>KendoBnB</h2>
          <Route exact path="/" component={Home} />
        </div>
    </Router>
  );
}

export default App;
