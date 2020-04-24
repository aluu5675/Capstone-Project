import React, { Component } from 'react';
import { Navbar } from './Navbar.js'
import { ResourcesPage, ResourceList } from './resourceConnector.js'
import './style.css';

export default class App extends Component {
  render() { 
    return (
      <ResourcesPage />
    );
  }
}

