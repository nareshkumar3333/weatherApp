import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from '../src/pages/WeatherApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

