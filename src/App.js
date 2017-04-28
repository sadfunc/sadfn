import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="sad-temp-container">
        <div className="sad-flexy-bawks">
          <div className="sad-flexy-item">
            <div className="sad-face"><h1>:&#123;</h1></div>
            <h1>Hi there.</h1>
            <p>We are SadFunction, and we'll be online soon. Check back for regular updates!</p>
            <div className="sad-progress-bar">
              <div id="sad-progress"></div>
            </div>
            <div id="sad-loading-text">
              Loading...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
