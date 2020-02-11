import React, { Component } from 'react';
import { Navbar } from './Navbar.js';
import './style.css';
import HomePage from './Home.js';

export default class App extends Component {
  render() { 
    return (
    <div className="App">
        <Navbar></Navbar>
        <HomePage></HomePage>
    </div>
    );
  }
}

