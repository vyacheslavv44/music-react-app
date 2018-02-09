import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-3';
import Tracks from './pages/Tracks/Tracks';
import Request from './pages/Request/Request';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <p><Link to="/">Главная</Link></p>
          <p><Link to="/tracks">Песни</Link></p>
          <p><Link to="/request">Пользователи</Link></p>

          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
