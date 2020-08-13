import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import weather from './components/weather'

import { Route, Switch } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={weather} />
      </Switch>
    </div>
  );
}

export default App;
