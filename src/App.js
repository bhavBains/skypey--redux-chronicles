import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
