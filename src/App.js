import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default hot(module)(App);
