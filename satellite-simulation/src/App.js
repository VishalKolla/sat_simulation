import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SingleSatellite from './pages/SingleSatellite';
import MultipleSatellites from './pages/MultipleSatellites';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/single-satellite" component={SingleSatellite} />
        <Route path="/multiple-satellites" component={MultipleSatellites} />
      </Switch>
    </Router>
  );
}

export default App;
