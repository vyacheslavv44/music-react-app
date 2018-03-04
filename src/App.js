import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory } from 'react-router-3';
import Tracks from './pages/Tracks/Tracks';
import Request from './pages/Request/Request';
import createStore from './store/create';

class App extends Component {
  store = createStore();

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            
            <p><Link to="/">Главная</Link></p>
            <p><Link to="/tracks">Песни</Link></p>
            <p><Link to="/request">Пользователи</Link></p>

            {this.props.children}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
