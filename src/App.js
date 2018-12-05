import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './home'
import getStarted from './getStarted'
import results from './results'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
            <Route exact path='' component={home} />
            <Route exact path='/get-started' component={getStarted} />
            <Route exact path='/results' component={results} />
        </div>
      </Router>
    );
  }
}

export default App;
